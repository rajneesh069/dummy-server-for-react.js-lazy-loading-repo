export interface Todo {
  id: number;
  title: string;
  description: string;
}

export function generateTodos(): Todo[] {
  const numberOfTodos: number = Math.random() * 6 + 1;
  const Todos: Todo[] = [];

  for (let i = 0; i < numberOfTodos; i++) {
    let Todo: Todo = {
      id: i,
      title: `This is Todo ${i}`,
      description: `This is the description of Todo ${i}`,
    };
    Todos.push(Todo);
  }
  return Todos;
}

