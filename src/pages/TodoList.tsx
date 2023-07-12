import { useEffect } from "react";
import { useRecoilState } from "recoil";
import TodoItem from "../components/TodoList/TodoItem";
import TodoItemCreator from "../components/TodoList/TodoItemCreator";
import { Todo } from "../model/todo";
import { todoListState } from "../recoil/state";

export default function TodoList() {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);

  const handleAddTodo = (newTodo: Todo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleUpdateTodoChecked = (updatedTodo: Todo) => {
    setTodoList(
      todoList.map((t) => (updatedTodo.id === t.id ? updatedTodo : t))
    );
  };

  const handleUpdateTodoText = (updatedTodo: Todo) => {
    setTodoList(
      todoList.map((t) => (updatedTodo.id === t.id ? updatedTodo : t))
    );
  };

  const handleDeleteTodo = (todo: Todo) => {
    setTodoList(todoList.filter((t) => t.id !== todo.id));
  };

  useEffect(() => {
    console.log(todoList, "@todoListState");
  }, [todoList]);

  return (
    <>
      {/* TodoListState */}
      {/* TodoListFilters */}

      <TodoItemCreator onAddTodo={handleAddTodo} />

      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdateTodoChecked={handleUpdateTodoChecked}
          onUpdateTodoText={handleUpdateTodoText}
          onDeleteTodo={handleDeleteTodo}
        />
      ))}
    </>
  );
}
