import React from 'react'

const AllAlbums = (props) => {
  return (
    <div className='container'>
      <div id='albums' className='row wrap' className='album'>

          <a>
            <img src='default-album.jpg' />
            <p>{props.album.name}</p>
            <small>{props.album.artist.name}</small>
          </a>

      </div>
    </div>
  )
}

export default AllAlbums
