import React from 'react'

const SingleAlbum = (props) => (
  <div id='single-album' className='column'>
    <div className='album'>
      <a>
        <img src='default-album.jpg' />
        <p>{props.albumName}</p>
        <small>{props.artistName}</small>
      </a>
    </div>
    <table id='songs'>
      <tbody>
        <tr className='gray'>
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>

        {props.songs.map((song) => (
          <tr key={song.id}>
            <td>
              <i className='fa fa-play-circle' id={song.id} onClick={props.playSong} />
            </td>
            <td>{song.id}</td>
            <td>{song.name}</td>
            <td>{props.artistName}</td>
            <td>{song.genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
export default SingleAlbum
