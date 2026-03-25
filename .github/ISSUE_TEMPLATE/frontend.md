---
name: Frontend issue
about: A frontend task for the Forge UI
title: ''
labels: frontend
assignees: ''
---

## What needs to be built

<!-- A clear description of the component, page, or behaviour that needs to be implemented -->

## API endpoint it consumes

<!-- The backend endpoint this feature reads from or writes to -->
<!-- Example: GET /sessions/{cohort_id} -->
<!-- Link to the relevant section of http://localhost:8000/api/v1/docs -->

**Endpoint:**
**Request:**
**Response shape:**

## Relevant PRD section

<!-- Which section of the Forge PRD describes this feature -->

## Designs or reference

<!-- Link to any mockup, screenshot, or PRD user journey that describes the expected UI -->

## Acceptance criteria

- [ ] Component renders correctly for all expected data states
- [ ] Loading state is handled
- [ ] Empty state is handled
- [ ] Error state is handled
- [ ] Responsive at 375px (mobile)
- [ ] Responsive at 1280px (desktop)
- [ ] Light mode works correctly
- [ ] Dark mode works correctly
- [ ] No hardcoded hex values or pixel values
- [ ] All API calls go through src/lib/api.ts
- [ ] New component has a .stories.tsx file if applicable
- [ ] Types added to src/types/ if new API response shapes are introduced

## Additional notes

<!-- Anything else the contributor should know before starting -->