# Vue 2 Learning Project

This project is a practical Vue 2 learning app designed to cover both core concepts and real-world architecture patterns.

## What you can learn

### 1) Core Vue 2 features
- Component structure with `views` and `components`
- Template syntax (`v-for`, `v-if`, events, and two-way binding)
- Routing with `vue-router`
- Global styles and reusable UI components

### 2) Advanced patterns
- Modular Vuex stores (`auth`, `tasks`, `ui`, `learning`)
- Route guards for auth and role checks
- Lazy-loaded routes
- Axios service/interceptor structure
- Custom directive (`v-permission`)
- Global filters (`formatDate`, `statusLabel`)
- Mixin (`confirmLeave`)
- `props` / `emit` / custom `v-model` (`KeywordInput`)
- Computed getter/setter pattern (`LearningPanel.keywordProxy`)

### 3) Internationalization (i18n)
- Full app localization with `vue-i18n`
- Supported locales: Korean (`ko`), German (`de`), English (`en`)
- Runtime language switcher in the app header
- Locale persistence via `localStorage`
- Fallback locale: English

## Getting started

```bash
npm install
npm run serve
```

Open the URL shown in your terminal (default: `http://localhost:8080`).

## Bootstrap 4.4.1 (Sass theming)

This project uses **Bootstrap 4.4.1** compiled from Sass at build time, not the precompiled CSS in `node_modules/bootstrap/dist/css/`.

- Entry file: [`src/styles/bootstrap-theme.scss`](src/styles/bootstrap-theme.scss)
- Loaded from [`src/main.js`](src/main.js) before `global.css`
- Official guide: [Bootstrap 4 theming](https://getbootstrap.com/docs/4.4/getting-started/theming/)

### Alstom corporate colors (Sass variables)

Set **before** `@import "~bootstrap/scss/bootstrap"` so they override Bootstrap defaults (`!default` in `node_modules/bootstrap/scss/_variables.scss`):

| Variable | Alstom token | Hex | Affects (examples) |
|----------|--------------|-----|-------------------|
| `$blue` | `$alstom-darkblue` | `#162134` | `:root --blue`, `.text-blue`, `.bg-blue` |
| `$red` | `$alstom-red` | `#d62f20` | `:root --red`, `.btn-danger` (via `$danger: $red`) |
| `$primary` | `$alstom-darkblue` | `#162134` | `:root --primary`, `.btn-primary`, active dropdown/nav states |

Link colors use `$link-color` / `$link-hover-color` (reboot `a` styles). Some button hover/active rules stay as small post-import overrides because Bootstrap derives those states with `darken()` / `color-yiq()`, not fixed brand hex values. Details: [`src/styles/bootstrap-theme.md`](src/styles/bootstrap-theme.md).

**Do not** add `import "bootstrap/dist/css/bootstrap.min.css"` alongside the Sass entry.

### Dependencies

`sass` and `sass-loader` are required (included in `devDependencies` after `npm install`).

## Demo accounts

- Admin: `admin@demo.com / admin123`
- Member: `user@demo.com / user123`

## Suggested learning path

1. `src/router/index.js` - Understand route structure and guards
2. `src/store/modules/*` - Follow Vuex state flow (actions/mutations/getters)
3. `src/views/TasksView.vue` - See state + UI interactions
4. `src/directives/permission.js` and `src/mixins/confirmLeave.js` - Study advanced reusable patterns
5. `src/services/*` - Extend and practice API abstraction

## Practice extension ideas

- Add tests with Jest / Vue Test Utils
- Try a TypeScript migration
- Connect to a real backend API
- Add pagination/search/sorting/error boundaries
- Build shared form validation utilities
