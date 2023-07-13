import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "../components/TodoList/TodoItemCreator";
import TodoListFilters from "../components/TodoList/TodoListFilters";
import TodoListItem from "../components/TodoList/TodoListItem";
import TodoListStats from "../components/TodoList/TodoListStats";
import { Todo } from "../model/todo";
import { todoListState } from "../recoil/state";

export default function TodoList() {
  const todoList = useRecoilValue<Todo[]>(todoListState);

  useEffect(() => {
    console.log(todoList, "@todoListState");
  }, [todoList]);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoListItem />
    </>
  );
}
