import { atom, selector } from "recoil";
import { Todo, TodoFilter } from "../model/todo";

// text
export const textState = atom({
  key: "textState",
  default: "",
});

export const textCountState = selector({
  key: "textCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

// todo
export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom<TodoFilter>({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((l) => l.isComplete);
      case "Show Uncompleted":
        return list.filter((l) => !l.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((t) => t.isComplete).length;
    const totalUmcompltedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      todoList,
      totalNum,
      totalCompletedNum,
      totalUmcompltedNum,
      percentCompleted,
    };
  },
});
