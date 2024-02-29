import { getClosestFromEventTarget, queryElement } from '@/utils';
import './burger.css';

export default class Burger {
  private burgerButton: HTMLButtonElement;
  private burgerButtonText: HTMLSpanElement;
  private languagesNode: HTMLDivElement;
  private sourcesNode: HTMLDivElement;

  constructor() {
    this.burgerButton = queryElement(document, '.header__burger', HTMLButtonElement);
    this.burgerButtonText = queryElement(this.burgerButton, '.visually-hidden', HTMLSpanElement);
    this.languagesNode = queryElement(document.body, '.languages', HTMLDivElement);
    this.sourcesNode = queryElement(document.body, '.sources', HTMLDivElement);
  }

  private openBurgerMenu(): void {
    this.burgerButton.classList.add('js-burger-shown');
    this.languagesNode.classList.add('js-languages-shown');
    this.sourcesNode.classList.add('js-sources-shown');
    this.burgerButtonText.textContent = 'Hide languages and sources';
  }

  private closeBurgerMenu(): void {
    this.burgerButton.classList.remove('js-burger-shown');
    this.languagesNode.classList.remove('js-languages-shown');
    this.sourcesNode.classList.remove('js-sources-shown');
    this.burgerButtonText.textContent = 'Show languages and sources';
  }

  private onBurgerButtonClick = (): void => {
    if (this.burgerButton.classList.contains('js-burger-shown')) {
      this.closeBurgerMenu();
    } else {
      this.openBurgerMenu();
    }
  };

  private onSourcesClick = (e: Event): void => {
    const sourceItemNode = getClosestFromEventTarget(e, '.source__item');

    if (sourceItemNode && this.burgerButton.classList.contains('js-burger-shown')) {
      this.closeBurgerMenu();
    }
  };

  public initBurger = (): void => {
    this.burgerButton.addEventListener('click', this.onBurgerButtonClick);
    this.sourcesNode.addEventListener('click', this.onSourcesClick);
  }
}
