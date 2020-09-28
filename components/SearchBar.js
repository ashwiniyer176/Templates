import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class SongSearcher extends Component {
  constructor({text}) {
    super();
    this.state = {
      text: text || '',
    };
  }

  handleChangeText(newText) {
    const {onChange} = this.props;
    this.setState(
      {
        text: newText,
      },
      () => {
        onChange && onChangeText(newText);
      },
    );
    console.log(this.state.text);
  }

  render() {
    return (
      <View>
        <SearchBar
          placeholder="Search song, artist, album..."
          onChangeText={(newText) => this.handleChangeText(newText)}
          value={this.state.text}
        />
      </View>
    );
  }
}
