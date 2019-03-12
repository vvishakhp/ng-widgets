import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponentService } from './services/create-component.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], providers: [
    CreateComponentService
  ]
})
export class ComponentCreatorModule { }
