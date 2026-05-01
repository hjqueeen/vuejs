<template>
  <div id="app">
    <AppHeader
      :is-ebook-route="isEbookRoute"
      :show-language-mask-controls="showLanguageMaskControls"
      :show-toc="showToc"
      :page-mode="pageMode"
      :hide-english="hideEnglish"
      :hide-korean="hideKorean"
      :hide-completed-sentences="hideCompletedSentences"
      :dark-mode="darkMode"
      @toggle-toc="toggleToc"
      @change-page-mode="changePageMode"
      @toggle-hide-english="toggleHideEnglish"
      @toggle-hide-korean="toggleHideKorean"
      @toggle-hide-completed="toggleHideCompletedSentences"
      @toggle-dark-mode="toggleDarkMode"
    />
    <main class="app-main">
      <div
        v-if="isEbookRoute && isSpeakingListeningTemplate"
        class="ebook-shell"
        :class="{ 'no-toc': !showToc }"
      >
        <aside v-if="showToc" class="ebook-toc">
          <p class="ebook-eyebrow">{{ $t("ebook.label") }}</p>
          <h2>{{ currentBook.title }}</h2>
          <p class="chapter-summary">{{ currentBook.subtitle }}</p>
          <ol>
            <li v-for="(page, index) in tocPages" :key="page.key">
              <button
                type="button"
                class="toc-item"
                :class="{ active: isTocPageActive(page) }"
                @click="goToPage(page)"
              >
                <span class="chapter-no">{{ index + 1 }}</span>
                <span>
                  <small>{{ page.summary }}</small>
                </span>
              </button>
            </li>
          </ol>
        </aside>

        <section class="ebook-page-wrap" :class="{ 'double-page': isDoublePageMode }">
          <button
            type="button"
            class="page-side-nav prev"
            :disabled="!prevPage"
            :aria-label="$t('ebook.prev')"
            @click="goToPage(prevPage)"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div
            class="ebook-swipe-area"
            @touchstart="onEbookTouchStart"
            @touchend="onEbookTouchEnd"
            @touchcancel="onEbookTouchCancel"
          >
            <transition :name="transitionName" mode="out-in">
              <div :key="$route.fullPath + '-' + pageMode" class="ebook-pages">
                <div class="ebook-page">
                  <ParagraphDetailView
                    v-if="primaryPage && primaryPage.type.startsWith('paragraph')"
                    :paragraph-id="primaryPage.route.params.paragraphId"
                    :view-mode="primaryPage.viewMode"
                  />
                  <GrammarChapterView
                    v-else-if="primaryPage && primaryPage.type === 'grammar'"
                    :grammar-id="primaryPage.route.params.grammarId"
                  />
                  <QuizChapterView
                    v-else-if="primaryPage && primaryPage.type === 'quiz'"
                    :quiz-id="primaryPage.route.params.quizId"
                  />
                  <SentenceDetailView v-else :sentence-id="currentSentenceId" />
                </div>
                <div v-if="isDoublePageMode" class="ebook-page second-page">
                  <ParagraphDetailView
                    v-if="secondaryPage && secondaryPage.type.startsWith('paragraph')"
                    :paragraph-id="secondaryPage.route.params.paragraphId"
                    :view-mode="secondaryPage.viewMode"
                  />
                  <GrammarChapterView
                    v-else-if="secondaryPage && secondaryPage.type === 'grammar'"
                    :grammar-id="secondaryPage.route.params.grammarId"
                  />
                  <QuizChapterView
                    v-else-if="secondaryPage && secondaryPage.type === 'quiz'"
                    :quiz-id="secondaryPage.route.params.quizId"
                  />
                  <SentenceDetailView v-else-if="secondarySentenceId" :sentence-id="secondarySentenceId" />
                  <div v-else class="empty-page"></div>
                </div>
              </div>
            </transition>
          </div>

          <button
            type="button"
            class="page-side-nav next"
            :disabled="!nextPage"
            :aria-label="$t('ebook.next')"
            @click="goToPage(nextPage)"
          >
            <span aria-hidden="true">›</span>
          </button>

          <footer class="ebook-pagination">
            <span>{{ currentPageText }}</span>
          </footer>
        </section>
      </div>
      <section v-else-if="isEbookRoute" class="book-template-placeholder">
        <h2>이 책 전용 템플릿 준비 중</h2>
        <p>
          현재 책은 <strong>{{ currentTemplateType }}</strong> 템플릿으로 설정되어 있어요.
          해당 템플릿 화면은 곧 연결할 수 있게 분리해두었습니다.
        </p>
      </section>
      <router-view v-else />
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import ParagraphDetailView from "@/views/ParagraphDetailView.vue";
import SentenceDetailView from "@/views/SentenceDetailView.vue";
import GrammarChapterView from "@/views/GrammarChapterView.vue";
import QuizChapterView from "@/views/QuizChapterView.vue";
import { paragraphs, sentences } from "@/data/englishLearningDb";
import { getBookById } from "@/data/books";
import { grammarChapters } from "@/data/grammarChapters";

