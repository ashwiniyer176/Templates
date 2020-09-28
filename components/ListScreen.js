import React from 'react';
import {View, Text} from 'react-native';
import Modal from './Modal';

export default function ListScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>This is the list screen</Text>
      </View>

      <Modal />
    </View>
  );
}
