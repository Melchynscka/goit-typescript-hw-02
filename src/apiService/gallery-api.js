import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (searchQuery, page = 1) => {
  const response = await axios.get('search/photos', {
    params: {
      client_id: 'DCtBix4SwiSWaQzaGpttYzdj0XBjC4cDhCkRQNr_cSQ',
      query: searchQuery,
      page,
      per_page: 12
    }
  });

  return response.data.results;
};