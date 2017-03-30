import { SsrExamplePage } from './app.po';

describe('ssr-example App', () => {
  let page: SsrExamplePage;

  beforeEach(() => {
    page = new SsrExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
