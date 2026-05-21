# Bootstrap 4.4.1 Alstom theme — mapping and override rationale

This document explains how `bootstrap-theme.scss` maps the **original Alstom LESS theme** to Bootstrap 4.4.1 Sass, which rules were **removed** because Bootstrap variables already produce the same result after `$primary` / link variables are set, and which rules **must stay** as post-import CSS because Bootstrap computes colors with `darken()` / `color-yiq()` and cannot express the Alstom palette through a single hue variable alone.

**Source of truth**

| Layer | Path |
|-------|------|
| Theme entry | `src/styles/bootstrap-theme.scss` |
| Bootstrap defaults | `node_modules/bootstrap/scss/_variables.scss` |
| Generated `.btn-*` | `node_modules/bootstrap/scss/_buttons.scss` + `mixins/_buttons.scss` |
| Generated `a` | `node_modules/bootstrap/scss/_reboot.scss` |
| CSS custom properties (`--primary`, `--blue`, …) | `node_modules/bootstrap/scss/_root.scss` |

**Brand tokens (unchanged from legacy LESS)**

| Token | Hex |
|-------|-----|
| `$alstom-darkblue` | `#162134` |
| `$alstom-bluegrey` | `#788291` |
| `$alstom-red` | `#d62f20` |
| … | (see `bootstrap-theme.scss`) |

---

## 1. Active theme configuration (current file)

### 1.1 Sass variables (before `@import`)

