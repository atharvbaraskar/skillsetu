from fastapi import FastAPI

app = FastAPI(title="SkillSetu AI Service", version="0.1.0")


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "service": "ai"}


# Each module lives in app/modules/<name>.py and is exposed as /v1/<name>.
# Planned: document_check, video_review, problem_match, fraud_detect, trust_rank
