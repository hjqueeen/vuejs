<template>
  <div class="dashboard">
    <header class="dash-header">
      <div>
        <p class="dash-eyebrow">English Learning</p>
        <h1 class="dash-title">{{ learnerLabel }}의 학습 서재</h1>
      </div>
      <p class="dash-desc">학습할 책을 선택하세요.</p>
    </header>

    <div class="learner-tabs" role="tablist" aria-label="학습자 선택">
      <button
        v-for="profile in learnerProfiles"
        :key="profile.id"
        type="button"
        role="tab"
        class="learner-tab"
        :class="{ 'learner-tab--active': activeLearner === profile.id }"
        :aria-selected="activeLearner === profile.id"
        @click="selectLearner(profile.id)"
      >
        {{ profile.label }}
      </button>
    </div>

    <p v-if="!visibleBooks.length" class="dash-empty">
      {{ learnerLabel }}님의 책이 없습니다.
    </p>

    <div v-else class="dash-body" :class="{ 'dash-body--with-nav': showCatalogNav }">
      <DashboardCatalogNav
        v-if="showCatalogNav"
        :nav-tree="navTree"
        :total-count="visibleBooks.length"
        :selected-grade="selectedGrade"
        :selected-subject-key="selectedSubjectKey"
        @select-all="clearCatalogFilter"
        @select-grade="selectGrade"
        @select-subject="selectSubject"
      />

      <main class="dash-main">
        <p v-if="filterLabel" class="dash-filter-label">{{ filterLabel }}</p>

        <template v-if="showSectionLayout">
          <section
            v-for="gradeGroup in displayGroupedBooks"
            :key="gradeGroup.grade"
            class="catalog-grade"
          >
            <h2 class="catalog-grade-title">{{ gradeGroup.gradeLabel }}</h2>
            <section
              v-for="subject in gradeGroup.subjects"
              :key="`${gradeGroup.grade}-${subject.subjectKey}`"
              class="catalog-subject"
            >
              <h3 class="catalog-subject-title">{{ subject.subjectLabel }}</h3>
              <div class="bookshelf-grid">
                <BookGridCard
                  v-for="(book, idx) in subject.books"
                  :key="book.id"
                  :book="book"
                  :spine-class="spineClass(idx)"
                  :show-progress="showBookProgress(book)"
                  :progress="bookProgress(book)"
                  @open="openBook"
                />
              </div>
            </section>
          </section>
          <p v-if="!displayGroupedBooks.length" class="dash-empty dash-empty--inline">
            선택한 조건에 맞는 책이 없습니다.
          </p>
        </template>

        <div v-else class="bookshelf-grid">
          <BookGridCard
            v-for="(book, idx) in visibleBooks"
            :key="book.id"
            :book="book"
            :badge="`BOOK ${idx + 1}`"
            :spine-class="spineClass(idx)"
            :show-progress="showBookProgress(book)"
            :progress="bookProgress(book)"
            @open="openBook"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { books } from "@/data/books";
import BookGridCard from "@/components/dashboard/BookGridCard.vue";
import DashboardCatalogNav from "@/components/dashboard/DashboardCatalogNav.vue";
import {
  LEARNER_PROFILES,
  BOOK_OWNERS,
  filterBooksByOwner,
  groupBooksByGradeSubject,
  routeSlugToLearnerId,
  setStoredDashboardLearner,
  getLearnerLabel,
  getDashboardLocation,
} from "@/data/bookCatalog";

