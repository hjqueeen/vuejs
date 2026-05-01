/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const projectRoot = path.resolve(__dirname, "..");
const dataFile = path.join(projectRoot, "src/data/englishLearningDb.js");
const outputDir = path.join(projectRoot, "public/audio");

const env = process.env;
const provider = (env.TTS_PROVIDER || "elevenlabs").toLowerCase();
const elevenVoiceId = env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
const elevenModel = env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
const openAiModel = env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
const openAiVoice = env.OPENAI_TTS_VOICE || "alloy";
const force = env.TTS_FORCE === "true";

const pickSection = (source, exportName) => {
  const startToken = `export const ${exportName} = [`;
  const start = source.indexOf(startToken);
  if (start < 0) return "";
  const rest = source.slice(start);
  const end = rest.indexOf("];");
  if (end < 0) return "";
  return rest.slice(0, end + 2);
};

const extractSentenceTexts = (source) => {
  const regex = /id:\s*"([^"]+)"[\s\S]*?originalText:\s*"([\s\S]*?)",\s*\n\s*koreanTranslation/g;
  const result = [];
  let match = regex.exec(source);
  while (match) {
    result.push({ id: match[1], text: match[2].trim(), kind: "sentence" });
    match = regex.exec(source);
  }
  return result;
};

const extractParagraphTexts = (source) => {
  const regex = /id:\s*"([^"]+)"[\s\S]*?englishText:\s*"([\s\S]*?)",\s*\n\s*koreanTranslation/g;
  const result = [];
  let match = regex.exec(source);
  while (match) {
    result.push({ id: match[1], text: match[2].trim(), kind: "paragraph" });
    match = regex.exec(source);
  }
  return result;
};

const fetchBinary = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(`HTTP ${response.status} - ${message}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  return buffer;
};

const generateWithElevenlabs = async (text, speedType) => {
  if (!env.ELEVENLABS_API_KEY) {
    throw new Error("ELEVENLABS_API_KEY is missing.");
  }
  const body = {
    text,
    model_id: elevenModel,
    voice_settings: {
      stability: speedType === "slow" ? 0.58 : 0.45,
      similarity_boost: 0.8,
      style: speedType === "slow" ? 0.1 : 0.2,
      use_speaker_boost: true,
    },
  };

  return fetchBinary(`https://api.elevenlabs.io/v1/text-to-speech/${elevenVoiceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": env.ELEVENLABS_API_KEY,
    },
    body: JSON.stringify(body),
  });
};

const generateWithOpenAi = async (text, speedType) => {
  if (!env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing.");
  }
  const body = {
    model: openAiModel,
    voice: openAiVoice,
    input: text,
    format: "mp3",
    speed: speedType === "slow" ? 0.82 : 1.0,
  };

  return fetchBinary("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const generateWithFallback = async (text, speedType) => {
  const order = provider === "openai" ? ["openai", "elevenlabs"] : ["elevenlabs", "openai"];
  let lastError = null;

  for (const item of order) {
    try {
      if (item === "elevenlabs") {
        return await generateWithElevenlabs(text, speedType);
      }
      return await generateWithOpenAi(text, speedType);
    } catch (error) {
      lastError = error;
      console.warn(`[TTS] ${item} failed (${speedType}): ${error.message}`);
    }
  }
  throw lastError;
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const writeIfNeeded = async (id, speedType, text) => {
  const targetPath = path.join(outputDir, `${id}-${speedType}.mp3`);
  if (!force && fs.existsSync(targetPath)) {
    console.log(`[SKIP] ${id}-${speedType}.mp3 already exists`);
    return;
  }
  const binary = await generateWithFallback(text, speedType);
  fs.writeFileSync(targetPath, binary);
  console.log(`[OK] ${id}-${speedType}.mp3 generated`);
};

const main = async () => {
  ensureDir(outputDir);
  const source = fs.readFileSync(dataFile, "utf8");
  const sentenceSection = pickSection(source, "sentences");
  const paragraphSection = pickSection(source, "paragraphs");
  const targets = [...extractParagraphTexts(paragraphSection), ...extractSentenceTexts(sentenceSection)];

  if (!targets.length) {
    throw new Error("No TTS targets found in englishLearningDb.js");
  }

  console.log(`[TTS] provider=${provider}, targets=${targets.length}`);
  for (const item of targets) {
    await writeIfNeeded(item.id, "normal", item.text);
  }
  console.log("[TTS] Completed.");
};

main().catch((error) => {
  console.error("[TTS] Failed:", error.message);
  process.exit(1);
});
