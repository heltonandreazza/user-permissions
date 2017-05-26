import { UserPermissionsPage } from './app.po';

describe('user-permissions App', () => {
  let page: UserPermissionsPage;

  beforeEach(() => {
    page = new UserPermissionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
