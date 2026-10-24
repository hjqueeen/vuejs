<template>
  <nav class="day-nav" aria-label="날짜별 단어장">
    <p class="day-nav__label">날짜</p>
    <ul v-if="days.length" class="day-nav__list">
      <li v-for="item in days" :key="item.date">
        <button
          type="button"
          class="day-nav__item"
          :class="{ 'day-nav__item--active': item.date === activeDate }"
          @click="$emit('select-date', item.date)"
        >
          <span class="day-nav__day">DAY {{ pad(item.day) }}</span>
          <time class="day-nav__date" :datetime="item.date">{{ item.date }}</time>
          <span class="day-nav__count">{{ item.words.length }}단어</span>
        </button>
      </li>
    </ul>
    <p v-else class="day-nav__empty">등록된 DAY가 없습니다.</p>
  </nav>
</template>

<script>
export default {
  name: "DayVocabNav",
  props: {
    days: {
      type: Array,
      default: () => [],
    },
    activeDate: {
      type: String,
      default: "",
    },
  },
  methods: {
    pad(n) {
      return String(n).padStart(2, "0");
    },
  },
};
</script>

<style scoped>
.day-nav {
  padding: 16px 12px;
  height: 100%;
}

.day-nav__label {
  margin: 0 8px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.day-nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.day-nav__item {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 2px 10px;
  padding: 10px 12px;
  text-align: left;
  border: 1px solid transparent;
  border-radius: var(--c-radius-md);
  background: transparent;
  color: var(--c-text-primary);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.day-nav__item:hover {
  background: var(--c-blue-light);
}

.day-nav__item--active {
  background: var(--c-blue-light);
  border-color: var(--c-blue-mid);
}

.day-nav__day {
  grid-column: 1;
  grid-row: 1;
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--c-blue);
}

.day-nav__date {
  grid-column: 2;
  grid-row: 1;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--c-text-secondary);
  font-variant-numeric: tabular-nums;
  justify-self: end;
}

.day-nav__count {
  grid-column: 1 / -1;
  grid-row: 2;
  font-size: 0.72rem;
  color: var(--c-text-muted);
}

.day-nav__empty {
  margin: 8px;
  font-size: 0.85rem;
  color: var(--c-text-muted);
}
</style>
