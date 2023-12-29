import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_NEW_MOVIE,
} from "../actions/movieActions.js";
import movies from "./../data.js";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  newMovie: {
    id: uuidv4(),
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  },
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        newMovie: {
          id: uuidv4(),
          title: "",
          director: "",
          genre: "",
          metascore: 0,
          description: "",
        },
      };
    case UPDATE_NEW_MOVIE:
      return {
        ...state,
        newMovie: action.payload,
      };
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};
