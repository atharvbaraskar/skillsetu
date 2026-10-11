# SkillSetu

AI-assisted trust verification and smart matching platform for local skilled workers.
Final-year project, Dept. of IT & AI-ML, Modern College of Engineering, Pune (A.Y. 2026-27).

| Part | Path | Stack | Owner |
|---|---|---|---|
| Customer + Worker apps | `apps/mobile` | React Native (Expo) | Mobile lead |
| Admin dashboard | `apps/admin` | React (Vite) | Admin/QA lead |
| Backend API | `services/backend` | Node.js + Express + PostgreSQL/PostGIS | Backend lead |
| AI microservice | `services/ai` | Python + FastAPI | AI lead |

## Run everything locally
```bash
cp .env.example .env
docker compose -f infra/docker-compose.yml up --build
# backend  -> http://localhost:4000/health
# ai       -> http://localhost:8000/health
```

## Read first
- [Architecture](docs/ARCHITECTURE.md)
- [Contributing & workflow](docs/CONTRIBUTING.md)
- [One-time repo setup (branch protection, secrets)](docs/REPO_SETUP.md)
- [Using LLMs safely on this project](docs/LLM_WORKFLOW.md)
