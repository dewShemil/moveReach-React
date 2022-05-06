import React, { useState, useContext, useEffect, useReducer } from "react";
import { MovieReducer } from "../Reducers/MovieReducer";
import { KEY } from "../KEY";
import axios from "axios";

// make sure to use

const MovieContext = React.createContext();

const initialState = {
  type: "movie",
  query: "",
  typing: "",
  page: 1,
  loading: false,
  data: [],
};

export const Actions = {
  OnChange: "OnChange",
  OnSubmit: "OnSubmit",
  StartLoading: "StartLoading",
  EndLoading: "EndLoading",
  FetchData: "FetchData",
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const url = `https://api.themoviedb.org/3/search/${state["type"]}?api_key=${KEY}&language=en-US&query=${state["query"]}&page=${state["page"]}&include_adult=false`;

  //   const navigate = useNavigate();

  const fetchData = async () => {
    dispatch({ type: Actions.StartLoading });
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/${state.type}?api_key=d61cffcdbcedf2759af0c252bd30ee89&language=en-US&query=${state.query}&page=1&include_adult=false`
      );
      const {
        data: { results },
      } = response;
      // console.log(results);
      dispatch({ type: Actions.FetchData, payload: results });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: Actions.EndLoading });
  };

  useEffect(() => {
    fetchData();
  }, [state.type, state.query, state.page]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: Actions.OnChange, payload: value });
  };

  const onSubmitHandler = () => {
    dispatch({ type: Actions.OnSubmit, payload: state.typing });
  };

  return (
    <MovieContext.Provider
      value={{ ...state, onChangeHandler, onSubmitHandler }}
    >
      {children}
    </MovieContext.Provider>
  );
};
// make sure use
export const useMovieContext = () => {
  return useContext(MovieContext);
};

// Make sure to wrap INdex js files in MovieProvider
export { MovieContext, MovieProvider };
