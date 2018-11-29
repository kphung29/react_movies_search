import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.performSearch();
  }

  performSearch(searchTerm) {
    console.log('Perform search using moviedb')
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a53fbe44c976e8850822df8db5b4ac5e&query=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        const movieRows = [];
        data.results.forEach(movie => {
          console.log(movie);
          movie.image_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      })
      .catch(err => {
        console.log(err);
      })
  }

  searchChangeHandler(e) {
    this.performSearch(e.target.value);
  }

  render() {
    return (
      <div className="App">

      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              logo
            </td>
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 30,
        display: 'block',
        width: '99%',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
      {this.state.rows}

      </div>
    );
  }
}

export default App;
