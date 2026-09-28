<template>
  <div v-if="book" class="notes-page">
    <header class="notes-header">
      <button type="button" class="back-btn" @click="goDashboard">← 서재</button>
      <div class="notes-header-main">
        <div>
          <h1>{{ book.title }}</h1>
          <p class="notes-sub">{{ book.subtitle }}</p>
        </div>
        <div class="lang-toggle" role="group" aria-label="표시 언어">
          <button
            type="button"
            class="lang-btn"
            :class="{ active: langMode === 'de' }"
            @click="langMode = 'de'"
          >
            DE
          </button>
          <button
            type="button"
            class="lang-btn"
            :class="{ active: langMode === 'both' }"
            @click="langMode = 'both'"
          >
            DE+KO
          </button>
          <button
            type="button"
            class="lang-btn"
            :class="{ active: langMode === 'ko' }"
            @click="langMode = 'ko'"
          >
            KO
          </button>
        </div>
      </div>
      <p class="notes-hint">
        챕터를 순서대로 읽으세요. 암기는
        <button
          v-if="relatedFlashcardId"
          type="button"
          class="inline-link"
          @click="goFlashcards"
        >
          플래시카드
        </button>
        <span v-else>플래시카드</span>
        로 이어가면 됩니다.
      </p>
    </header>

    <nav class="notes-toc" aria-label="목차">
      <button
        v-for="ch in chapters"
        :key="ch.id"
        type="button"
        class="toc-chip"
        :class="{ active: activeChapterId === ch.id }"
        @click="scrollToChapter(ch.id)"
      >
        {{ tocLabel(ch) }}
      </button>
    </nav>

    <div class="notes-body">
      <section
        v-for="ch in chapters"
        :id="ch.id"
        :key="ch.id"
        class="notes-chapter"
      >
        <h2 class="chapter-title">
          <span v-if="showDe" class="title-de">{{ ch.titleDe }}</span>
          <span v-if="showKo" class="title-ko">{{ ch.titleKo }}</span>
        </h2>

        <div
          v-for="(block, idx) in ch.blocks"
          :key="`${ch.id}-${idx}`"
          class="note-block"
          :class="`note-block--${block.type}`"
        >
          <template v-if="block.type === 'meta'">
            <p v-if="showDe" class="meta-de">{{ block.de }}</p>
            <p v-if="showKo" class="meta-ko">{{ block.ko }}</p>
          </template>

          <template v-else-if="block.type === 'h3'">
            <h3>
              <span v-if="showDe">{{ block.de }}</span>
              <span v-if="showKo" class="h3-ko">{{ block.ko }}</span>
            </h3>
          </template>

          <template v-else-if="block.type === 'p'">
            <p v-if="showDe" class="text-de">{{ block.de }}</p>
            <p v-if="showKo" class="text-ko">{{ block.ko }}</p>
          </template>

          <template v-else-if="block.type === 'callout'">
            <div class="callout">
              <p v-if="showDe" class="text-de">{{ block.de }}</p>
              <p v-if="showKo" class="text-ko">{{ block.ko }}</p>
            </div>
          </template>

          <template v-else-if="block.type === 'ul' || block.type === 'ol'">
            <component :is="block.type === 'ol' ? 'ol' : 'ul'" class="note-list">
              <li v-for="(item, i) in block.items" :key="i">
                <span v-if="showDe" class="text-de">{{ item.de }}</span>
                <span v-if="showKo" class="text-ko">{{ item.ko }}</span>
              </li>
            </component>
          </template>
        </div>
      </section>
    </div>
  </div>
  <p v-else class="notes-missing">책을 찾을 수 없습니다.</p>
</template>

<script>
import { getBookById } from "@/data/books";
import {
  PHYSIK_K9_NOTES_BOOK_ID,
  PHYSIK_K9_NOTES_RELATED_FLASHCARD_ID,
  physikKlasse9NotesChapters,
} from "@/data/physikKlasse9NotesContent.js";
import { getDashboardLocation } from "@/data/bookCatalog";

const LANG_KEY = "study-notes-lang-mode";

