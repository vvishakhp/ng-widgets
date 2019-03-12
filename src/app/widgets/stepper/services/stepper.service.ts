import { Injectable, ViewContainerRef } from '@angular/core';
import { StepperOptions, StepperRef } from '../stepper-options';
import { CreateComponentService } from '../../component-creator/services/create-component.service';
import { StepperComponent } from '../compoents/stepper/stepper.component';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor(private cmpCreator: CreateComponentService) { }

  create(options: StepperOptions): StepperRef {
    const stepperCmp = this.cmpCreator.createComponent({
      component: StepperComponent,
      viewcontainerRef: options.viewContainerRef
    });
    return null;
  }
}
