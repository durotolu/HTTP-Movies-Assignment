import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Route, Link } from 'react-router-dom';
import UpdateForm from './UpdateForm'

export default class Movie extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  // editMovie = () => {
  //   console.log(<Link to={`/update-movie/${this.props.match.params.id}`} />)
  //   return <Link to={`/update-movie/${this.props.match.params.id}`} />
  // }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    console.log(this.props.movie)
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <Link to={`/update-movie/${this.state.movie.id}`} className="edit-button" >
          Edit
        </Link>
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        {/* <Route path='/update-movie/:id'
          render={props => {
          return <UpdateForm {...props} movie={this.props.movie} />
        }}
        />
        <UpdateForm /> */}
      </div>
    );
  }
}
