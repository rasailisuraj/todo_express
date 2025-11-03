import { Request, Response } from "express";
import { todoDB } from "../models/todo";

type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type createTodo = {
  title: string;
  description: string;
};

export async function createTodo(req: Request, res: Response) {
  const { title, description } = req.body as createTodo;

  if (!title || !description)
    return res
      .status(400)
      .json({ error: "Title and description are required" });

  const newTodo = todoDB.create(title, description);
  res.status(201).json(newTodo);
}
export async function getTodo(req: Request, res: Response) {}
export async function updateTodo(req: Request, res: Response) {}
export async function deleteTodo(req: Request, res: Response) {}
