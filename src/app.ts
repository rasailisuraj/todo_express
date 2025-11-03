import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Api is working properly");
});

export default app;
