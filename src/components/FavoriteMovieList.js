import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { removeFavorite } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
  const { favorites, removeFavorite } = props;

  const handleClick = (id) => {
    removeFavorite(id);
  };

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <div className="btn btn-light savedButton">
              {movie.title}
              <span onClick={() => handleClick(movie.id)}>
                <span className="material-icons">remove_circle</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
