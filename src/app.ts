import express from "express";
import todoRoutes from "./routes/todo-routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Server is working");
});

app.use("/todo", todoRoutes);

export default app;
