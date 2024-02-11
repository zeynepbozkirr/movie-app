import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import load from '../Assets/loading.json';

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView height={'100%'} source={load} autoPlay loop />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});
