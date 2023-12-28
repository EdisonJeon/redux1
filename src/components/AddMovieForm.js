import React from "react";
import { addMovie, updateNewMovie } from "./../actions/movieActions";
import { connect } from "react-redux";

import { Link, useHistory } from "react-router-dom";

const AddMovieForm = (props) => {
  const { title, director, genre, metascore, description } = props.newMovie;
  const { push } = useHistory();

  const handleSubmit = (e) => {
    props.addMovie(newMovie);
  };

  return (
    <div className="col">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Add Movie</h4>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  value={title}
                  onChange={(e) => props.updateNewMovie(e.target.value)}
                  name="title"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Director</label>
                <input
                  value={director}
                  onChange={(e) => props.updateNewMovie(e.target.value)}
                  name="director"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <input
                  value={genre}
                  onChange={(e) => props.updateNewMovie(e.target.value)}
                  name="genre"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Metascore</label>
                <input
                  value={metascore}
                  onChange={(e) => props.updateNewMovie(e.target.value)}
                  name="metascore"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => props.updateNewMovie(e.target.value)}
                  name="description"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <input type="submit" className="btn btn-success" value="Add" />
              <Link to={`/movies`}>
                <input
                  type="button"
                  className="btn btn-default"
                  value="Cancel"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// const AddMovieForm = (props) => {
//   console.log(props.newMovie);
//   return <div></div>;
// };

const mapStateToProps = (state) => {
  return {
    newMovie: state.movieReducer.newMovie,
  };
};

export default connect(mapStateToProps, { addMovie, updateNewMovie })(
  AddMovieForm
);
