import React from 'react'
import AllAlbums from './AllAlbums'
import Player from './Player'
import Sidebar from './Sidebar'
import albumSeed from '../albumSeed'

export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      albums: []
    }
  }
  render () {
    return (
      <div id='main' className='row container'>
        {/* The music starts here! */}
        <Sidebar />
        <AllAlbums albums = {this.state.albums} />
        <Player />
      </div>
    )
  }
}
