import { complete, InComplete } from "../../Type/storeType";
import { ActionCompleteCreator, ActionInCompleteCreator, ActionDeleteCreator } from "../../Type/actionsCreatorType";

interface MapPropsType {
  complete: complete;
  InComplete: InComplete;
  ActionComplete: ActionCompleteCreator;
  ActionInComplete: ActionInCompleteCreator;
  ActionDelete: ActionDeleteCreator;
}

export default MapPropsType;