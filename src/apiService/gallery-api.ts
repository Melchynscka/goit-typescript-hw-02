import axios from 'axios';
import { imageTypes } from "../types";

axios.defaults.baseURL = 'https://api.unsplash.com/';

interface data {
  results: imageTypes[];
  total: number;
  total_pages: number;
}

export async function fetchImage(topic: string , currentPage: number): Promise<data> {
  return axios.get('/search/photos',{
    params: {
      client_id: 'DCtBix4SwiSWaQzaGpttYzdj0XBjC4cDhCkRQNr_cSQ',
      query: topic,
      page:currentPage,
      per_page: 12
    }
  }).then(response => {
      return response.data;
    })
}