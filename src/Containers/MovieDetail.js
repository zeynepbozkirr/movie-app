import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fetchMovieDetail, imageUrl300} from '../Sevices/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading} from '../Components';

const {width, height} = Dimensions.get('window');

const MovieDetail = ({route}) => {
  const navigation = useNavigation();

  const {movieId} = route?.params;
  const [load, setLoad] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieId) getMovie();
  }, []);

  const getMovie = async () => {
    setLoad(true);
    const value = await AsyncStorage.getItem('movies');
    const foundData = JSON.parse(value)?.find(item => item.id === movieId);
    if (!foundData) {
      const data = await fetchMovieDetail(movieId);
      let dataArr = [data];
      setMovies(data);
      setLoad(false);
      if (value) {
        let storageData = [...JSON.parse(value), ...dataArr];
        await AsyncStorage.setItem('movies', JSON.stringify(storageData));
      } else {
        await AsyncStorage.setItem('movies', JSON.stringify(dataArr));
      }
    } else {
      setMovies(foundData);
      setLoad(false);
    }
  };

  return (
    <View style={styles.container}>
      {load ? (
        <Loading />
      ) : (
        <ScrollView style={styles.scrolContain}>
          <Image
            source={{uri: imageUrl300(movies?.poster_path)}}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={30} color={'#B9B9B9'} />
          </TouchableOpacity>
          <View style={styles.text}>
            <View style={styles.average}>
              <MaterialIcons
                name="star"
                size={15}
                // color={'#E4AB18'}
                style={styles.averageIcon}
              />

              <Text style={styles.averageText}>{movies.vote_average}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              {movies?.genres?.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons
                      name="arrow-right"
                      size={18}
                      color={'#E4AB18'}
                      style={styles.averageIcon}
                    />
                    <Text style={styles.genres}>{item.name}</Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.title}>{movies.title}</Text>
              <Text style={styles.description}>{movies.overview}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#000',
    paddingBottom: 10,
  },
  scrolContain: {
    height: '100%',
    backgroundColor: '#000',
    paddingBottom: 10,
  },
  image: {
    width: width,
    height: 500,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#AA181E',
  },
  description: {
    fontSize: 16,
    color: '#B9B9B9',
  },
  genres: {
    marginVertical: 10,
    marginRight: 7,
    color: '#B9B9B9',
    fontWeight: '600',
  },
  average: {
    width: width * 0.2,
    backgroundColor: '#E4AB18',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
    marginVertical: 10,
  },
  averageText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 2,
  },
  detailContainer: {
    paddingHorizontal: 5,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieDetail;
