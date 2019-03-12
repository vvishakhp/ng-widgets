import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './compoents/stepper/stepper.component';
import { ComponentCreatorModule } from '../component-creator/component-creator.module';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    ComponentCreatorModule
  ]
})
export class StepperModule { }
