import { atom } from "recoil";
import { localStorageEffect } from "../utils/localStorageEffect";
import { IGetResultProps } from "../api/api";

export const likesAtom = atom<IGetResultProps[]>({
  key: "likes",
  default: [],
  effects: [localStorageEffect("likes")],
});
