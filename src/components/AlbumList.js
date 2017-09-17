import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  // Initialize the state with an empty albums list
  state = { albums: [] };

  // Called when the Component first loads
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  // Helper function to render albums
  renderAlbums() {
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
