export interface ActionComplete {
    type : "ActionComplete",
    todo : string;
}

export interface ActionInComplete {
  type: "ActionInComplete";
  todo: string;
}

export interface ActionDelete {
  type: "ActionDelete";
  todo: string;
}