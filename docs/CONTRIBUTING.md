# Contributing: how we work

## The one rule
**Nobody pushes directly to `main`.** `main` is always working and demo-ready. All work happens on a branch, goes through a Pull Request (PR), passes CI, and gets one teammate's review.

## Daily flow
```bash
git switch main && git pull                 # start fresh
git switch -c feat/backend-booking-api      # one branch per task
# ... code, commit small and often ...
git push -u origin feat/backend-booking-api
# open a Pull Request on GitHub -> CI runs automatically
```
1. Pick an issue from the board; assign yourself.
2. Branch from latest `main`. Name: `feat/<area>-<what>`, `fix/<area>-<what>`, `docs/<what>`, `chore/<what>`.
3. Keep PRs small (under about 400 lines) and focused on one thing.
4. Open the PR early (use *Draft* while working). Fill in the template.
5. CI must be green. Fix failures on your branch; the PR updates automatically.
6. A teammate reviews. Code owners (see `.github/CODEOWNERS`) are requested automatically.
7. **Squash and merge.** Branch auto-deletes. `main` updates; staging deploys.
8. Rebase/merge `main` into your branch often to avoid big conflicts.

## Commit messages (Conventional Commits)
`feat(backend): add booking endpoint` · `fix(ai): handle empty image` · `docs: update architecture` · `test(mobile): add login test` · `chore(ci): bump node`

## Definition of Done
- [ ] Works locally (`docker compose up`)
- [ ] Tests added; `npm test` / `pytest` pass
- [ ] Lint passes
- [ ] No secrets or personal data committed
- [ ] API contract and docs updated if needed
- [ ] Reviewed and approved by a teammate

## Local checks before pushing
```bash
pip install pre-commit && pre-commit install      # runs lint + secret scan on each commit
# backend:  cd services/backend && npm install && npm run lint && npm test
# ai:       cd services/ai && pip install -r requirements.txt -r requirements-dev.txt && ruff check . && pytest
```

## Ownership (from the project plan)
| Slice | Owner | Reviewer (buddy) |
|---|---|---|
| Mobile apps | Member 1 | Member 4 |
| Backend + DB + payments | Member 2 | Member 3 |
| AI / ML | Member 3 | Member 2 |
| Admin, testing, report | Member 4 | Member 1 |

Cross-review in pairs: you can learn the other slices and nobody is a single point of failure.

## Weekly rhythm
Saturday internal review (demo `main` on staging) · end of month: guide review against the monthly milestone.
