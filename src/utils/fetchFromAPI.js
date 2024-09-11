import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,     // refer https://vitejs.dev/guide/env-and-mode.html AND https://stackoverflow.com/questions/71083110/vue-uncaught-referenceerror-process-is-not-defined
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log('axios GET', data)
  return data;
}