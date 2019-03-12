import { Injectable, ComponentRef } from '@angular/core';
import { CreateComponentService } from '../../component-creator/services/create-component.service';
import { MenuComponent } from '../components/menu/menu.component';
import { ContextMenuOptions } from '../menu-options';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  menus: Array<ComponentRef<MenuComponent>> = [];

  constructor(private componentCreator: CreateComponentService) {

  }

  public showMenu(event: MouseEvent, menuOptions: ContextMenuOptions, subMenu: boolean = false) {
    if (!subMenu && this.menus.length > 0) {
      this.menus.reverse().forEach(menu => {
        this.componentCreator.removeComponent(menu);
        menu = null;
      });
      this.menus = [];
    }
    const menuRef = this.componentCreator.createComponent({
      component: MenuComponent
    });
    this.menus.push(menuRef);
  }

  closeMenu(all: boolean = false) {
    this.menus.reverse().forEach(menu => {
      this.componentCreator.removeComponent(menu);
      menu = null;
    });
  }
}
