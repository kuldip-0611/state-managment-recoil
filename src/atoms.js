import { atom } from "recoil";

export const apiState =atom( {
    key:'api',
    default:[],
})

export const viewAtom = atom({
    key:'2',
    default:'1'
})