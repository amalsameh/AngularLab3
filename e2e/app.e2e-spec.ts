import { AngularLab3Page } from './app.po';

describe('angular-lab3 App', () => {
  let page: AngularLab3Page;

  beforeEach(() => {
    page = new AngularLab3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
