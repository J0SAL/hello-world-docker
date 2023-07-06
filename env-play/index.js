require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const user_id = process.env.USER_ID || "no user id";
const user_key = process.env.USER_KEY || "no user key";
const node_env = process.env.NODE_ENV || "no node env";

app.get("/", (req, res) => {
  res.json({ message: "Hello World!", user_id, user_key, node_env });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
