import { combineReducers } from "redux";

import complete from "./completeReducer";
import InComplete from "./inCompleteReducer";

export default combineReducers({
    complete,
    InComplete
})