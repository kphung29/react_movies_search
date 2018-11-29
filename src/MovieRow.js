import React, { Component } from 'react';

class MovieRow extends Component {
  viewMovie() {
    const url = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
    window.location.href = url;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt='poster' src={this.props.movie.image_src}/>
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type='button' onClick={this.viewMovie.bind(this)} value='View'/>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}


export default MovieRow;