export default {
  name: "StudyNotesView",
  props: {
    bookId: { type: String, default: "" },
  },
  data() {
    let langMode = "both";
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "de" || saved === "ko" || saved === "both") langMode = saved;
    } catch {
      /* ignore */
    }
    return {
      langMode,
      activeChapterId: "",
    };
  },
  computed: {
    resolvedBookId() {
      return this.bookId || this.$route.params.bookId;
    },
    book() {
      return getBookById(this.resolvedBookId);
    },
    chapters() {
      if (this.resolvedBookId === PHYSIK_K9_NOTES_BOOK_ID) {
        return physikKlasse9NotesChapters;
      }
      return this.book?.chapters || [];
    },
    relatedFlashcardId() {
      return (
        this.book?.relatedFlashcardBookId ||
        (this.resolvedBookId === PHYSIK_K9_NOTES_BOOK_ID
          ? PHYSIK_K9_NOTES_RELATED_FLASHCARD_ID
          : null)
      );
    },
    showDe() {
      return this.langMode === "de" || this.langMode === "both";
    },
    showKo() {
      return this.langMode === "ko" || this.langMode === "both";
    },
  },
  watch: {
    langMode(val) {
      try {
        localStorage.setItem(LANG_KEY, val);
      } catch {
        /* ignore */
      }
    },
  },
  mounted() {
    if (this.chapters.length) {
      this.activeChapterId = this.chapters[0].id;
    }
    this._onScroll = () => this.updateActiveFromScroll();
    window.addEventListener("scroll", this._onScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this._onScroll);
  },
  methods: {
    tocLabel(ch) {
      if (this.langMode === "ko") return ch.titleKo;
      return ch.titleDe;
    },
    scrollToChapter(id) {
      this.activeChapterId = id;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    updateActiveFromScroll() {
      const offset = 120;
      let current = this.chapters[0]?.id || "";
      for (const ch of this.chapters) {
        const el = document.getElementById(ch.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = ch.id;
        }
      }
      this.activeChapterId = current;
    },
    goDashboard() {
      this.$router.push(getDashboardLocation());
    },
    goFlashcards() {
      if (!this.relatedFlashcardId) return;
      this.$router.push({
        name: "flashcard-hub",
        params: { bookId: this.relatedFlashcardId },
      });
    },
  },
};
</script>

<style scoped>
.notes-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 3rem;
  color: var(--c-text-primary);
  -webkit-font-smoothing: antialiased;
}

.notes-header {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--c-bg, #f7f8fa);
  padding: 0.75rem 0 0.5rem;
  border-bottom: 1px solid var(--c-border);
}

.back-btn {
  align-self: flex-start;
  border: none;
  background: transparent;
  color: var(--c-blue-mid);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
}

.notes-header-main {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.notes-header h1 {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
}

.notes-sub {
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: var(--c-text-secondary);
}

.notes-hint {
  margin: 0;
  font-size: 0.85rem;
  color: var(--c-text-secondary);
}

.inline-link {
  border: none;
  background: none;
  color: var(--c-blue-mid);
  font: inherit;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
}

.lang-toggle {
  display: inline-flex;
  border: 1px solid var(--c-border);
  border-radius: 999px;
  overflow: hidden;
  background: var(--c-surface);
}

.lang-btn {
  border: none;
  background: transparent;
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--c-text-secondary);
}

.lang-btn.active {
  background: var(--c-blue-mid);
  color: #fff;
}

.notes-toc {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
  position: sticky;
  top: 7.5rem;
  z-index: 4;
  background: var(--c-bg, #f7f8fa);
  padding: 0.4rem 0 0.6rem;
}

.toc-chip {
  border: 1px solid var(--c-border);
  background: var(--c-surface);
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
  font-size: 0.75rem;
  cursor: pointer;
  color: var(--c-text-secondary);
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toc-chip.active {
  border-color: var(--c-blue-mid);
  color: var(--c-blue-mid);
  font-weight: 600;
  background: rgba(45, 95, 168, 0.08);
}

.notes-chapter {
  margin-bottom: 2.25rem;
  scroll-margin-top: 10rem;
}

.chapter-title {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--c-blue-mid);
  font-size: 1.15rem;
  line-height: 1.35;
}

.title-ko {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--c-text-secondary);
}

.note-block {
  margin-bottom: 0.85rem;
}

.note-block--h3 h3 {
  margin: 1rem 0 0.4rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.h3-ko {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--c-text-secondary);
}

.text-de {
  margin: 0 0 0.25rem;
  font-size: 0.98rem;
  line-height: 1.55;
}

.text-ko {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--c-text-secondary);
}

.meta-de,
.meta-ko {
  margin: 0;
  font-size: 0.82rem;
  color: var(--c-text-secondary);
}

.callout {
  border-left: 3px solid var(--c-blue-mid);
  background: rgba(45, 95, 168, 0.06);
  padding: 0.7rem 0.9rem;
  border-radius: 0 8px 8px 0;
}

.callout .text-de {
  font-weight: 600;
}

.note-list {
  margin: 0.25rem 0 0;
  padding-left: 1.2rem;
}

.note-list li {
  margin-bottom: 0.55rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.notes-missing {
  padding: 2rem;
  text-align: center;
  color: var(--c-text-secondary);
}

@media (max-width: 640px) {
  .notes-toc {
    top: 8.5rem;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.75rem;
  }

  .toc-chip {
    flex: 0 0 auto;
    max-width: 14rem;
  }

  .notes-chapter {
    scroll-margin-top: 11rem;
  }
}
</style>
