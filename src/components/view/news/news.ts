import type { Article } from '@/types';
import './news.css';
import { assertIsQuerySelectable, findElement } from '@/utils';

class News {
  public draw(data: Article[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = findElement<HTMLTemplateElement>(document, '#newsItemTemp');

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);

      assertIsQuerySelectable(newsClone);

      if (idx % 2) {
        findElement<HTMLElement>(newsClone, '.news__item').classList.add('alt');
      }

      findElement<HTMLElement>(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      findElement<HTMLElement>(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
      findElement<HTMLElement>(newsClone, '.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      findElement<HTMLElement>(newsClone, '.news__description-title').textContent = item.title;
      findElement<HTMLElement>(newsClone, '.news__description-source').textContent = item.source.name;
      findElement<HTMLElement>(newsClone, '.news__description-content').textContent = item.description;
      findElement<HTMLElement>(newsClone, '.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    findElement<HTMLElement>(document, '.news').innerHTML = '';
    findElement<HTMLElement>(document, '.news').appendChild(fragment);
  }
}

export default News;
