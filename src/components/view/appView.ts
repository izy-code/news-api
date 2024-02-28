import type { SourcesResponseObject, NewsResponseObject, Source } from '@/types';
import News from './news/news';
import Sources from './sources/sources';
import Languages from './languages/languages';

export class AppView {
  private news;
  public sources;
  private languages;
  private sourcesData: Source[] = [];

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.languages = new Languages();
  }

  public getSourcesData(): Source[] {
    return this.sourcesData;
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

  public drawLanguages(data: SourcesResponseObject | NewsResponseObject): void {
    if (!('sources' in data)) {
      throw new Error('Sources not found');
    }

    this.languages.draw(data.sources);
    this.sourcesData = data.sources;
  }
}

export default AppView;
