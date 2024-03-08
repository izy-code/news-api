import Loader from './loader';

const apiUrl = process.env.API_URL || 'https://newsapi.org/v2/';
const apiKey = process.env.API_KEY || ''; // An empty string was used as the default API key due to the unknown default key for the API

class AppLoader extends Loader {
  constructor() {
    super(apiUrl, {
      apiKey: apiKey,
    });
  }
}

export default AppLoader;
