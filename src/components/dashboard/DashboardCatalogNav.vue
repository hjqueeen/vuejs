<template>
  <nav class="catalog-nav" aria-label="학년·과목 필터">
    <p class="catalog-nav-heading">목록</p>

    <button
      type="button"
      class="catalog-nav-item catalog-nav-item--all"
      :class="{ 'catalog-nav-item--active': isAllActive }"
      @click="$emit('select-all')"
    >
      전체
      <span class="catalog-nav-count">{{ totalCount }}</span>
    </button>

    <div
      v-for="gradeGroup in navTree"
      :key="gradeGroup.grade"
      class="catalog-nav-grade"
    >
      <button
        type="button"
        class="catalog-nav-grade-toggle"
        :class="{
          'catalog-nav-grade-toggle--expanded': isGradeExpanded(gradeGroup.grade),
          'catalog-nav-grade-toggle--active': isGradeActive(gradeGroup.grade),
        }"
        :aria-expanded="isGradeExpanded(gradeGroup.grade)"
        @click="onGradeHeaderClick(gradeGroup)"
      >
        <span class="catalog-nav-chevron" aria-hidden="true"></span>
        {{ gradeGroup.gradeLabel }}
        <span class="catalog-nav-count">{{ gradeBookCount(gradeGroup) }}</span>
      </button>

      <ul
        v-show="isGradeExpanded(gradeGroup.grade)"
        class="catalog-nav-subjects"
      >
        <li v-for="subject in gradeGroup.subjects" :key="subject.subjectKey">
          <button
            type="button"
            class="catalog-nav-item catalog-nav-item--subject"
            :class="{
              'catalog-nav-item--active': isSubjectActive(
                gradeGroup.grade,
                subject.subjectKey,
              ),
            }"
            @click="
              $emit('select-subject', {
                grade: gradeGroup.grade,
                subjectKey: subject.subjectKey,
              })
            "
          >
            {{ subject.subjectLabel }}
            <span class="catalog-nav-count">{{ subject.books.length }}</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "DashboardCatalogNav",
  props: {
    navTree: { type: Array, required: true },
    totalCount: { type: Number, default: 0 },
    selectedGrade: { type: Number, default: null },
    selectedSubjectKey: { type: String, default: null },
  },
  data() {
    return {
      expandedGrades: {},
    };
  },
  computed: {
    isAllActive() {
      return this.selectedGrade == null && !this.selectedSubjectKey;
    },
  },
  watch: {
    navTree: {
      immediate: true,
      handler(tree) {
        const expanded = { ...this.expandedGrades };
        for (const group of tree) {
          if (expanded[group.grade] === undefined) {
            expanded[group.grade] = true;
          }
        }
        this.expandedGrades = expanded;
      },
    },
  },
  methods: {
    isGradeExpanded(grade) {
      return this.expandedGrades[grade] !== false;
    },
    isGradeActive(grade) {
      return this.selectedGrade === grade && !this.selectedSubjectKey;
    },
    isSubjectActive(grade, subjectKey) {
      return this.selectedGrade === grade && this.selectedSubjectKey === subjectKey;
    },
    gradeBookCount(gradeGroup) {
      return gradeGroup.subjects.reduce((sum, s) => sum + s.books.length, 0);
    },
    onGradeHeaderClick(gradeGroup) {
      const grade = gradeGroup.grade;
      const expanded = this.isGradeExpanded(grade);
      if (this.isGradeActive(grade)) {
        this.expandedGrades = {
          ...this.expandedGrades,
          [grade]: !expanded,
        };
        return;
      }
      this.expandedGrades = { ...this.expandedGrades, [grade]: true };
      this.$emit("select-grade", grade);
    },
  },
};
</script>

<style scoped>
.catalog-nav {
  flex-shrink: 0;
  width: 200px;
  padding: 14px 12px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  align-self: flex-start;
  position: sticky;
  top: 12px;
}

.catalog-nav-heading {
  margin: 0 0 10px;
  padding: 0 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.catalog-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: var(--c-radius-md);
  background: transparent;
  color: var(--c-text-secondary);
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.catalog-nav-item:hover {
  background: var(--c-border-subtle);
  color: var(--c-text-primary);
}

.catalog-nav-item--active {
  background: var(--c-blue-light);
  color: var(--c-blue);
}

.catalog-nav-item--all {
  margin-bottom: 6px;
}

.catalog-nav-grade + .catalog-nav-grade {
  margin-top: 4px;
}

.catalog-nav-grade-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: var(--c-radius-md);
  background: transparent;
  color: var(--c-text-primary);
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.catalog-nav-grade-toggle:hover {
  background: var(--c-border-subtle);
}

.catalog-nav-grade-toggle--active {
  background: var(--c-blue-light);
  color: var(--c-blue);
}

.catalog-nav-chevron {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-45deg);
  transition: transform 0.15s;
  margin-top: -2px;
}

.catalog-nav-grade-toggle--expanded .catalog-nav-chevron {
  transform: rotate(45deg);
  margin-top: 2px;
}

.catalog-nav-count {
  flex-shrink: 0;
  min-width: 20px;
  padding: 1px 6px;
  border-radius: var(--c-radius-pill);
  background: var(--c-border-subtle);
  font-size: 11px;
  font-weight: 600;
  color: var(--c-text-muted);
  text-align: center;
}

.catalog-nav-item--active .catalog-nav-count,
.catalog-nav-grade-toggle--active .catalog-nav-count {
  background: rgba(45, 95, 168, 0.12);
  color: var(--c-blue);
}

.catalog-nav-subjects {
  list-style: none;
  margin: 0;
  padding: 0 0 4px 18px;
}

.catalog-nav-item--subject {
  font-weight: 500;
  font-size: 12px;
  padding: 6px 10px;
}

@media (max-width: 767px) {
  .catalog-nav {
    width: 100%;
    position: static;
  }
}
</style>
