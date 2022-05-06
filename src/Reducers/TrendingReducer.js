import { Actions } from "../Context/TrendingContext";

export const TrendingReducer = (state, action) => {
  switch (action.type) {
    case Actions.StartLoading:
      return { ...state, loading: true };

    case Actions.EndLoading:
      return { ...state, loading: false };
    case Actions.FetchData:
      // console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      console.log("Error");
  }
};
