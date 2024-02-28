import type { SourcesResponseObject, NewsResponseObject } from '@/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news;
  private sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: SourcesResponseObject | NewsResponseObject): void {
    if ('articles' in data) {
      this.news.draw(data.articles);
      return;
    } else {
      this.news.draw([]);
    }
  }

  public drawSources(data: SourcesResponseObject | NewsResponseObject): void {
    if ('sources' in data) {
      this.sources.draw(data.sources);
      return;
    } else {
      this.sources.draw([]);
    }
  }
}

export default AppView;
