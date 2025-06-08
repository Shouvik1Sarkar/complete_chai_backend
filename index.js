import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter page");
});

app.get("/login", (req, res) => {
  res.send("This is login");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
