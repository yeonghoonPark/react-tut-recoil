import { DefaultValue, atom, selector } from "recoil";
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

// test
export const testState = atom<any>({
  key: "testState",
  default: 10,
});

export const testSelectorState = selector<any>({
  key: "testSelectorState",
  get: ({ get }) => {
    const test = get(testState) * 10;
    return { test };
  },
});

export const toggleState = atom<boolean>({
  key: "toggleState",
  default: false,
});

export const testToggleState = selector<string>({
  key: "testToggleState",
  get: ({ get }) => {
    const toggle = get(toggleState);
    return toggle ? "참" : "거짓";
  },
});

export const proxySelector = selector({
  key: "proxySelector",
  get: ({ get }) => ({ ...get(testState), extraField: "hi" }),
  set: ({ set }, newValue) => set(testState, newValue),
});

// time
export const minuteState = atom({
  key: "minuteState",
  default: 0,
});

export const hourSelector = selector({
  key: "hourSelector",
  get: ({ get }) => {
    const minutes = get(minuteState) / 60;
    return minutes;
  },
  set: ({ set }, newVal) => {
    const minutes = Number(newVal) * 60;
    set(minuteState, newVal instanceof DefaultValue ? newVal : minutes);
  },
});

// temp
export const tempFState = atom({
  key: "tempFState",
  default: 100,
});

export const tempCState = selector({
  key: "tempCState",
  get: ({ get }) => {
    const tempC = ((get(tempFState) - 32) * 5) / 9;
    return tempC;
  },
  set: ({ set }, newValue) => {
    const tempF = (Number(newValue) * 9) / 5 + 32;
    set(tempFState, newValue instanceof DefaultValue ? newValue : tempF);
  },
});

// coins
export const coinListState = selector({
  key: "coinListState",
  get: async () => {
    const url = "https://api.coinpaprika.com/v1/tickers?quotes=KRW";
    const data = await fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
    return data;
  },
});

// names
export const namesState = atom({
  key: "namesState",
  default: ["", "Ella", "Chris", "", "Paul"],
});

export const filteredNamesState = selector({
  key: "filteredNamesState",
  get: ({ get }) => {
    const filteredNames = get(namesState).filter((name) => name !== "");
    return filteredNames;
  },
});
