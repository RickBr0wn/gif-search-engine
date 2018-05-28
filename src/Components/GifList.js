import React from 'react'
import Gif from './Gif'

const GifList = props => { 
  const results = props.data
  console.log(results)
  let gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />)

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  )
}

export default GifList
