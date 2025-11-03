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

/**
 * Handle an HTTP request to create a new todo item.
 *
 * Validates that `title` and `description` are present in the request body; if either is missing, responds with HTTP 400 and an error message. On success, creates a new todo and responds with HTTP 201 and the created todo object.
 */
export async function createTodo(req: Request, res: Response) {
  const { title, description } = req.body as createTodo;

  if (!title || !description)
    return res
      .status(400)
      .json({ error: "Title and description are required" });

  const newTodo = todoDB.create(title, description);
  res.status(201).json(newTodo);
}
/**
 * Handle a request to retrieve a single todo item by identifier and send it in the HTTP response.
 */
export async function getTodo(req: Request, res: Response) {}
/**
 * Updates an existing todo item.
 *
 * Updates the todo identified by `req.params.id` using fields from the request body.
 * Sends a 200 response with the updated todo on success.
 * Sends a 400 response when input validation fails and a 404 response when the todo is not found.
 */
export async function updateTodo(req: Request, res: Response) {}
/**
 * Deletes a todo identified by `req.params.id` and sends an HTTP response reflecting the outcome.
 *
 * Expects the todo identifier in `req.params.id`. Sends a success response when deletion succeeds and an error response when the todo is not found or the request is invalid.
 */
export async function deleteTodo(req: Request, res: Response) {}