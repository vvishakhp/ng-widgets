import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ContextMenuService } from './services/context-menu.service';
import { ComponentCreatorModule } from '../component-creator/component-creator.module';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    ComponentCreatorModule
  ], providers: [ContextMenuService],
  entryComponents: [MenuComponent, MenuItemComponent]
})
export class ContextMenuModule { }
