const app = require("./app");

const port = process.env.BACKEND_PORT || 4000;
app.listen(port, () => console.log(`backend listening on ${port}`));
