import { ActionComplete, ActionInComplete, ActionDelete } from "./actionsType";

export type ActionCompleteCreator = (todo: string) => ActionComplete;

export type ActionInCompleteCreator = (todo: string) => ActionInComplete;

export type ActionDeleteCreator = (todo: string) => ActionDelete;
