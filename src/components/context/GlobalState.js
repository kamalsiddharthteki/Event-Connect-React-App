import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  events: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  function addEvent(event) {
    dispatch({
      type: "ADD_EVENT",
      payload: event,
    });
  }

  //delete event action
  function deleteEvent(id) {
    dispatch({
      type: "DELETE_EVENT",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        events: state.events,
        addEvent,
        deleteEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
