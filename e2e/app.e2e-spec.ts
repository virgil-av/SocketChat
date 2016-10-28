import { App11Page } from './app.po';

describe('app-11 App', function() {
  let page: App11Page;

  beforeEach(() => {
    page = new App11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
