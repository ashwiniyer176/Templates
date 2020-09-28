import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useState} from 'react';

export default function Menu({navigation}) {
  const [details, setDetails] = useState([
    {det: 'Sudoku', key: 1, icon: 'GridOnOutlined'},
    {det: 'MasterMind', key: 2, icon: 'psychology'},
    {det: 'BattleShip', key: 3, icon: 'group_work'},
    {det: 'Memorify', key: 4, icon: 'memory'},
    {det: 'ListScreen', key: 5, icon: 'memor'},
  ]);

  const pressHandler = (id) => {
    navigation.navigate(id);
  };
  return (
    <View style={styles.body}>
      <View style={styles.sectionHeader} backgroundColor="#142f8f">
        <Text style={styles.sectionTitle}>Cognify</Text>
        <Image source={require('../assets/logo.png')} style={styles.img} />
      </View>

      <View style={{flex: 2, backgroundColor: '#142f8f'}}>
        <ScrollView>
          {details.map((detail) => {
            return (
              <TouchableOpacity onPress={() => pressHandler(detail.det)}>
                <View
                  key={detail.key}
                  style={styles.sectionContainer}
                  backgroundColor="#142f8f">
                  <View style={styles.icons}>
                    {/* <Icon name={detail.icon} type="material" /> */}
                  </View>
                  <Text style={styles.row}>{detail.det}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-evenly',
    position: 'relative',
    backgroundColor: 'white',
  },
  sectionHeader: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: 'red',
  },
  sectionContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  row: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 30,
    color: 'white',
    padding: 20,
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
  },
  footerContainer: {
    padding: 4,
    paddingRight: 12,
  },
  icons: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50,
    // padding: 50
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
});
