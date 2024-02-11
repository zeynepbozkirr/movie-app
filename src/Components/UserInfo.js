import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import search from '../Assets/search.json';
import {imageUrl300} from '../Sevices/api';
import Feather from 'react-native-vector-icons/Feather';
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.nameText]}>Hi, Zeynep</Text>
        <Text style={[styles.text, styles.surnameText]}>
          Choose the movie you want to watch
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Feather name="user" size={24} style={styles.icon} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#B9B9B9',
    // borderStyle: 'dashed',
    margin: 10,
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
    color: '#B9B9B9',
    marginHorizontal: 5,
  },
  nameText: {
    marginRight: 5,
  },
  surnameText: {
    marginLeft: 5,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdbdbd',
    marginLeft: 'auto', // Sağ tarafa hizalamak için
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50, // Resmin yuvarlatılmış köşeleri için
  },
});

export default UserInfo;
