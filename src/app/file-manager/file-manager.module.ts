import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { ContextMenuModule } from '../context-menu/context-menu.module';

@NgModule({
  declarations: [FileManagerComponent],
  imports: [
    CommonModule,
    ContextMenuModule
  ], exports: [FileManagerComponent],
  entryComponents: [FileManagerComponent]
})
export class FileManagerModule { }
