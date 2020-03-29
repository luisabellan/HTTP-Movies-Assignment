import React from "react";
import { Link } from "react-router-dom";

/* import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage"; */

class FormUpdateMovie extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      movie: {

        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: "",
      },
  
    };
  }

  handleChange = e => {
    this.setState({
      movie: {
        ...this.props.movie,
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
            value={this.props.title}
          />
          <input
            type="text"
            name="director"
            placeholder="Director"
            onChange={this.handleChange}
            value={this.props.director}
          />
          <input
            type="text"
            name="metascore"
            placeholder="Metascore"
            onChange={this.handleChange}
            value={this.props.metascore}
          />
          <input
            type="text"
            name="stars"
            placeholder="Stars"
            onChange={this.handleChange}
            value={this.props.stars}
          />
          {/*{" "}
          {this.props.putError ? (
            <ErrorMessage message={this.props.putError} />
          ) : null}
          {this.props.putSuccessMessage ? (
            <SuccessMessage message={this.props.putSuccessMessage} />
          ) : null}{" "}
          */}
          {console.log(this.props.state.movie)}
          <Link to={`/movies/${this.props.state.movie.id}`}>
          <button type="submit">Update</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default FormUpdateMovie;
