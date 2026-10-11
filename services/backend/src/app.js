// Backend entry point: routes are mounted here
const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "backend" });
});

// TODO (backend lead): mount routers -> /auth, /bookings, /matching, /payments, /tracking

module.exports = app;
