import { NgJestPage } from './app.po';
import { browser } from 'protractor';

describe('ng-jest App', () => {
  let page: NgJestPage;

  beforeEach(() => {
    page = new NgJestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
