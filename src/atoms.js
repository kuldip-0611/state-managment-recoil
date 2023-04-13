import { atom } from "recoil";

export const todoAppState = atom({
    key: 'to-do-list',
    default: [],
})

