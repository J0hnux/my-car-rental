"use client";

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  details: [
    {
      id: 0,
      image: "",
      name: "Mercedes Benz",
      otherDetails: ["From ₱2,000 per hour", "3 passengers", "2022 model"],
    },
    // { id: 2, text: 'Salary', amount: 200 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camera', amount: 150 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const clearDetails = (id) => {
    dispatch({
      type: "CLEAR_DETAILS",
      payload: id,
    });
  };

  const addDetails = (detail) => {
    dispatch({
      type: "ADD_DETAILS",
      payload: detail,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        // Pass objects and functions to children
        details: state.details,
        clearDetails,
        addDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
