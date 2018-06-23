import { Component, OnInit } from '@angular/core';
import { MenuConfigService } from '../menu.config';
import { Store } from '@ngrx/store';
import * as fromArticles from '../../home/store';
import { ShowAllAction } from '../../home/store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuList: any[];
  selectedSection = '';

  constructor(
    private configService: MenuConfigService,
    private store: Store<fromArticles.State>
  ) {
    this.menuList = this.configService.getMenuIem();
  }

  ngOnInit() {
    this.store.select('articles').subscribe((state: any) => {
      this.selectedSection = state.filter;
    });
  }

  onMenuItemClick(item: any) {
    const section = <fromArticles.ArticleSections>(
      fromArticles.ArticleSections[item.section]
    );
    this.store.dispatch(new ShowAllAction(section));
  }

  isSelectedSection(item: any) {
    if (
      item &&
      item.section &&
      this.selectedSection &&
      item.section.toLowerCase() === this.selectedSection.toLocaleLowerCase()
    ) {
      return true;
    }

    return false;
  }
}
