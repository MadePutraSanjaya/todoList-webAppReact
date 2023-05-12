import React, {useRef} from 'react'
import "./CardList.css"
import {FaTrashAlt} from "react-icons/fa"
import { connect } from "react-redux";
import {ActionComplete, ActionInComplete, ActionDelete} from "../Actions/Actions"
import MapPropsType from "../MapStateToProps/MapPropsType";
import storeType from "../../Type/storeType";


const BorderList: React.FC<MapPropsType> = ({ complete, InComplete, ActionComplete, ActionInComplete, ActionDelete }) => {
    const input = useRef<HTMLInputElement>(null)
    const renderList = (type : "Complete" | "InComplete") => {
        const looper = type === "Complete" ? complete : InComplete;
        return (
          <>
            {looper.map((todo, index) => (
              <div className="card">
                <div className="card-header">
                  <div
                    className={
                      type === "Complete"
                        ? "card-header-status bg-secondary"
                        : "card-header-status bg-primary"
                    }
                  >
                    <span> {type === "Complete" ? "Done" : "Open"} </span>
                  </div>
                  <div
                    className="card-header-delete"
                    onClick={() => ActionDelete(todo)}
                  >
                    <FaTrashAlt />
                  </div>
                </div>
                <div className="card-todo">
                  <h3>{todo}</h3>
                </div>
                <div className="card-date-header">
                  <div className="card-date">
                    <span>Due date: </span> <br />
                    <span>21 october 2021 07:30PM</span>
                  </div>
                  <div
                    className={
                      type === "Complete" ? "card-done none" : "card-done flex"
                    }
                    onClick={() =>
                      type === "Complete"
                        ? ActionInComplete(todo)
                        : ActionComplete(todo)
                    }
                  >
                    <button
                    
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        );
    }

    const addTodo = () => {
      if (input.current) {
        const val = input.current.value;
        ActionInComplete(val);
      }
    }

  return (
    <div>
      <div className="cardInput">
        <input ref={input} style={{display: "flex", justifyContent: "center", margin: "auto"}}/>
        <button onClick={() => addTodo()}>Add</button>
      </div>
      {renderList("Complete")}
      {renderList("InComplete")}
    </div>
  );
};

const MapStateToProps = (state: storeType) => {
  return {
    complete: state.complete,
    InComplete: state.InComplete,
  };
};

export default connect(MapStateToProps, {
  ActionComplete,
  ActionInComplete,
  ActionDelete,
})(BorderList);