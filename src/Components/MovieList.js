import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {imageUrl500} from '../Sevices/api';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const renderItem = ({item, onPress, index}) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.item}
      onPress={() => onPress(item)}>
      <Image
        source={{uri: imageUrl500(item.poster_path)}}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title} </Text>
    </TouchableOpacity>
  );
};

const MovieList = ({movies, setPage, page, refreshFetchData}) => {
  const navigation = useNavigation();

  const changePage = () => {
    setPage(page + 1);
  };

  const handleClick = item => {
    navigation.navigate('MovieDetail', {movieId: item.id});
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={movies.id}
        data={movies}
        renderItem={({item, index}) =>
          renderItem({item, onPress: handleClick, index})
        }
        refreshControl={
          refreshFetchData ? (
            <RefreshControl onRefresh={refreshFetchData} />
          ) : (
            false
          )
        }
        onEndReached={changePage}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
  },
  contentContainer: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#161616',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    width: width * 0.43,
  },
  image: {
    height: height * 0.2,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B9B9B9',
  },
});

export default MovieList;
