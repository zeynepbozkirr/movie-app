import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Loading, MovieList, SearchInput, UserInfo} from '../Components';
import {fetchMovie} from '../Sevices/api';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [load, setLoad] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovie(page);
  }, [page]);

  const getMovie = async page => {
    const data = await fetchMovie(page);
    if (data) {
      setMovies(prevMovies => [...prevMovies, ...data.results]);
      setLoad(false);
    }
  };

  const refreshFetchData = async () => {
    setLoad(true);
    setPage(1);
    setMovies([]);
    await getMovie(1);
  };

  return (
    <View style={styles.container}>
      <UserInfo />
      <View style={styles.titleContain}>
        <Text style={styles.title}>Featured Top Movies</Text>
        <TouchableOpacity
          style={styles.iconContain}
          onPress={() => navigation.navigate('SearchMovie')}>
          <Feather name="search" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {load ? (
        <Loading />
      ) : (
        <MovieList
          movies={movies}
          setPage={setPage}
          page={page}
          refreshFetchData={refreshFetchData}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingBottom: 180,
  },
  titleContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    color: '#B9B9B9',
    width: width * 0.4,
    fontWeight: 'bold',
  },
  iconContain: {
    marginTop: 2,
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: '#E4AB18',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
});