export default {
  name: "App",
  components: { AppHeader, SentenceDetailView, ParagraphDetailView, GrammarChapterView, QuizChapterView },
  data() {
    const savedShowToc = localStorage.getItem("ebook-show-toc");
    const savedPageMode = localStorage.getItem("ebook-page-mode");
    return {
      transitionName: "flip-forward",
      previousChapterIndex: 0,
      showToc: savedShowToc ? savedShowToc === "true" : true,
      pageMode: savedPageMode === "double" ? "double" : "single",
      ebookSwipeStart: null,
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters["ui/darkMode"];
    },
    isEbookRoute() {
      return (
        this.$route.name === "sentence-detail" ||
        this.$route.name === "paragraph-detail" ||
        this.$route.name === "grammar-chapter" ||
        this.$route.name === "quiz-chapter"
      );
    },
    showLanguageMaskControls() {
      return this.isEbookRoute || this.$route.name === "review";
    },
    hideEnglish() {
      return this.$store.getters["ui/hideEnglish"];
    },
    hideKorean() {
      return this.$store.getters["ui/hideKorean"];
    },
    hideCompletedSentences() {
      return this.$store.getters["ui/hideCompletedSentences"];
    },
    pages() {
      const result = [];
      const paragraphIds =
        this.currentBook.paragraphIds?.length > 0
          ? this.currentBook.paragraphIds
          : this.currentBook.paragraphId
            ? [this.currentBook.paragraphId]
            : [];
      const sentenceMap = new Map(sentences.map((item) => [item.id, item]));

      paragraphIds.forEach((paragraphId) => {
        const paragraph = paragraphs.find((item) => item.id === paragraphId);
        if (!paragraph) return;

        result.push({
          key: `paragraph-${paragraph.id}`,
          type: "paragraph",
          viewMode: "overview",
          route: {
            name: "paragraph-detail",
            params: { paragraphId: paragraph.id },
            query: { bookId: this.currentBook.id, section: "overview" },
          },
          summary: `${paragraph.title}`,
        });
        result.push({
          key: `paragraph-${paragraph.id}-sentences`,
          type: "paragraph-sentences",
          viewMode: "sentences",
          route: {
            name: "paragraph-detail",
            params: { paragraphId: paragraph.id },
            query: { bookId: this.currentBook.id, section: "sentences" },
          },
          summary: `${paragraph.title} (문장 구성)`,
        });

        paragraph.sentenceIds.forEach((sentenceId) => {
          const sentence = sentenceMap.get(sentenceId);
          if (!sentence) return;
          if (this.hideCompletedSentences && this.$store.getters["ui/isSentenceCompleted"](sentence.id)) return;
          result.push({
            key: `sentence-${sentence.id}`,
            type: "sentence",
            route: {
              name: "sentence-detail",
              params: { sentenceId: sentence.id },
              query: { bookId: this.currentBook.id },
            },
            summary: sentence.title,
          });
        });
      });

      const bookQuizChapters = this.currentBook.quizChapters || [];
      bookQuizChapters.forEach((chapter) => {
        result.push({
          key: `quiz-${chapter.id}`,
          type: "quiz",
          route: {
            name: "quiz-chapter",
            params: { quizId: chapter.id },
            query: { bookId: this.currentBook.id },
          },
          summary: chapter.tocSummary,
        });
      });

      if (!bookQuizChapters.length) {
        grammarChapters.forEach((chapter) => {
          result.push({
            key: `grammar-${chapter.id}`,
            type: "grammar",
            route: {
              name: "grammar-chapter",
              params: { grammarId: chapter.id },
              query: { bookId: this.currentBook.id },
            },
            summary: chapter.tocSummary,
          });
        });
      }

      return result;
    },
    tocPages() {
      const paragraphPages = this.pages.filter((page) => page.type === "paragraph");
      const firstGrammarPage = this.pages.find((page) => page.type === "grammar");
      const firstQuizPage = this.pages.find((page) => page.type === "quiz");
      const extraPages = [];
      if (firstQuizPage) {
        extraPages.push({ ...firstQuizPage, key: "quiz-group" });
      } else if (firstGrammarPage) {
        extraPages.push({
          ...firstGrammarPage,
          key: "grammar-group",
          summary: `문법 포인트 모음 (3-${this.grammarStartIndex + this.grammarCount - 1})`,
        });
      }
      return [...paragraphPages, ...extraPages];
    },
    currentBook() {
      return getBookById(this.$route.query.bookId);
    },
    currentTemplateType() {
      return this.currentBook.templateType || "speaking-listening";
    },
    isSpeakingListeningTemplate() {
      return this.currentTemplateType === "speaking-listening";
    },
    grammarCount() {
      return grammarChapters.length;
    },
    grammarStartIndex() {
      return this.pages.filter((page) => page.type === "paragraph").length + 1;
    },
    currentPageIndex() {
      return this.pages.findIndex((page) => this.isPageActive(page));
    },
    spreadStartIndex() {
      const idx = this.currentPageIndex;
      const pages = this.pages;
      if (idx < 0) return 0;
      if (!this.isDoublePageMode) return idx;

      let i = 0;
      while (i < pages.length) {
        const page = pages[i];
        if (page.type !== "paragraph") {
          i++;
          continue;
        }
        const paragraphIndex = i;
        if (idx === paragraphIndex) return paragraphIndex;

        const firstSentenceIdx = paragraphIndex + 1;
        let end = firstSentenceIdx;
        while (end < pages.length && pages[end].type === "sentence") end++;

        if (idx >= firstSentenceIdx && idx < end) {
          const offsetWithin = idx - firstSentenceIdx;
          return firstSentenceIdx + Math.floor(offsetWithin / 2) * 2;
        }
        i = end;
      }

      return Math.floor(idx / 2) * 2;
    },
    prevPage() {
      if (this.isDoublePageMode) {
        const targetIndex = this.spreadStartIndex - 2;
        if (targetIndex < 0) return null;
        return this.pages[targetIndex];
      }
      if (this.currentPageIndex <= 0) return null;
      return this.pages[this.currentPageIndex - 1];
    },
    nextPage() {
      if (this.isDoublePageMode) {
        const targetIndex = this.spreadStartIndex + 2;
        if (targetIndex >= this.pages.length) return null;
        return this.pages[targetIndex];
      }
      if (this.currentPageIndex < 0 || this.currentPageIndex >= this.pages.length - 1) return null;
      return this.pages[this.currentPageIndex + 1];
    },
    currentPageText() {
      if (this.currentPageIndex < 0) return "";
      if (this.isDoublePageMode) {
        const endIndex = Math.min(this.spreadStartIndex + 1, this.pages.length - 1);
        return `${this.spreadStartIndex + 1}-${endIndex + 1} / ${this.pages.length}`;
      }
      return this.$t("ebook.page", {
        current: this.currentPageIndex + 1,
        total: this.pages.length,
      });
    },
    isDoublePageMode() {
      return this.pageMode === "double";
    },
    currentSentenceId() {
      const page = this.primaryPage;
      if (!page || page.type !== "sentence") return "";
      return page.route.params.sentenceId;
    },
    secondarySentenceId() {
      if (!this.isDoublePageMode) return null;
      const next = this.secondaryPage;
      if (!next || next.type !== "sentence") return null;
      return next.route.params.sentenceId;
    },
    primaryPage() {
      return this.pages[this.spreadStartIndex] || null;
    },
    secondaryPage() {
      if (!this.isDoublePageMode) return null;
      return this.pages[this.spreadStartIndex + 1] || null;
    },
  },
  watch: {
    darkMode: {
      immediate: true,
      handler(val) {
        document.documentElement.setAttribute("data-theme", val ? "dark" : "light");
      },
    },
    $route(to, from) {
      if (!this.isEbookRoute) return;
      const toIndex = this.findPageIndexByRoute(to);
      const fromIndex = this.findPageIndexByRoute(from);
      const sourceIndex = fromIndex < 0 ? this.previousChapterIndex : fromIndex;

      this.transitionName = toIndex >= sourceIndex ? "flip-forward" : "flip-backward";
      this.previousChapterIndex = toIndex < 0 ? 0 : toIndex;
    },
  },
  methods: {
    isPageActive(page) {
      return this.findPageIndexByRoute(this.$route) === this.pages.findIndex((item) => item.key === page.key);
    },
    isTocPageActive(page) {
      if (page.type === "grammar") {
        return this.$route.name === "grammar-chapter";
      }
      if (page.type === "quiz") {
        return this.$route.name === "quiz-chapter";
      }
      if (page.type !== "paragraph") return false;
      const paragraphId = page.route.params.paragraphId;
      if (this.$route.name === "paragraph-detail") {
        return this.$route.params.paragraphId === paragraphId;
      }
      if (this.$route.name === "sentence-detail") {
        const paragraph = paragraphs.find((item) => item.id === paragraphId);
        return Boolean(paragraph?.sentenceIds.includes(this.$route.params.sentenceId));
      }
      return false;
    },
    goToPage(page) {
      if (!page) return;
      const currentRouteIndex = this.findPageIndexByRoute(this.$route);
      const targetRouteIndex = this.findPageIndexByRoute(page.route);
      if (targetRouteIndex >= 0 && targetRouteIndex === currentRouteIndex) return;
      this.$router.push(page.route);
    },
    toggleToc() {
      this.showToc = !this.showToc;
      localStorage.setItem("ebook-show-toc", String(this.showToc));
    },
    changePageMode(mode) {
      this.pageMode = mode === "double" ? "double" : "single";
      localStorage.setItem("ebook-page-mode", this.pageMode);
    },
    toggleHideEnglish() {
      this.$store.dispatch("ui/toggleHideEnglish");
    },
    toggleHideKorean() {
      this.$store.dispatch("ui/toggleHideKorean");
    },
    toggleHideCompletedSentences() {
      this.$store.dispatch("ui/toggleHideCompletedSentences");
    },
    toggleDarkMode() {
      this.$store.dispatch("ui/toggleDarkMode");
    },
    ebookSwipeEnabled() {
      if (typeof window === "undefined" || !window.matchMedia) return false;
      return (
        this.isEbookRoute &&
        this.isSpeakingListeningTemplate &&
        window.matchMedia("(max-width: 768px)").matches
      );
    },
    onEbookTouchStart(event) {
      if (!this.ebookSwipeEnabled()) return;
      const t = event.touches && event.touches[0];
      if (!t) return;
      this.ebookSwipeStart = { x: t.clientX, y: t.clientY };
    },
    onEbookTouchEnd(event) {
      if (!this.ebookSwipeStart || !this.ebookSwipeEnabled()) {
        this.ebookSwipeStart = null;
        return;
      }
      const t = event.changedTouches && event.changedTouches[0];
      if (!t) {
        this.ebookSwipeStart = null;
        return;
      }
      const dx = t.clientX - this.ebookSwipeStart.x;
      const dy = t.clientY - this.ebookSwipeStart.y;
      this.ebookSwipeStart = null;
      const threshold = 56;
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.15) {
        return;
      }
      if (dx < 0 && this.nextPage) {
        this.goToPage(this.nextPage);
      } else if (dx > 0 && this.prevPage) {
        this.goToPage(this.prevPage);
      }
    },
    onEbookTouchCancel() {
      this.ebookSwipeStart = null;
    },
    findPageIndexByRoute(route) {
      return this.pages.findIndex((page) => {
        if (page.route.name !== route.name) return false;
        if (route.name === "sentence-detail") {
          return page.route.params.sentenceId === route.params.sentenceId;
        }
        if (route.name === "paragraph-detail") {
          const pageSection = page.route.query?.section || "overview";
          const routeSection = route.query?.section || "overview";
          return page.route.params.paragraphId === route.params.paragraphId && pageSection === routeSection;
        }
        if (route.name === "grammar-chapter") {
          return page.type === "grammar" && page.route.params.grammarId === route.params.grammarId;
        }
        if (route.name === "quiz-chapter") {
          return page.type === "quiz" && page.route.params.quizId === route.params.quizId;
        }
        return false;
      });
    },
  },
};
</script>
