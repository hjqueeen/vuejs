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
