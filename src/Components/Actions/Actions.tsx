import { ActionCompleteCreator, ActionInCompleteCreator, ActionDeleteCreator } from "../../Type/actionsCreatorType";

export const ActionComplete: ActionCompleteCreator = (todo) => {
  return {
    type : "ActionComplete",
    todo : todo
  };
};

export const ActionInComplete: ActionInCompleteCreator = (todo) => {
  return {
    type: "ActionInComplete",
    todo: todo
  };
};


export const ActionDelete: ActionDeleteCreator = (todo) => {
  return {
    type: "ActionDelete",
    todo: todo
  };
};