import { getClosestFromEventTarget, queryElement } from '@/utils';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const languagesNode = queryElement(document, '.languages', HTMLDivElement);
    const sourcesNode = queryElement(document, '.sources', HTMLDivElement);

    languagesNode.addEventListener('click', (e) => {
      const button = getClosestFromEventTarget(e, '.languages__button');

      if (button instanceof HTMLButtonElement) {
        const sourcesOnLanguage = this.view
          .getSourcesData()
          .filter((source) => source.language === button.dataset.lang);

        setTimeout(() => {
          this.view.sources.draw(sourcesOnLanguage);
          sourcesNode.classList.add('js-sources-shown');
          sourcesNode.style.height = sourcesNode.scrollHeight + 'px';
        }, sourcesNode.classList.contains('js-sources-shown') ? 500 : 0);

        sourcesNode.classList.remove('js-sources-shown');
        sourcesNode.style.height = '';
      }
    });

    queryElement(document, '.sources', HTMLDivElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data) => this.view.drawNews(data)),
    );

    this.controller.getSources((data) => this.view.drawLanguages(data));
  }
}

export default App;
