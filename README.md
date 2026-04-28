# Vue 2 Learning Project

Vue 2를 학습하면서 실무 아키텍처 감각까지 익히기 위한 예시 프로젝트입니다.

## 포함된 학습 범위

### 1) 기본 기능
- Vue 2 컴포넌트 구조(`views`, `components`)
- 템플릿 문법(`v-for`, `v-if`, 이벤트/양방향 바인딩)
- 라우팅(`vue-router`)과 화면 전환
- 전역 스타일 및 재사용 UI 컴포넌트

### 2) 심화 기능
- Vuex 모듈 분리(`auth`, `tasks`, `ui`)
- 학습 모듈 추가(`learning`)로 `state/getters/mutations/actions` 집중 연습
- 라우트 가드(로그인/권한)
- Lazy Loading 라우트
- Axios 인터셉터 패턴(실무 API 구조 대비)
- 커스텀 디렉티브(`v-permission`)
- 전역 필터(`formatDate`, `statusLabel`)
- 믹스인(`confirmLeave`)
- `props` / `emit` / 사용자 정의 `v-model` (`KeywordInput`)
- `computed getter/setter` (`LearningPanel.keywordProxy`)
- `mapGetters`, `mapActions` 활용 (`TasksView`, `LearningPanel`)
- 직접 `commit`을 통한 `mutation` 호출 예시 포함

### 3) 실무형 패턴
- 서비스 레이어 분리(`services`)
- 스토리지 유틸 분리(`utils/storage`)
- 역할 기반 접근 제어(RBAC) 샘플
- 모듈 경계가 분명한 폴더 구조

## 실행 방법

```bash
npm install
npm run serve
```

브라우저에서 안내되는 주소(기본: `http://localhost:8080`)로 접속합니다.

## 데모 계정

- 관리자: `admin@demo.com / admin123`
- 일반 사용자: `user@demo.com / user123`

## 학습 추천 순서

1. `src/router/index.js`: 라우트 구조와 가드 이해
2. `src/store/modules/*`: 상태 흐름(액션/뮤테이션/게터) 파악
3. `src/views/TasksView.vue`: 실제 화면에서 상태/이벤트 연결 확인
4. `src/directives/permission.js` + `src/mixins/confirmLeave.js`: 심화 패턴 익히기
5. `src/services/*`: API 추상화 레이어 확장 연습

## 확장 과제(실무 연습)

- Jest/Vue Test Utils 테스트 추가
- TypeScript 마이그레이션 연습
- 실제 백엔드 API 연결
- 페이지네이션/검색/정렬/에러 바운더리 추가
- 공통 Form Validation 유틸 구축
# vuejs
