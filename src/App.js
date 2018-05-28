import React, { Component } from 'react'
import './App.css'
import SearchForm from './Components/SearchForm'
import GifList from './Components/GifList'
import axios from 'axios'

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      gifs: [],
      query: '',
      loading: true
    }
  } 

  // componentDidMount(){
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=5PuvRRBmgzsRm0qVpBShqkGZLHbBDgBS')
  //     .then(response => response.json())
  //     .then(parsedJSON => this.setState({ gifs: parsedJSON.data }))
  //     .catch(error => console.log('Error fetching and parsing data: ' + error))
  // }

  // componentDidMount(){
  //   axios.get('http://api.giphy.com/v1/gifs/trending?api_key=5PuvRRBmgzsRm0qVpBShqkGZLHbBDgBS')
  //     .then(response => this.setState({ gifs: response.data.data }))
  //     .catch(error => console.log('Error fetching and parsing data: ' + error))
  // }

  componentDidMount(){
    this.performSearch()
  }

  performSearch = (query = 'dogs' ) =>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=5PuvRRBmgzsRm0qVpBShqkGZLHbBDgBS`)
      .then(response => this.setState({ 
        gifs: response.data.data,
        loading: false
      }))
      .catch(error => console.log('Error fetching and parsing data: ' + error))
  }

  render() { 
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
        {
          this.state.loading ? <p className='no-gifs'>Loading...</p> : <GifList data={this.state.gifs} />
        }
        </div>
      </div>
    )
  }
}

// api-key: 5PuvRRBmgzsRm0qVpBShqkGZLHbBDgBS