import {
  DefaultValue,
  atom,
  selector,
  atomFamily,
  selectorFamily,
} from "recoil";
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

// atomFamily
// 1번째 인자: default값의 타입
// 2번째 인자: 매개변수로 들어갈 타입
export const sampleState = atomFamily<string | number, string | number>({
  key: "sampleState",
  default: (params) => `sampleState의 params는 ${params} 입니다`,
});

export const isShowSentenceState = atomFamily<boolean, number>({
  key: "isShowSentenceState",
  default: false,
});

// selectorFamily
export const KRWState = atom<number>({
  key: "KRWState",
  default: 0,
});

export const exchangeState = selectorFamily<number, string>({
  key: "exchangeState",
  get:
    (params) =>
    ({ get }): any => {
      const won = get(KRWState);
      switch (params) {
        case "USD":
          return Math.round(won * 0.0008);
        case "YEN":
          return Math.round(won * 0.11);
        case "PHP":
          return Math.round(won * 0.043);
        default:
          throw new Error(
            "exchangeState의 paramsTyep을 확인해주세요, 정신차려 이 친구야",
          );
      }
    },
  set:
    (params) =>
    ({ set }, newValue): any => {
      switch (params) {
        case "USD":
          const USDResult = Math.round(Number(Number(newValue) / 0.0008));
          return set(KRWState, USDResult);
        case "YEN":
          const YENResult = Math.round(Number(Number(newValue) / 0.11));
          return set(KRWState, YENResult);
        case "PHP":
          const PHPResult = Math.round(Number(Number(newValue) / 0.043));
          return set(KRWState, PHPResult);
        default:
          throw new Error(
            "exchangeState의 paramsTyep을 확인해주세요, 정신차려 이 친구야",
          );
      }
    },
});
