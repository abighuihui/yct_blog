import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  rasieSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onLike, onDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.rasieSort("title")}>Title</th>
            <th onClick={() => this.rasieSort("genre.name")}>Genre</th>
            <th onClick={() => this.rasieSort("numberInStock")}>Stock</th>
            <th onClick={() => this.rasieSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                {<Like liked={movie.liked} onClick={() => onLike(movie)} />}
              </td>
              <td>
                <button onClick={() => onDelete(movie)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
