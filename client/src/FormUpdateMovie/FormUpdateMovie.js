import React, {useHistory} from "react";
import { Link } from "react-router-dom";

/* import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage"; */

class FormUpdateMovie extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      movie: {

        id: this.movie.id,
        title: this.movie.title,
        director: this.movie.director,
        metascore: this.movie.metascore,
        stars: this.movie.stars,
      },
  
    };
  }

  handleChange = e => {
    this.setState({
      movie: {
        ...this.state.movie, [e.target.name]: e.target.value
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
          <Link to={`/movies/${this.state.movie.id}`}>
          <button>Update</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default FormUpdateMovie;