export default {
  name: "DashboardView",
  components: { BookGridCard, DashboardCatalogNav },
  props: {
    learner: { type: String, required: true },
  },
  data() {
    return {
      books,
      learnerProfiles: LEARNER_PROFILES,
      selectedGrade: null,
      selectedSubjectKey: null,
    };
  },
  computed: {
    activeLearner() {
      return routeSlugToLearnerId(this.learner) || BOOK_OWNERS.HYEJIN;
    },
    learnerLabel() {
      return getLearnerLabel(this.activeLearner);
    },
    visibleBooks() {
      return filterBooksByOwner(this.books, this.activeLearner);
    },
    groupedBooks() {
      return groupBooksByGradeSubject(this.visibleBooks);
    },
    navTree() {
      return this.groupedBooks.filter((g) => g.grade > 0);
    },
    showCatalogNav() {
      return this.navTree.length > 0;
    },
    showSectionLayout() {
      return this.showCatalogNav;
    },
    displayGroupedBooks() {
      let groups = this.groupedBooks.filter((g) => g.grade > 0);

      if (this.selectedGrade != null) {
        groups = groups.filter((g) => g.grade === this.selectedGrade);
      }

      return groups
        .map((g) => ({
          ...g,
          subjects:
            this.selectedSubjectKey != null
              ? g.subjects.filter((s) => s.subjectKey === this.selectedSubjectKey)
              : g.subjects,
        }))
        .filter((g) => g.subjects.length > 0);
    },
    filterLabel() {
      if (this.selectedGrade == null && !this.selectedSubjectKey) return "";

      const gradeGroup = this.navTree.find((g) => g.grade === this.selectedGrade);
      if (!gradeGroup) return "";

      if (this.selectedSubjectKey) {
        const subject = gradeGroup.subjects.find(
          (s) => s.subjectKey === this.selectedSubjectKey,
        );
        if (subject) {
          return `${gradeGroup.gradeLabel} · ${subject.subjectLabel}`;
        }
      }

      return gradeGroup.gradeLabel;
    },
  },
  watch: {
    activeLearner() {
      this.clearCatalogFilter();
    },
  },
  methods: {
    clearCatalogFilter() {
      this.selectedGrade = null;
      this.selectedSubjectKey = null;
    },
    selectGrade(grade) {
      this.selectedGrade = grade;
      this.selectedSubjectKey = null;
    },
    selectSubject({ grade, subjectKey }) {
      this.selectedGrade = grade;
      this.selectedSubjectKey = subjectKey;
    },
    selectLearner(learnerId) {
      setStoredDashboardLearner(learnerId);
      this.$router.push(getDashboardLocation(learnerId));
    },
    spineClass(idx) {
      return `spine-${(idx % 3) + 1}`;
    },
    showBookProgress(book) {
      return book.templateType === "quiz-workbook" || book.templateType === "flashcard";
    },
    bookProgress(book) {
      const ids = book.questionIds || book.cardIds || [];
      return this.$store.getters["quizWorkbook/bookProgress"](book.id, ids);
    },
    openBook(book) {
      if (book.templateType === "flashcard") {
        this.$router.push({
          name: "flashcard-hub",
          params: { bookId: book.id },
        });
        return;
      }
      if (book.templateType === "quiz-workbook") {
        this.$router.push({
          name: "workbook-hub",
          params: { bookId: book.id },
        });
        return;
      }
      const firstParagraphId =
        book.paragraphIds?.length > 0 ? book.paragraphIds[0] : book.paragraphId;
      if (firstParagraphId) {
        this.$router.push({
          name: "paragraph-detail",
          params: { paragraphId: firstParagraphId },
          query: { bookId: book.id },
        });
        return;
      }
      const firstSentenceId = book.sentenceIds?.[0];
      if (!firstSentenceId) return;
      this.$router.push({
        name: "sentence-detail",
        params: { sentenceId: firstSentenceId },
        query: { bookId: book.id },
      });
    },
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 1320px;
  margin: 0 auto;
  padding: 8px 16px 48px;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}

.dash-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 12px;
  flex-wrap: wrap;
}

.dash-eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-amber);
}

.dash-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--c-text-primary);
  letter-spacing: -0.4px;
}

.dash-desc {
  margin: 0;
  font-size: 13px;
  color: var(--c-text-muted);
  align-self: flex-end;
  padding-bottom: 2px;
}

.learner-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.learner-tab {
  padding: 8px 16px;
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-pill);
  background: var(--c-surface);
  color: var(--c-text-secondary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}

.learner-tab:hover {
  border-color: var(--c-blue-mid);
  color: var(--c-text-primary);
}

.learner-tab--active {
  background: var(--c-blue-light);
  border-color: var(--c-blue-mid);
  color: var(--c-blue);
}

.dash-body {
  display: block;
}

.dash-body--with-nav {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.dash-main {
  flex: 1;
  min-width: 0;
}

.dash-filter-label {
  margin: 0 0 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--c-text-muted);
}

.catalog-grade + .catalog-grade {
  margin-top: 32px;
}

.catalog-grade-title {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 700;
  color: var(--c-text-primary);
  letter-spacing: -0.3px;
}

.catalog-subject + .catalog-subject {
  margin-top: 24px;
}

.catalog-subject-title {
  margin: 0 0 12px;
  padding-left: 10px;
  border-left: 3px solid var(--c-teal);
  font-size: 14px;
  font-weight: 700;
  color: var(--c-text-secondary);
}

.bookshelf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

@media (min-width: 560px) {
  .bookshelf-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  .dash-body--with-nav .bookshelf-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .bookshelf-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .dash-body--with-nav .bookshelf-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .bookshelf-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .dash-body--with-nav {
    flex-direction: column;
  }
}

.dash-empty {
  margin: 24px 0 0;
  padding: 32px;
  text-align: center;
  color: var(--c-text-muted);
  background: var(--c-surface);
  border: 1px dashed var(--c-border);
  border-radius: var(--c-radius-lg);
}

.dash-empty--inline {
  margin-top: 0;
}
</style>
