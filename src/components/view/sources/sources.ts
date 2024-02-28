import type { Source } from '@/types';
import { assertObjectType, queryElement } from '@/utils';
import './sources.css';

class Sources {
  public draw(data: Source[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = queryElement(document, '#sourceItemTemp', HTMLTemplateElement);

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);

      assertObjectType(sourceClone, DocumentFragment);

      queryElement(sourceClone, '.source__item-name', HTMLElement).textContent = item.name;
      queryElement(sourceClone, '.source__item', HTMLElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    queryElement(document, '.sources', HTMLElement).replaceChildren();
    queryElement(document, '.sources', HTMLElement).append(fragment);
  }
}

export default Sources;
