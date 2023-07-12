import { Todo } from "../../model/todo";

type Props = {
  todo: Todo;
  onUpdateTodoChecked: (updatedTodo: Todo) => void;
  onUpdateTodoText: (updatedTodo: Todo) => void;
  onDeleteTodo: (todo: Todo) => void;
};

export default function TodoItem({
  todo,
  onUpdateTodoChecked,
  onUpdateTodoText,
  onDeleteTodo,
}: Props) {
  const { text, isComplete } = todo;

  const handleCheckedChange = (): void => {
    const updatedTodo = {
      ...todo,
      isComplete: todo.isComplete === true ? false : true,
    };
    onUpdateTodoChecked(updatedTodo);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newText = e.target.value;
    const updatedTodo = {
      ...todo,
      text: newText,
    };
    onUpdateTodoText(updatedTodo);
  };

  const handleClick = (): void => {
    onDeleteTodo(todo);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleCheckedChange}
      />
      <input
        type="text"
        disabled={isComplete}
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
