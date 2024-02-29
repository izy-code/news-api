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
    queryElement(document, '.languages', HTMLDivElement).addEventListener('click', (e) => {
      const button = getClosestFromEventTarget(e, '.languages__button');

      if (button instanceof HTMLButtonElement) {
        const sourcesOnLanguage = this.view
          .getSourcesData()
          .filter((source) => source.language === button.dataset.lang);

        this.view.sources.draw(sourcesOnLanguage);
      }
    });

    queryElement(document, '.sources', HTMLDivElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data) => this.view.drawNews(data)),
    );

    this.controller.burger.initBurger();

    this.controller.getSources((data) => this.view.drawLanguages(data));
  }
}

export default App;
