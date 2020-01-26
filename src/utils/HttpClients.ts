import axios from 'axios';

/**
 * Axios http client, with base route set to
 * http://api.tvmaze.com/shows
 */

const HttpClient = axios.create({
  baseURL: 'http://api.tvmaze.com/shows',
  timeout: 1000,
});

export default HttpClient;
