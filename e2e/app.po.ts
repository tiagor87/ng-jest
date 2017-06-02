import { browser, by, element } from 'protractor';

export class NgJestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTourOfHeroesLink() {
    return element(by.tagName('a')[0]);
  }
}
