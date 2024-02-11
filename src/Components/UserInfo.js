import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.nameText]}>Merhaba, Zeynep</Text>
        <Text style={[styles.text, styles.surnameText]}>
          Hadi izlemek istediğin filmi seç
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#B9B9B9',
    borderStyle: 'dashed',
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
    marginLeft: 'auto', // Sağ tarafa hizalamak için
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50, // Resmin yuvarlatılmış köşeleri için
  },
});

export default UserInfo;
