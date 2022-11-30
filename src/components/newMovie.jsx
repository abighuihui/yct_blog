import React from "react";
import Form from "./common/form";
import Joi from "joi";
import { getGenres } from "../services.fakeGenreService";

class New extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().required().min(0).max(100),
    dailyRentalRate: Joi.number().required().min(0).max(100),
  };

  // componentDidMount() {
  //   const genres = getGenres();
  //   this.setState({genres})

  //   const movieId = this.props.match.parms.div
  //   if(movieId === 'new') return;

  //   const movie = getMovie(movieId);
  //   if(!movie) return this.props.history.replace("/");

  //   this.setState({ data:this.mapToViewModel(movie) });
  // }

  doSubmit = () => {
    console.log("submit"); //保存页面带去下个页面
  };
  render() {
    return (
      <div>
        <h1>Movie Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genreId", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default New;
