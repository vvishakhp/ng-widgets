import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCreatorModule } from '../component-creator/component-creator.module';
import { StepComponent } from './components/step/step.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [StepperComponent, StepComponent],
  imports: [
    CommonModule,
    ComponentCreatorModule
  ], exports: [StepperComponent, StepComponent]
})
export class StepperModule { }
