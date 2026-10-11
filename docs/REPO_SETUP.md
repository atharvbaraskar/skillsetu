# One-time repository setup (team lead, ~30 minutes)

> **Note:** branch protection / rulesets on **private** repos need GitHub Pro/Team. As students, get the free
> **GitHub Student Developer Pack** (education.github.com/pack) or make the repo public.

## 1. Create the repo
1. Create a GitHub **Organization** (free), e.g. `skillsetu-team`, then the repo `skillsetu` inside it. Or use a personal repo and add the others as collaborators.
2. Unzip this starter, then:
```bash
cd skillsetu
git init -b main
git add . && git commit -m "chore: initial project scaffold"
git remote add origin git@github.com:<org>/skillsetu.git
git push -u origin main
```
3. Invite the 3 teammates (Write role) and the guide (Read role).

## 2. Protect `main` (Settings -> Rules -> Rulesets -> New branch ruleset)
Target: `main`. Enable:
- [x] Restrict deletions
- [x] Require a pull request before merging (required approvals: **1**, dismiss stale approvals, require review from Code Owners)
- [x] Require status checks to pass -> add **`ci-gate`** (and `secrets-scan`, `codeql (javascript-typescript)`, `codeql (python)`) and "require branches to be up to date"
- [x] Block force pushes
- [x] Require linear history (we squash-merge)

Repo Settings -> General -> Pull Requests: allow **Squash merging only**, enable **Automatically delete head branches**.

Why only `ci-gate`? CI skips jobs for folders you didn't touch; `ci-gate` is the single check that is always reported and fails if any job failed.

## 3. Fill in placeholders
- `.github/CODEOWNERS`: replace `@MOBILE_LEAD` etc. with real GitHub usernames.
- `docs/CONTRIBUTING.md`: replace Member 1-4 with names.

## 4. Environments and secrets
Settings -> Environments: create `staging` (and later `production` with **Required reviewers**).
Add secrets there (Firebase, Razorpay test keys, Maps key, cloud deploy token). Never commit them.

## 5. Project board
Enable GitHub Projects (Board view): columns `Backlog / In progress / In review / Done`. Create issues from `.github/ISSUE_TEMPLATE`. One milestone per month (Month 1-5).

## 6. First PRs (do these in order, each by the owner)
1. Admin: scaffold Vite React in `apps/admin` -> real lint/test/build scripts.
2. Mobile: scaffold Expo in `apps/mobile`.
3. Backend: DB migrations + auth module.
4. AI: first rule-based module (`problem_match`).
5. Lead: wire `deploy-staging.yml` to the chosen hosting target.

## 7. Release
When ready for a demo: tag `git tag v0.1.0 && git push --tags`. Keep a short `CHANGELOG.md`.
