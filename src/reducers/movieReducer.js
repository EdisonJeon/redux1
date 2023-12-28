import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_NEW_MOVIE,
} from "../actions/movieActions.js";
import movies from "./../data.js";

export const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  newMovie: {
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
        newMovie: {
          title: action.payload,
          director: action.payload,
          genre: action.payload,
          metascore: action.payload,
          description: action.payload,
        },
      };
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};
