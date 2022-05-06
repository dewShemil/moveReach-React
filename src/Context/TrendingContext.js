import React, { useState, useContext, useEffect, useReducer } from "react";
import { TrendingReducer } from "../Reducers/TrendingReducer";
import { KEY } from "../KEY";
import axios from "axios";

// make sure to use

const TrendingContext = React.createContext();

const initialState = {
  data: [],
  type: "movie",
  loading: false,
};

export const Actions = {
  StartLoading: "StartLoading",
  EndLoading: "EndLoading",
  FetchData: "FetchData",
};

const TrendingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TrendingReducer, initialState);

  const url = `https://api.themoviedb.org/3/trending/${state.type}/week?api_key=${KEY}`;

  const fetchData = async () => {
    dispatch({ type: Actions.StartLoading });
    try {
      const response = await axios.get(url);
      //   console.log(response.data);
      dispatch({ type: Actions.FetchData, payload: response.data });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: Actions.EndLoading });
  };

  useEffect(() => {
    fetchData();
  }, [state.type]);

  return (
    <TrendingContext.Provider value={{ ...state }}>
      {children}
    </TrendingContext.Provider>
  );
};
// make sure use
export const useTrendingContext = () => {
  return useContext(TrendingContext);
};

// Make sure to wrap INdex js files in TrendingProvider
export { TrendingContext, TrendingProvider };
