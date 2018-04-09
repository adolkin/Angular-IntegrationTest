import { IntegrationTestPage } from './app.po';

describe('integration-test App', () => {
  let page: IntegrationTestPage;

  beforeEach(() => {
    page = new IntegrationTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
