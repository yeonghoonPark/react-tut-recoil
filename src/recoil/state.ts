import { atom, selector } from "recoil";
import { Todo } from "../model/todo";

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
