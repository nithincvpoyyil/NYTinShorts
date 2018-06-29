import { Component, OnInit } from '@angular/core';
import { MenuConfigService } from '../menu.config';
import { Store, select } from '@ngrx/store';
import * as fromArticles from '../../home/store';
import { ArticleSections } from '../../home/store';
import { Back } from '../../store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuList: any[];
  selectedSection = '';
  state$ = '';

  constructor(
    private configService: MenuConfigService,
    private store: Store<fromArticles.State>
  ) {
    this.menuList = this.configService.getMenuIem();
  }

  ngOnInit() {
    this.store
      .pipe(select(fromArticles.getFilterType))
      .subscribe((filter: ArticleSections) => {
        this.selectedSection = filter;
        this.state$ = filter;
      });
  }

  onMenuItemClick(item: any) {
    const section = <fromArticles.ArticleSections>(
      fromArticles.ArticleSections[item.section]
    );
    this.store.dispatch(new fromArticles.ShowAllAction(section));
  }

  isSelectedSection(item: any) {
    return (
      item &&
      item.section &&
      this.selectedSection &&
      item.section.toLowerCase() === this.selectedSection.toLocaleLowerCase()
    );
  }

  go() {
    this.store.dispatch(new Back());
  }
}
