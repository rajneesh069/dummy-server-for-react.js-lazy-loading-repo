import express, { Request, Response } from "express";
import cors from "cors";
import { TODOS } from "./utils/Todo.js";
import { generateTodos, Todo } from "./utils/todoGenerator.js";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", async (_req: Request, res: Response) => {
  res.json("Working!").status(200);
});

app.get("/linkedin", async (_req: Request, res: Response) => {
  res.json({ network: 7, jobs: 8, messaging: 7, notifications: 5 }).status(200);
});

app.get("/todo", async (req: Request, res: Response) => {
  const { id } = req.query;
  res
    .json(TODOS.find((todo) => todo.id === parseInt(id as string)))
    .status(200);
});

app.get("/todos", async (_req: Request, res: Response) => {
  const Todos: Todo[] = generateTodos();
  res.json(Todos).status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
