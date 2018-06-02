import { Component, OnInit } from '@angular/core';
import { MenuConfigService } from '../menu.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuList:any[];

  constructor(private configService: MenuConfigService) {
    this.menuList = configService.getMenuIem();
  }

  ngOnInit() {
  }

}
