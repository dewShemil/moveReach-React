import { Actions } from "../Context/MovieContext";

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case Actions.OnChange:
      return { ...state, typing: action.payload };

    case Actions.OnSubmit:
      return { ...state, query: action.payload };

    case Actions.StartLoading:
      return { ...state, loading: true };

    case Actions.EndLoading:
      return { ...state, loading: false };

    case Actions.FetchData:
      return { ...state, data: action.payload };

    default:
      console.log("Error");
  }
};
