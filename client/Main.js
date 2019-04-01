import React from 'react'
import axios from 'axios'
import AllAlbums from './AllAlbums'
import Player from './Player'
import SingleAlbum from './SingleAlbum'
import Sidebar from './Sidebar'
import songSeed from '../songSeed'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: [], 
      selectedAlbum: songSeed
    }
  }

  handleClick(event) {
    const currentId = event.target.value
    this.setState({selectedAlbum: songSeed})
  }

  async componentDidMount() {
    const albums = await axios.get('/api/album')
    this.setState({
      albums: albums.data
    })
  }

  render() {
    console.log('our state', this.state.albums)
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className='row container'>
         {/* {this.state.albums.map((album) => (
            <AllAlbums key={album.id} album={album} />
          ))}  */}
          {
              <SingleAlbum handleClick = {
                ()=> {this.handleClick}}
                 songs = {this.state.selectedAlbum.songs} 
                 artistName = {this.state.selectedAlbum.artist.name}
                 albumName = {this.state.selectedAlbum.name}
                  />
           
          }
          
        </div>
        <Player />
        
      </div>
    )
  }
}
