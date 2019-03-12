import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './compoents/dialog/dialog.component';
import { ComponentCreatorModule } from '../component-creator/component-creator.module';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    ComponentCreatorModule
  ], entryComponents: [DialogComponent]
})
export class DialogModule { }
