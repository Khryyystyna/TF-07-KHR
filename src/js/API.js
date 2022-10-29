import axios from 'axios';

const API_KEY = 'e1d2d59faab8416a91a95646b10aa32e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovie = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

