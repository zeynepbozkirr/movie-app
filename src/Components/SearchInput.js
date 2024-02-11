import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchInput = ({getMovie}) => {
  const [value, setValue] = useState();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          onChangeText={value => {
            getMovie(value);
            setValue(value);
          }}
          value={value}
          placeholder="Search"
          placeholderTextColor={'#B9B9B9'}
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
