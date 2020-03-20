import React from "react";
/* import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage"; */

class FormUpdateMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id: 5,
        title: "Tombstone",
        director: "George P. Cosmatos",
        metascore: 89,
        stars: ["Kurt Russell", "Bill Paxton", "Sam Elliot"]
      }
    };
  }

  handleChange = e => {
    this.setState({
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    });
  };

  putMessage = e => {
    e.preventDefault();
    this.props.putMessage(this.state.movie);
  };

  render() {
    return (
      <div className="movies-form">
        <h2>PUT (update) a movie</h2>
        <form onSubmit={this.putMessage}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.movie.title}
          />
          <input
            type="text"
            name="director"
            placeholder="Director"
            onChange={this.handleChange}
            value={this.state.movie.director}
          />
          <input
            type="text"
            name="movie"
            placeholder="Movie"
            onChange={this.handleChange}
            value={this.state.movie.metascore}
          />
          <input
            type="text"
            name="stars"
            placeholder="Movie"
            onChange={this.handleChange}
            value={this.state.movie.stars}
          />
          {/*{" "}
          {this.props.putError ? (
            <ErrorMessage message={this.props.putError} />
          ) : null}
          {this.props.putSuccessMessage ? (
            <SuccessMessage message={this.props.putSuccessMessage} />
          ) : null}{" "}
          */}
          <Link to="/:id">
            <button type="button">Update Movie</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default FormUpdateMovie;
