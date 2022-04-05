import { createContext, useReducer } from "react";

const initialState = {
  driver: {},
  trip: {},
  vehicle: {},
  vibe: {},
}

function reducer(state, action) {
  return { ...state, ...action };
}

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TripContext.Provider value={{ state, dispatch }}>
      {children}
    </TripContext.Provider>
  );
};

export { TripContext, TripProvider };
