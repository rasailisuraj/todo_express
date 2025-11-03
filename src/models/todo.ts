import { randomUUID } from "crypto";

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

//in-memory database

class TodoCollection {
  private todos: Todo[] = [];

  create(title: string, description: string): Todo {
    const todo: Todo = {
      id: randomUUID(),
      title,
      description,
      completed: false,
    };

    this.todos.push(todo);
    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: string): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: string, data: Partial<Omit<Todo, "id">>): Todo | undefined {
    const todo = this.findById(id);
    if (!todo) throw new Error("Todo not found");
    Object.assign(todo, data);
    return todo;
  }

  delete(id: string): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) return false;
    this.todos.splice(index, 1);
    return true;
  }
}

export const todoDB = new TodoCollection();
