import { SocialmediaAnalysisUiPage } from './app.po';

describe('socialmedia-analysis-ui App', () => {
  let page: SocialmediaAnalysisUiPage;

  beforeEach(() => {
    page = new SocialmediaAnalysisUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
