import React from 'react'
import axios from 'axios'
import AllAlbums from './AllAlbums'
import Player from './Player'
import Sidebar from './Sidebar'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: [{
          artist: {
            name: ''
          },
          name: '',
          id: 0
        }]
    }
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
          {this.state.albums.map((album) => (
            <AllAlbums key={album.id} album={album} />
          ))}
        </div>
        <Player />
      </div>
    )
  }
}
