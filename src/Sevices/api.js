import axios from 'axios';

const apikey = '229333845a9ffea537b987eb536a0aa2';
const apiUrl = 'https://api.themoviedb.org/3';

const movieAll = `${apiUrl}/movie/top_rated?api_key=${apikey}`;
const movieDetailUrl = id => `${apiUrl}/movie/${id}?api_key=${apikey}`;
const SearchMovie = `${apiUrl}/search/movie?api_key=${apikey}`;

export const imageUrl500 = path =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;

export const imageUrl300 = path =>
  path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

const apiCall = async (endpoint, page, query) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: {
      language: 'en-US',
      page: page ? page : {},
      query: query ? query : {},
      include_adult: 'false',
    },
    headers: {
      accept: 'application/json',
      Authorization: apikey,
    },
  };

  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const fetchMovie = page => {
  return apiCall(movieAll, page);
};

export const fetchMovieDetail = id => {
  console.log('====================================');
  console.log('fetchMovieDetail');
  console.log('====================================');
  return apiCall(movieDetailUrl(id));
};

export const fetchMovieSearch = ({page, query}) => {
  return apiCall(SearchMovie, page, query);
};
