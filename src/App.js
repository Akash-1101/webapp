// src/App.js
import React, { Component } from 'react';
import ImageList from './components/ImageList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images: [],
      loading: false
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  }

  searchImages = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${this.state.query}`);
      const data = await response.json();
      console.log(data)
      this.setState({ images: data.results });
    } catch (error) {
      console.error('Error fetching the images', error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Image Search</h1>
        <form onSubmit={this.searchImages}>
          <input
            type="text"
            placeholder="Search for images..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
        {this.state.loading ? <div className="loading">Loading...</div> : <ImageList images={this.state.images} />}
      </div>
    );
  }
}

export default App;
 