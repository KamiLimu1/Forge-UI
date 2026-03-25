# Forge Frontend — Claude Code Instructions

You are working on the frontend repository for Forge, the mentorship management system for KamiLimu — a structured eight-month mentorship programme for undergraduate students in Kenya. Read README.md for full project context before generating anything.

---

## The Stack

- React 18 with TypeScript (strict mode)
- Vite as the build tool
- Tailwind CSS for styling
- CSS custom properties in `src/styles/global.css` for all design tokens

---

## What Is Already Built

The following are complete and must not be rebuilt or duplicated.

### Foundation
- `src/vite-env.d.ts` — Vite type reference. Provides `import.meta.env` types. Do not delete.
- `src/styles/global.css` — Design tokens and base styles. `@import` for Google Fonts must stay above the `@tailwind` directives. Body default font is JetBrains Mono.
- `src/lib/api.ts` — The only API client. Exports `api` (typed namespaces: `api.auth.*`, `api.users.*`) and `tokenStore` (JWT read/write/clear). Handles automatic token refresh on 401. Never add a `fetch()` call anywhere else.
- `src/types/auth.ts` — All type definitions for the auth and user domain: `UserRole`, `AccountState`, `UserProfileResponse`, `TokenResponse`, `ApiError`, and all request/response shapes. Add new API types to `src/types/` in their own file as new domains are built.

### Auth Infrastructure
- `src/hooks/useAuth.ts` — Auth context and hook. Exports `<AuthProvider>` (mounted in `App.tsx`) and `useAuth()` which returns `{ user, isAuthenticated, isLoading, error, login, logout, clearError }`. Do not create another auth state mechanism.
- `src/App.tsx` — Router, `<AuthProvider>`, `<RequireAuth>` and `<RedirectIfAuthed>` wrappers. Add new routes here only.

### Auth Pages
All four auth pages are complete. Do not rebuild them.
- `src/pages/Login.tsx` — Two-step flow: email (Step 1) then password (Step 2). Handles login via `useAuth`.
- `src/pages/Activate.tsx` — Account activation. Reads `?token=` from URL, sets password, auto-logs in.
- `src/pages/ForgotPassword.tsx` — Requests a password reset email.
- `src/pages/ResetPassword.tsx` — Completes reset. Reads `?token=` from URL.

### UI Components
Check `src/components/README.md` for the complete up-to-date list of every component in `src/components/ui/`, `src/components/forge/`, and `src/components/layout/`. Always check this file before building anything new.

---

## Before Generating Anything

Run through this checklist mentally before writing a single line:

1. Does the component already exist in `src/components/`? Check `src/components/README.md` first.
2. Is there a backend API endpoint for this feature? Check `http://localhost:8000/api/v1/docs`.
3. Are you using design tokens from `src/styles/global.css` and not hardcoding values?
4. Have you handled loading, empty, and error states — not just the happy path?

---

## Component Rules

### Where Things Live

```
src/components/ui/      Generic reusable components with no Forge domain knowledge
                        Examples: Button, Badge, Card, Input, Modal, Spinner, Avatar

src/components/forge/   Forge domain components built from ui/ components
                        Examples: SessionRow, AttendanceToggle, GraduationStatus, TrackBadge

src/components/layout/  Structural shell components
                        Examples: Sidebar, TopBar, PageWrapper

src/hooks/              All custom React hooks — business logic lives here, not in components

src/lib/api.ts          The only place API calls are made — never use fetch() elsewhere

src/types/              TypeScript type definitions for all API response shapes

src/pages/              One file per route
```

### Component Structure

Every component must follow this pattern:

```typescript
// 1. Props interface above the component
interface ComponentNameProps {
  // typed props
}

// 2. Named export (not default export)
export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // 3. Hooks called at the top
  // 4. Render logic — no fetch calls, no business logic
}
```

### Required for Every Component

- A TypeScript props interface
- Handling for loading, empty, error, and success states
- A `.stories.tsx` file alongside it in the same folder
- Mobile-first responsive design (375px before 1280px)
- Dark mode support using the tokens from global.css

---

## Styling Rules

**Never hardcode a hex value:**
```typescript
// WRONG
style={{ color: '#00b4c2' }}
className="text-[#00b4c2]"

// CORRECT
className="text-teal-500"
```

**Never hardcode a pixel spacing value:**
```typescript
// WRONG
style={{ gap: '16px' }}

// CORRECT
className="gap-4"
```

**Always mobile first:**
```typescript
// WRONG
className="flex-row md:flex-col"

// CORRECT
className="flex-col md:flex-row"
```

### KamiLimu Brand Colours

The brand uses two primary colours throughout the UI:

- Teal `#00b4c2` — the KamiLimu signature colour. All primary actions, buttons, links, active states.
- Black `#050505` — primary text and strong UI elements
- Ivory `#f8f9f0` — light mode page backgrounds and surfaces
- Auburn `#ac3931` — danger and at-risk states
- Gamboge `#eaa000` — warning states
- Cal Poly Green `#214e34` — success and on-track states
- Indigo `#1b4864` — informational and secondary states

All of these are defined as tokens in global.css. Use the token names, not the hex values.

### KamiLimu Brand Fonts

- JetBrains Mono — titles, headings, section headers, captions
- Hind Guntur — subtitles, subheadings, body text, quotes

Both are loaded via Google Fonts. Use `font-mono` for JetBrains Mono and `font-sans` for Hind Guntur in Tailwind classes.

---

## API Rules

All API calls go through `src/lib/api.ts`. Never call `fetch()` directly anywhere else.

```typescript
// WRONG
const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/sessions/${id}`)

// CORRECT
import { api } from '@/lib/api'
const session = await api.sessions.getById(id)
```

---

## TypeScript Rules

- Strict mode is on — no `any` types, ever
- Use `unknown` if you genuinely do not know the type, then narrow it
- All API response shapes are typed in `src/types/`
- Every hook has typed parameters and a typed return value

---

## State Rules

Business logic lives in hooks. Components only call hooks and render.

```typescript
// WRONG — logic in component
function SessionList() {
  const [data, setData] = useState([])
  useEffect(() => { fetch(...).then(setData) }, [])
}

// CORRECT — logic in hook
function useSessionList(cohortId: string) {
  // all fetch and state logic here
}
function SessionList() {
  const { sessions, isLoading, error } = useSessionList(cohortId)
}
```

---

## What Not to Do

- Do not build a component that already exists in `src/components/`
- Do not call `fetch()` outside `src/lib/api.ts`
- Do not put business logic inside a component
- Do not hardcode any colour, spacing, or font value
- Do not use `any` as a TypeScript type
- Do not build desktop-first and add mobile as an afterthought
- Do not generate a component without a `.stories.tsx` file
- Do not render data without handling loading, empty, and error states