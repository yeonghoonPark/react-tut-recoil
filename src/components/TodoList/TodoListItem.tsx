import { useRecoilState, useRecoilValue } from "recoil";
import { Todo } from "../../model/todo";
import { filteredTodoListState, todoListState } from "../../recoil/state";
import TodoItem from "./TodoItem";

export default function TodoListItem() {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);
  const filteredTodoList = useRecoilValue<Todo[]>(filteredTodoListState);

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

  return (
    <section>
      <ul>
        {filteredTodoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdateTodoChecked={handleUpdateTodoChecked}
            onUpdateTodoText={handleUpdateTodoText}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}