Requirement: adapt at least **primary**, **blue**, and **red** via Sass ([Bootstrap 4 theming](https://getbootstrap.com/docs/4.4/getting-started/theming/)).

```scss
$blue: $alstom-darkblue;    // #162134
$red: $alstom-red;          // #d62f20
$primary: $alstom-darkblue; // #162134
$link-color: $alstom-darkblue;
$link-hover-color: $alstom-bluegrey; // #788291
```

### 1.2 Post-import CSS overrides (after `@import`)

Only button states whose colors **differ from Bootstrap’s formulas** remain (see §4).

---

## 2. Bootstrap defaults vs Alstom targets

### 2.1 Core color variables

| Bootstrap variable | Default (`_variables.scss`) | This theme | Effect |
|--------------------|---------------------------|------------|--------|
| `$blue` | `#007bff` | `$alstom-darkblue` `#162134` | `:root --blue`, `.text-blue`, `.bg-blue`, utilities using `$blue` |
| `$red` | `#dc3545` | `$alstom-red` `#d62f20` | `:root --red`, `$danger` (default `$danger: $red`) |
| `$primary` | `$blue` → `#007bff` | `$alstom-darkblue` `#162134` | `--primary`, `.btn-primary`, `.btn-outline-primary` base, many “active” surfaces |
| `$link-color` | `theme-color("primary")` | `$alstom-darkblue` | `a { color }` in reboot |
| `$link-hover-color` | `darken($link-color, 15%)` | `$alstom-bluegrey` | `a:hover` — **explicit hex**, not `darken()` |
| `$danger` | `$red` | *(inherits `$red`)* | `:root --danger`, `.btn-danger` → `#d62f20` |

### 2.2 How `$primary` propagates (why many rules were removable)

When `$primary: $alstom-darkblue` is set **before** `@import "~bootstrap/scss/bootstrap"`:

1. **`$theme-colors["primary"]`** becomes `#162134`.
2. **`:root`** (`_root.scss`) emits `--primary: #162134` (not `#007bff`).
3. **`.btn-primary`** (`_buttons.scss`):

   ```scss
   @each $color, $value in $theme-colors {
     .btn-#{$color} {
       @include button-variant($value, $value);
     }
   }
   ```

   So `.btn-primary` uses `button-variant(#162134, #162134)` for its default background and border.

4. **`.btn-outline-primary`** uses `button-outline-variant($primary)` → border and text `#162134`, transparent background.

5. **`.dropdown-item.active`** (`$dropdown-link-active-bg: $component-active-bg` and `$component-active-bg: theme-color("primary")`) → background `#162134`.

6. Other consumers of `$component-active-bg` (nav pills active, pagination active, list-group active, checked custom controls, etc.) also use `#162134` without extra CSS.

---

## 3. Legacy LESS → Bootstrap mapping (full intent)

| Legacy LESS (intent) | Mechanism in this project | In `bootstrap-theme.scss` today? |
|----------------------|---------------------------|----------------------------------|
| `a { color: @alstom-darkblue }` | `$link-color` → `_reboot.scss` `a { color: $link-color }` | Variable only |
| `a:hover { color: @alstom-bluegrey }` | `$link-hover-color` → reboot hover | Variable only |
| `.btn-primary` default | `$primary` → `button-variant($primary, $primary)` | Variable only |
| `.btn-primary:hover` bluegrey | Bootstrap: `darken($primary, 7.5%)` | **Post-import override** (§4.1) |
| `.btn-primary:focus` darkblue | Bootstrap focus uses **hover** colors (`darken($primary, 7.5%)`) | **Post-import override** (§4.1) |
| `.btn-primary:active` darkblue | Bootstrap: `darken($primary, 10%)` | **Post-import override** (§4.1) |
| `.btn-outline-primary` default | `$primary` → `button-outline-variant($primary)` | Variable only |
| `.btn-outline-primary:hover` bluegrey bg, darkblue text | Bootstrap hover: **fill** with `$primary`, text `color-yiq($primary)` | **Post-import override** (§4.2) |
| `.btn-outline-primary:active` darkblue bg, bluegrey text | Bootstrap active: bg `$primary`, text `color-yiq($primary)` (light) | **Post-import override** (§4.2) |
| `.btn-link` / `:hover` both bluegrey | Bootstrap: `$link-color` / `$link-hover-color` (darkblue → bluegrey) | **Post-import override** (§4.3) |
| `.dropdown-item.active` darkblue | `$component-active-bg` → `theme-color("primary")` | Variable only (via `$primary`) |

---

## 4. Removed overrides — why they were safe

### 4.1 `a` and `a:hover` (removed)

**Was (redundant CSS):**

```scss
a { color: $alstom-darkblue; }
a:hover { color: $alstom-bluegrey; }
```

**Bootstrap already does this** after variables are set (`_reboot.scss`):

```scss
a {
  color: $link-color;              // → $alstom-darkblue
  @include hover() {
    color: $link-hover-color;      // → $alstom-bluegrey (overridden, not darken())
  }
}
```

**Default without `$link-hover-color` override:** hover would be `darken(#162134, 15%)` ≈ `#0c121c`, not `#788291`. Setting `$link-hover-color: $alstom-bluegrey` before import is required; duplicate `a { }` rules are not.

---

### 4.2 `.btn-primary` default block (removed)

**Was:**

```scss
.btn-primary { background-color: $alstom-darkblue; border-color: $alstom-darkblue; }
```

**Already primary:** With `$primary: #162134`, compiled `.btn-primary` from `button-variant` uses that value for background and border. No extra rule needed for the default state.

---

### 4.3 `.btn-outline-primary` base / focus border (removed)

**Was:**

```scss
.btn-outline-primary { border-color: …; color: …; }
.btn-outline-primary:focus, … { border-color: …; }
```

**Already primary:** `button-outline-variant($primary)` sets `color` and `border-color` to `$primary` (`#162134`). Focus only adds `box-shadow`, not a different border color—matching the legacy “keep darkblue border on focus” intent.

---

### 4.4 `.dropdown-item.active` (removed)

**Was:**

```scss
.dropdown-item.active, .dropdown-item:active { background-color: $alstom-darkblue; }
```

**Already primary:**

```scss
// _variables.scss
$component-active-bg: theme-color("primary") !default;  // → #162134 after $primary override
$dropdown-link-active-bg: $component-active-bg !default;
```

Chain: `$primary` → `$component-active-bg` → `$dropdown-link-active-bg` → `.dropdown-item.active` background `#162134`.

---


## 5. Kept overrides — why variables are not enough

Bootstrap 4 does **not** expose per-state Sass variables such as `$btn-primary-hover-bg`. States are generated in `mixins/_buttons.scss` using **`darken()`** and **`color-yiq()`**, not arbitrary palette names.

### 5.1 `.btn-primary` — focus, hover, active (kept)

**Mixin (simplified):**

```scss
@mixin button-variant($background, $border,
  $hover-background: darken($background, 7.5%),
  $hover-border: darken($border, 10%),
  $active-background: darken($background, 10%),
  $active-border: darken($border, 12.5%)) {
  // default: $background
  @include hover() { background-color: $hover-background; }  // not $alstom-bluegrey
  &:focus, &.focus { background-color: $hover-background; }   // same as hover, not darkblue
  &:active { background-color: $active-background; }          // darken 10%, not exact darkblue
}
```

| State | Bootstrap with `$primary: #162134` | Alstom target | Match? |
|-------|--------------------------------------|---------------|--------|
| Default | `#162134` | `#162134` | Yes — no CSS needed |
| `:hover` | `darken(#162134, 7.5%)` (darker navy) | `#788291` (`$alstom-bluegrey`) | **No** — override kept |
| `:focus` | Same as hover (`darken(…)`) | `#162134` | **No** — override kept |
| `:active:focus` | `darken(#162134, 10%)` | `#162134` | **No** — override kept |

**Current file:**

```scss
.btn-primary:focus, .btn-primary.focus { background/border: $alstom-darkblue; }
.btn-primary:hover { background/border: $alstom-bluegrey; }
.btn-primary:active:focus, .btn-primary.active:focus { … $alstom-darkblue !important; }
```

---

### 5.2 `.btn-outline-primary` — hover and active (kept)

**Mixin:**

```scss
@mixin button-outline-variant($color, $color-hover: color-yiq($color), …) {
  color: $color; border-color: $color;
  @include hover() {
    color: $color-hover;              // light text on filled primary
    background-color: $active-background;  // default: $color (#162134)
    border-color: $active-border;
  }
  &:active { color: color-yiq($color); background: $color; }
}
```

| State | Bootstrap with `$primary: #162134` | Alstom target | Match? |
|-------|--------------------------------------|---------------|--------|
| Default | Text/border `#162134`, bg transparent | Same | Yes — no CSS needed |
| `:hover` | Filled `#162134`, text `color-yiq(#162134)` (light) | Bg/border `#788291`, text `#162134` | **No** — override kept |
| `:active:focus` | Filled `#162134`, text light (`color-yiq`) | Bg `#162134`, text `#788291` | **No** — override kept |

---

### 5.3 `.btn-link` (kept)

**Bootstrap** (`_buttons.scss`):

```scss
.btn-link {
  color: $link-color;           // $alstom-darkblue
  @include hover() { color: $link-hover-color; }  // $alstom-bluegrey
}
```

| State | With current link variables | Alstom legacy intent | Match? |
|-------|----------------------------|----------------------|--------|
| Default | `#162134` | `#788291` | **No** |
| `:hover` | `#788291` | `#788291` | Yes |

Legacy LESS required **both** default and hover to be bluegrey. That contradicts `$link-color` / `$link-hover-color` (used for normal `<a>` tags). Changing `$link-color` to bluegrey would fix `.btn-link` but break global link styling—so a **scoped** post-import rule remains.

---
