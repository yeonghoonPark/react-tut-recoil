import { useRecoilState } from "recoil";
import { TodoFilter } from "../../model/todo";
import { todoListFilterState } from "../../recoil/state";

const filters = ["Show All", "Show Completed", "Show Uncompleted"];

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const textContent = e.currentTarget.textContent;
    setFilter(textContent as TodoFilter);
  };

  return (
    <section>
      <ul>
        {filters.map((f, i) => (
          <li key={i}>
            <button
              style={{
                background: `${f === filter ? "orange" : ""}`,
              }}
              onClick={handleClick}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
