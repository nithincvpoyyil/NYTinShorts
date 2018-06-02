import { NavmenuModule } from './navmenu.module';

describe('NavmenuModule', () => {
  let navmenuModule: NavmenuModule;

  beforeEach(() => {
    navmenuModule = new NavmenuModule();
  });

  it('should create an instance', () => {
    expect(navmenuModule).toBeTruthy();
  });
});
