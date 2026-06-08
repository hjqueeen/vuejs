/**
 * public/ 폴더 정적 파일 URL (GitHub Pages 서브경로 /vuejs/ 대응)
 * @param {string} path - "audio/foo.mp3" 또는 "/audio/foo.mp3"
 */
export function publicAssetUrl(path) {
  const base = process.env.BASE_URL || "/";
  const clean = String(path).replace(/^\//, "");
  return `${base}${clean}`;
}
