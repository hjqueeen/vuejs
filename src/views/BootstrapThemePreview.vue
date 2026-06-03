<template>
  <div class="theme-preview">
    <header class="theme-preview__intro">
      <h1>Bootstrap theme checklist (Alstom overrides)</h1>
      <p>
        Static samples use Bootstrap utility classes where noted. For <code>:hover</code> and
        <code>:active</code>, interact with the labeled controls. Dropdown
        <code>:active</code> appears while pressing a menu item.
      </p>
    </header>

    <!-- Legacy LESS targets: a, a:hover -->
    <section class="theme-preview__section">
      <h2>Links (<code>a</code>, <code>a:hover</code>)</h2>
      <p>
        Default link:
        <a href="#theme-preview-links" class="theme-preview__sample-link">Sample link (default)</a>
      </p>
      <p>
        Visited is browser-dependent; hover to check
        <code>$link-hover-color</code> (<span class="theme-preview__hint">#788291 blue-grey</span>).
      </p>
    </section>

    <!-- .btn-primary -->
    <section class="theme-preview__section">
      <h2>Primary buttons</h2>
      <p class="theme-preview__hint">
        Expect default / focus / hover / active per legacy LESS (dark blue base, blue-grey hover, dark
        blue on active:focus).
      </p>
      <div class="theme-preview__row">
        <div class="theme-preview__cell">
          <span class="theme-preview__label">Default <code>.btn-primary</code></span>
          <button type="button" class="btn btn-primary">Primary</button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"
            ><code>.btn-primary:focus</code> / <code>.focus</code> (class simulates focus ring)</span
          >
          <button type="button" class="btn btn-primary focus">Primary .focus</button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"><code>:hover</code> — hover the button</span>
          <button type="button" class="btn btn-primary">Hover me</button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"><code>.active</code> (pressed / toggled)</span>
          <button type="button" class="btn btn-primary active">Primary .active</button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"
            ><code>:active:focus</code> — Tab here, then hold mouse button down</span
          >
          <button ref="primaryActiveFocus" type="button" class="btn btn-primary">
            Tab then click-hold
          </button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"
            ><code>.active:focus</code> shortcut — <code>.active.focus</code> classes</span
          >
          <button type="button" class="btn btn-primary active focus">
            Primary .active.focus
          </button>
        </div>
      </div>
    </section>

    <!-- .btn-outline-primary -->
    <section class="theme-preview__section">
      <h2>Outline primary buttons</h2>
      <div class="theme-preview__row">
        <div class="theme-preview__cell">
          <span class="theme-preview__label">Default <code>.btn-outline-primary</code></span>
          <button type="button" class="btn btn-outline-primary">Outline</button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"><code>:focus</code> / <code>.focus</code></span>
          <button type="button" class="btn btn-outline-primary focus">Outline .focus</button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"><code>:hover</code></span>
          <button type="button" class="btn btn-outline-primary">Hover outline</button>
        </div>
        <div class="theme-preview__cell">
          <span class="theme-preview__label"
            ><code>:active:focus</code> — Tab then click-hold, or use class shortcut</span
          >
          <button type="button" class="btn btn-outline-primary active focus">
            Outline .active.focus
          </button>
        </div>
      </div>
    </section>

    <!-- .btn-link -->
    <section class="theme-preview__section">
      <h2>Link buttons (<code>.btn-link</code>)</h2>
      <p class="theme-preview__hint">
        Legacy theme: default and hover should both match blue-grey (<code>#788291</code>), unlike plain
        <code>&lt;a&gt;</code>.
      </p>
      <div class="theme-preview__row theme-preview__row--inline">
        <button type="button" class="btn btn-link">Default .btn-link</button>
        <button type="button" class="btn btn-link">Hover this .btn-link</button>
      </div>
    </section>

    <!-- .dropdown-item.active / :active -->
    <section class="theme-preview__section">
      <h2>Dropdown items (<code>.active</code>, <code>:active</code>)</h2>
      <p class="theme-preview__hint">
        <code>.dropdown-item.active</code> uses primary / component active background.
        Press and hold an item to see <code>:active</code>.
      </p>
      <div class="dropdown theme-preview__dropdown">
        <!-- Static open menu so you can screenshot without Bootstrap JS -->
        <button type="button" class="btn btn-secondary dropdown-toggle" disabled>Showcase menu</button>
        <div class="dropdown-menu show theme-preview__dropdown-menu">
          <span class="dropdown-item-text theme-preview__menu-note">Inactive items</span>
          <button type="button" class="dropdown-item" @mousedown.prevent>An inactive item</button>
          <button type="button" class="dropdown-item active">.dropdown-item.active</button>
          <button type="button" class="dropdown-item">
            Plain item — click-hold for <code>:active</code>
          </button>
        </div>
      </div>
    </section>

    <footer class="theme-preview__footer">
      <p>
        Route:
        <code>/bootstrap-theme-preview</code>
        · Remove this route in production if not needed.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BootstrapThemePreview",
  mounted() {
    const btn = this.$refs.primaryActiveFocus;
    if (btn) {
      btn.setAttribute("tabindex", "0");
    }
  },
};
</script>

<!-- Theme must be global here so Bootstrap component classes resolve (same as importing in main.js) -->
<style lang="scss" scoped>
.theme-preview {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}

.theme-preview__intro h1 {
  font-size: 1.5rem;
  margin: 0 0 12px;
}

.theme-preview__intro p {
  margin: 0 0 24px;
  color: #555;
  line-height: 1.5;
}

.theme-preview__section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;

  &:last-of-type {
    border-bottom: none;
  }

  h2 {
    font-size: 1.15rem;
    margin: 0 0 12px;
  }

  p {
    margin: 0 0 12px;
  }
}

.theme-preview__hint {
  font-size: 0.875rem;
  color: #666;
}

.theme-preview__sample-link {
  font-weight: 600;
}

.theme-preview__row {
  display: flex; 
  flex-wrap: wrap;
  gap: 16px;
}

.theme-preview__row--inline {
  align-items: center;
}

.theme-preview__cell {
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #eee;
}

.theme-preview__label {
  font-size: 0.78rem;
  color: #444;
  line-height: 1.35;
}

.theme-preview__dropdown {
  display: inline-block;
}

.theme-preview__dropdown-menu {
  position: static !important;
  display: block;
  float: none;
  margin-top: 8px;
}

.theme-preview__menu-note {
  display: block;
  padding: 0.25rem 1.5rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #888;
}

.theme-preview__footer {
  margin-top: 24px;
  font-size: 0.8rem;
  color: #777;
}

.theme-preview__footer p {
  margin: 0;
}
</style>

<style lang="scss">
@import "~@/styles/bootstrap-theme.scss";
</style>
