export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_NEW_MOVIE = "UPDATE_NEW_MOVIE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (movie) => {
  return { type: ADD_MOVIE, payload: movie };
};

export const updateNewMovie = (newMovie) => {
  return { type: UPDATE_NEW_MOVIE, payload: newMovie };
};
