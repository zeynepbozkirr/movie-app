import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchInput = ({searchText, setSearchText, getMovie}) => {
  const navigation = useNavigation();

  const changeText = async value => {
    setSearchText(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          onChangeText={value => changeText(value)}
          value={searchText}
          placeholder="Search"
          placeholderTextColor={'#B9B9B9'}
          onFocus={getMovie}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={30} color={'#B9B9B9'} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    borderColor: '#B9B9B9',
    backgroundColor: '#161616',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#B9B9B9',
  },
});

export default SearchInput;
