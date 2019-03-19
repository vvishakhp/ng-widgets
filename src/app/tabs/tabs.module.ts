import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabItemComponent } from './components/tab-item/tab-item.component';

@NgModule({
  declarations: [TabsComponent, TabItemComponent],
  imports: [
    CommonModule
  ],
  exports: [TabsComponent, TabItemComponent]
})
export class TabsModule { }
