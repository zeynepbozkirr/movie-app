import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {EmptyPage, Loading, MovieList, SearchInput} from '../Components';
import {fetchMovieSearch} from '../Sevices/api';

const {width, height} = Dimensions.get('window');

const SearchMovie = ({navigation}) => {
  const [searchText, setSearchText] = useState(null);
  const [load, setLoad] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const prevPageRef = useRef(page);

  const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  useEffect(() => {
    if (searchText !== null) {
      getMovie();
    }
  }, [page, searchText]);

  const getMovie = useCallback(
    debounce(async () => {
      setLoad(true);
      const data = await fetchMovieSearch({page: page, query: searchText});
      if (data) {
        if (prevPageRef.current !== page) {
          setMovies(prevMovies => [...prevMovies, ...data.results]);
          prevPageRef.current = page;
        } else {
          setMovies(() => [...data.results]);
        }
      }
      setLoad(false);
    }, 1000),
    [(page, searchText)],
  );

  return (
    <View style={styles.Container}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        getMovie={() => getMovie()}
      />
      {movies.length == 0 ? (
        <EmptyPage />
      ) : load ? (
        <Loading />
      ) : (
        <MovieList movies={movies} setPage={setPage} page={page} />
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
