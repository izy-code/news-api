import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '52ec34c0d4494591ae284ed09034b76c', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
