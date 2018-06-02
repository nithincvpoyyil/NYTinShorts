import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuConfigService {

    public menuItem: any[] = [{ title: 'News', icon: 'ico-home' }, {title: 'reviews' }, {title: 'create'}];
    constructor() {
    }
    getMenuIem(): any {
        return this.menuItem;
    }
}