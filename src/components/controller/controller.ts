import type { ResponseObject } from '@/types';
import { assertIsDefined, assertObjectType } from '@/utils';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources(callback: (data: ResponseObject) => void): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  public getNews(e: Event, callback: (data: ResponseObject) => void): void {
    let target = e.target;
    const newsContainer = e.currentTarget;

    assertObjectType(target, HTMLElement);
    assertObjectType(newsContainer, HTMLElement);

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');

        assertIsDefined(sourceId);

        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = target.parentNode;

      assertObjectType(target, HTMLElement);
    }
  }
}

export default AppController;
