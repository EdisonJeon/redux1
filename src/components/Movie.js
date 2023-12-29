import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/movieActions";
import { addFavorite } from "../actions/favoritesActions";

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const { displayFavorites, addFavorite } = props;

  const movie = props.movies.find((movie) => movie.id === Number(id));
  const handleClick = (e) => {
    e.preventDefault();
    props.deleteMovie(movie.id);
    push("/movies");
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    addFavorite(movie);
    push("/movies");
  };

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movie.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                {displayFavorites && (
                  <span className="favorite">
                    <input
                      type="button"
                      value="Favorite"
                      className="m-2 btn btn-dark"
                      onClick={handleClick2}
                    />
                  </span>
                )}
                <span className="delete">
                  <input
                    type="button"
                    className="m-2 btn btn-danger"
                    value="Delete"
                    onClick={handleClick}
                  />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.movies,
    favorites: state.favoritesReducer.favorites,
    displayFavorites: state.favoritesReducer.displayFavorites,
  };
};

export default connect(mapStateToProps, { deleteMovie, addFavorite })(Movie);
