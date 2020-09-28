import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const Item = ({title}) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  const DATA = [
    {
      id: 1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'Second Item',
    },
    {
      id: 3,
      title: 'Third Item',
    },
    {
      id: 4,
      title: 'Second Item',
    },
    {
      id: 5,
      title: 'Third Item',
    },
    {
      id: 6,
      title: 'Second Item',
    },
    {
      id: 7,
      title: 'Third Item',
    },
    {
      id: 8,
      title: 'Third Item',
    },
    {
      id: 9,
      title: 'Second Item',
    },
    {
      id: 10,
      title: 'Third Item',
    },
    {
      id: 11,
      title: 'Third Item',
    },
    {
      id: 12,
      title: 'Second Item',
    },
    {
      id: 13,
      title: 'Third Item',
    },
    {
      id: 14,
      title: 'Third Item',
    },
    {
      id: 15,
      title: 'Second Item',
    },
    {
      id: 16,
      title: 'Third Item',
    },
  ];
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
            <View
              style={{
                justifyContent: 'flex-end',
                width: 300,
                backgroundColor: 'white',
              }}>
              <TouchableOpacity>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    top: 390,
    // backgroundColor: 'white',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: 'royalblue',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    margin: 3,
    bottom: 3,
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
  },
});

export default ListModal;
