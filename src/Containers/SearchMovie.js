import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {EmptyPage, Loading, MovieList, SearchInput} from '../Components';
import {fetchMovieSearch} from '../Sevices/api';

const {width, height} = Dimensions.get('window');

const SearchMovie = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [movies, setMovies] = useState([]);

  const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const getMovie = value => {
    if (value && value.length > 2) {
      setLoad(true);
      fetchMovieSearch({page: 1, query: value}).then(data => {
        setMovies([...data.results]);
        setLoad(false);
      });
    }
  };

  const handleMovie = useCallback(
    debounce(value => getMovie(value), 400),
    [],
  );

  return (
    <View style={styles.Container}>
      <SearchInput getMovie={handleMovie} />
      {movies.length == 0 ? (
        <EmptyPage />
      ) : load ? (
        <Loading />
      ) : (
        <MovieList movies={movies} />
      )}
    </View>
  );
};

export default SearchMovie;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingBottom: 100,
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
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: '#E4AB18',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
});
