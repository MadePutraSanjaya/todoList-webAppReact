import { Reducer } from "redux";
import {
  ActionComplete,
  ActionInComplete,
  ActionDelete,
} from "../Type/actionsType";
import { InComplete } from "../Type/storeType";

const initialState: InComplete = [];

const InCompleteReducer: Reducer<
  InComplete,
  ActionComplete | ActionInComplete | ActionDelete
> = (state = initialState, action) => {
  switch (action.type) {
    case "ActionInComplete":
      return [...state, action.todo];

    case "ActionDelete":
    case "ActionComplete":
      return [...state.filter((todo) => todo !== action.todo)];

    default:
      return [...state];
  }
};

export default InCompleteReducer;
