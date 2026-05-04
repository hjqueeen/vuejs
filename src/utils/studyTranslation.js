/** eBook 본문(영어) 옆에 표시할 학습 번역 언어 */
export const STUDY_TRANSLATION_KO = "ko";
export const STUDY_TRANSLATION_DE = "de";

export const STUDY_TRANSLATION_OPTIONS = [STUDY_TRANSLATION_KO, STUDY_TRANSLATION_DE];

/**
 * 문장·문단 등에 붙은 번역 필드 중 현재 설정에 맞는 문자열을 고릅니다.
 * @param {{ koreanTranslation?: string, germanTranslation?: string } | null | undefined} entity
 * @param {string} language `ko` | `de`
 */
export function pickStudyTranslation(entity, language) {
  if (!entity) return "";
  if (language === STUDY_TRANSLATION_DE && entity.germanTranslation) {
    return entity.germanTranslation;
  }
  return entity.koreanTranslation || "";
}
