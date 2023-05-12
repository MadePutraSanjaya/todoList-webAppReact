import { Reducer } from "redux";
import {
  ActionComplete,
  ActionInComplete,
  ActionDelete,
} from "../Type/actionsType";
import { complete } from "../Type/storeType";

const initialState : complete = [];

const completeReducer: Reducer<
  complete,
  ActionComplete | ActionInComplete | ActionDelete
> = (state = initialState, action) => {
    switch (action.type) {
       case "ActionComplete" :
        return [...state, action.todo];

        case "ActionInComplete" :
        
        case "ActionDelete":
            return [...state.filter((todo) => todo !== action.todo )]

            default :
            return [...state]

    }
};

export default completeReducer;