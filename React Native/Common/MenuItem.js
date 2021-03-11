import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function MenuItem(props) {
  const {menuItem, navigateToList} = props;
  return (
    <View>
      <TouchableOpacity onPress={() => navigateToList(menuItem)}>
        <View
          key={menuItem.key}
          style={styles.sectionContainer}
          backgroundColor="white">
          <View style={styles.icons} />
          <Text style={styles.row}>{menuItem.itemName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  icons: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'royalblue',
    height: 50,
    width: 50,
    borderRadius: 50,
    // padding: 50
  },
  row: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
});
