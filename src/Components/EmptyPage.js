import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import search from '../Assets/search2.json';

const EmptyPage = () => {
  return (
    <View style={styles.container}>
      <LottieView height={'100%'} source={search} autoPlay loop />
    </View>
  );
};

export default EmptyPage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});
