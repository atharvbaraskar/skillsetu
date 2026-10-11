# Using LLMs to build SkillSetu (safely and productively)

LLMs are teammates that write fast but can be confidently wrong. The pipeline below makes sure **CI and a human review, not the LLM, decide what reaches `main`.**

## Who uses what (suggestion; use whatever each person is comfortable with)

| Task | Good fit | How |
|---|---|---|
| Architecture & design review, trade-offs | Claude, ChatGPT, Gemini | Paste `docs/ARCHITECTURE.md`, ask "what breaks at 1000 users?" |
| Generate code for a module | Claude / Copilot / Cursor / ChatGPT | Paste `AGENTS.md` + the API contract + one task |
| Write tests, edge cases | Any | "Write tests for this function, including failure cases" |
| Debugging | Any | Paste the error + minimal code, never entire repo dumps |
| Explain unfamiliar code/libs | Gemini / ChatGPT / Claude | Ask for explanation, then verify in official docs |
| Cross-check an answer | A *different* LLM | Ask model B to find bugs in model A's code |
| Dataset ideas / synthetic text for problem-match | Any | Label & review yourself; keep a record |
| Docs, README, report drafting | Any | You edit; keep your own voice; cite sources |

Cross-checking one model with another is the cheapest quality boost.

## Rules
1. **Context file:** start sessions with `AGENTS.md` (also saved as `CLAUDE.md`). Update it when conventions change.
2. **Small tasks:** ask for one function/endpoint at a time, not "build the backend".
3. **Contract first:** give the LLM the OpenAPI snippet; do not let it invent endpoints.
4. **Never paste secrets, API keys, `.env`, or real worker IDs/documents/videos.** Use dummy data.
5. **You own it:** read, run and understand every line before committing. If you can't explain it in review, don't commit it.
6. **Verify dependencies:** LLMs invent package names/functions. Check the package exists and is maintained before `npm install` / `pip install`.
7. **Tests are the judge:** AI-written code only counts when tests pass in CI. Ask the LLM to write the tests *first*.
8. **Label it:** add the `ai-assisted` label to PRs (not a penalty; it tells the reviewer to look closer).
9. **Licence/plagiarism:** don't paste large code from the LLM that you can't attribute; for the project report, disclose AI assistance per college policy.

## Prompt template
```
Context: <paste AGENTS.md>
Task: implement POST /v1/problem-match in services/ai/app/modules/problem_match.py
Contract: <paste OpenAPI snippet>
Constraints: rule-based baseline first (keyword map), return {score, reasons, model_version}, FastAPI, type hints.
Also write pytest tests including empty input and non-English text.
```

## Not the same as runtime AI
This file is about LLMs as *development helpers*. The product's own AI modules (OpenCV/CNN, spaCy, scikit-learn) are separate and described in `ARCHITECTURE.md`.
