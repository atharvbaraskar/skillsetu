# AI modules (one file each, one owner, one test file each)

| Module | Endpoint | Input -> Output | Fallback if unavailable |
|---|---|---|---|
| document_check | POST /v1/document-check | ID/certificate image -> tamper score + reasons | send to manual review queue |
| video_review | POST /v1/video-review | skill video -> quality + trade-match score | manual review |
| problem_match | POST /v1/problem-match | text (later voice) -> trade + urgency | customer picks trade manually |
| fraud_detect | POST /v1/fraud-detect | booking/pricing event -> anomaly flag | no flag, log only |
| trust_rank | POST /v1/trust-rank | worker stats -> explainable score | plain rating average |

Start each module with a rule-based baseline + tests, then replace with the model. Always return
`{ "score": float, "reasons": [str], "model_version": str }` so the admin can see *why*.
