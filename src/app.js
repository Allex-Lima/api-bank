require("dotenv/config");
const db = require("./database/db");
const app = require("./server");
const port = 3000;

db(app.listen(port));