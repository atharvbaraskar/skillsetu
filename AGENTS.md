# Context for AI coding assistants (Claude, ChatGPT, Gemini, Copilot, Cursor, etc.)

Paste or point your tool at this file before asking it to write code.

## Project
SkillSetu: marketplace connecting customers with verified local skilled workers (electrician, plumber, ...).
Trust layer = document authenticity check, skill-video review, problem-to-trade matching, fraud detection, trust-score ranking.

## Structure
- `apps/mobile`  React Native (Expo): customer + worker apps
- `apps/admin`   React (Vite): admin dashboard
- `services/backend` Node.js/Express, PostgreSQL+PostGIS, Socket.io, JWT/Firebase Auth, Razorpay
- `services/ai`  Python 3.11 / FastAPI: OpenCV, spaCy, scikit-learn
- Backend calls the AI service over HTTP only. Clients NEVER call the AI service directly.

## Hard rules
1. AI assists decisions; a human admin makes the final verification decision.
2. If the AI service is down, the backend must degrade to manual review, not fail.
3. Never hard-code secrets. Use environment variables (`.env.example` lists them).
4. Every change needs tests. Backend: `node --test`. AI: `pytest`. Lint must pass (`eslint`, `ruff`).
5. Do not change API contracts in `docs/api/` without updating the contract and tagging the consuming owner.
6. Do not invent libraries or APIs. If unsure, say so.
7. Keep PRs small (< ~400 changed lines).
