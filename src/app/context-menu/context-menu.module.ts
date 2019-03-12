import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ContextMenuService } from './services/context-menu.service';
import { ComponentCreatorModule } from '../component-creator/component-creator.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    ComponentCreatorModule
  ], providers: [ContextMenuService],
  entryComponents: [MenuComponent],
  exports: [MenuComponent]
})
export class ContextMenuModule { }
