export type Todo = {
  id: string;
  text: string;
  isComplete: boolean;
};

export type TodoFilter = "Show All" | "Show Completed" | "Show Uncompleted";
