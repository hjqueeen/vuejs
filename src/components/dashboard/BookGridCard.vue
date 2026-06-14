<template>
  <article class="book-card" @click="$emit('open', book)">
    <div class="book-spine" :class="spineClass"></div>
    <div class="book-body">
      <div class="book-top">
        <span v-if="badge" class="book-badge">{{ badge }}</span>
        <span class="book-arrow">→</span>
      </div>
      <h3 class="book-title">{{ book.title }}</h3>
      <p class="book-subtitle">{{ book.subtitle }}</p>
      <p class="book-desc">{{ book.description }}</p>
      <div v-if="showProgress" class="book-progress">
        <div class="mini-bar">
          <div
            class="mini-fill studied"
            :style="{ width: progress.studiedPercent + '%' }"
          ></div>
        </div>
        <span class="mini-stat">
          공부 {{ progress.studied }}/{{ progress.total }}
          · 테스트 {{ progress.tested }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "BookGridCard",
  props: {
    book: { type: Object, required: true },
    badge: { type: String, default: "" },
    spineClass: { type: String, default: "spine-1" },
    showProgress: { type: Boolean, default: false },
    progress: {
      type: Object,
      default: () => ({ studied: 0, tested: 0, total: 0, studiedPercent: 0 }),
    },
  },
};
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--c-radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.18s, border-color 0.18s, transform 0.18s;
}

.book-card:hover {
  border-color: var(--c-blue-mid);
  box-shadow: 0 6px 20px rgba(45, 95, 168, 0.12);
  transform: translateY(-2px);
}

.book-spine {
  height: 5px;
  width: 100%;
  flex-shrink: 0;
}

.spine-1 { background: var(--c-blue); }
.spine-2 { background: var(--c-teal); }
.spine-3 { background: var(--c-amber); }

.book-body {
  flex: 1;
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.book-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  min-height: 22px;
}

.book-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: var(--c-radius-pill);
  background: var(--c-amber-light);
  border: 1px solid var(--c-amber-mid);
  color: var(--c-amber);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.book-arrow {
  margin-left: auto;
  font-size: 16px;
  color: var(--c-text-muted);
  transition: color 0.15s, transform 0.15s;
}

.book-card:hover .book-arrow {
  color: var(--c-blue);
  transform: translateX(3px);
}

.book-title {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text-primary);
  letter-spacing: -0.3px;
  line-height: 1.4;
}

.book-subtitle {
  margin: 0;
  font-size: 12px;
  color: var(--c-text-secondary);
  line-height: 1.45;
}

.book-desc {
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--c-text-muted);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-progress {
  margin-top: auto;
  padding-top: 12px;
}

.mini-bar {
  height: 4px;
  background: var(--c-border);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}

.mini-fill.studied {
  height: 100%;
  background: var(--c-teal);
  border-radius: 2px;
}

.mini-stat {
  font-size: 11px;
  color: var(--c-text-muted);
}
</style>
