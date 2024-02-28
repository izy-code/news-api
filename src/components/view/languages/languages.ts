import type { Source } from '@/types';
import { queryElement } from '@/utils';
import './languages.css';

const languageMap: { [key: string]: string } = {
  ar: 'Arabic',
  de: 'German',
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  he: 'Hebrew',
  it: 'Italian',
  nl: 'Dutch',
  no: 'Norwegian',
  pt: 'Portuguese',
  ru: 'Russian',
  sv: 'Swedish',
  ud: 'Urdu',
  zh: 'Chinese',
};

class Languages {
  public draw(data: Source[]): void {
    const uniqueLanguages = Array.from(new Set(data.map((source) => source.language)));
    const languageButtons = document.createDocumentFragment();

    uniqueLanguages.forEach((language) => {
      const button = document.createElement('button');

      button.classList.add('languages__button');
      button.setAttribute('type', 'button');
      button.textContent = languageMap[language] || language.toUpperCase();
      button.dataset.lang = language;

      languageButtons.appendChild(button);
    });

    queryElement(document, '.languages', HTMLDivElement).appendChild(languageButtons);
  }
}

export default Languages;
