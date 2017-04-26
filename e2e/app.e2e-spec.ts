import { ExciseClientPage } from './app.po';

describe('excise-client App', () => {
  let page: ExciseClientPage;

  beforeEach(() => {
    page = new ExciseClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
