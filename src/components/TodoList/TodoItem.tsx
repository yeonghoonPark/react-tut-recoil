import { useRecoilValue } from "recoil";
import { Todo } from "../../model/todo";
import { todoListState } from "../../recoil/state";

type Props = {
    todo: Todo;
    onUpdateTodo: (updatedTodo: Todo) => void;
    onDeleteTodo: (todo: Todo) => void;
};

export default function TodoItem({ todo, onUpdateTodo, onDeleteTodo }: Props) {
    const todoList = useRecoilValue(todoListState);
    const { id, text, isComplete } = todo;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedTodo = {
            ...todo,
            isComplete: todo.isComplete === true ? false : true,
        };
        onUpdateTodo(updatedTodo);
    };

    const handleClick = () => {
        onDeleteTodo(todo);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={isComplete}
                onChange={handleChange}
            />
            <input type="text" />
            <button data-id={id} onClick={handleClick}>
                Delete
            </button>
        </div>
    );
}
