import React from 'react'

const SingleAlbum = (props) => (
    <div id='single-album' class='column'>
                <div class='album'>
                <a onClick={props.handleClick}>
                    <img src='default-album.jpg' />
                    <p>{props.albumName}</p>
                    <small>{props.artistName}</small>
                </a>
                </div>
                <table id='songs'>
                <tbody>
                    <tr class='gray'>
                    <td />
                    <td>#</td>
                    <td>Name</td>
                    <td>Artist</td>
                    <td>Genre</td>
                    </tr>
                    
                    {
                    props.songs.map((song) =>(
                    <tr>
                    <td><i class='fa fa-play-circle' /></td>
                    <td>{song.id}</td>
                    <td>{song.name}</td>
                    <td>{props.artistName}</td>
                    <td>{song.genre}</td>
                    </tr> 
                    ))
                    }  
               
                </tbody>
                </table>
            </div>
)
export default SingleAlbum
