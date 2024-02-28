import type { Article } from '@/types';
import { assertObjectType, queryElement } from '@/utils';
import './news.css';

class News {
  public draw(data: Article[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = queryElement(document, '#newsItemTemp', HTMLTemplateElement);

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);

      assertObjectType(newsClone, DocumentFragment);

      if (idx % 2) {
        queryElement(newsClone, '.news__item', HTMLElement).classList.add('alt');
      }

      queryElement(newsClone, '.news__meta-photo', HTMLElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      queryElement(newsClone, '.news__meta-author', HTMLElement).textContent = item.author || item.source.name;
      queryElement(newsClone, '.news__meta-date', HTMLElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      queryElement(newsClone, '.news__description-title', HTMLElement).textContent = item.title;
      queryElement(newsClone, '.news__description-source', HTMLElement).textContent = item.source.name;
      queryElement(newsClone, '.news__description-content', HTMLElement).textContent = item.description;
      queryElement(newsClone, '.news__read-more a', HTMLElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    queryElement(document, '.news', HTMLElement).innerHTML = '';
    queryElement(document, '.news', HTMLElement).appendChild(fragment);
  }
}

export default News;
