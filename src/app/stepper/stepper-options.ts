import { Type, ViewContainerRef } from '@angular/core';
import { ComponentRef } from '@angular/core/src/render3';
import { StepperComponent } from './components/stepper/stepper.component';

export interface StepperOptions {
    steps: Array<Step<any>>;
    viewContainerRef: ViewContainerRef;
}

export interface Step<T> {
    componet: Type<T>;
    canGoForword: (componet: ComponentRef<T>) => boolean;
    canGoBackword: (componet: ComponentRef<T>) => boolean;
    visible: (componet: ComponentRef<T>) => boolean;
}

export class StepperRef {

    currentStep = 0;
    stepperCompoentRef: ComponentRef<StepperComponent>;

    constructor(options: StepperOptions, compoent: ComponentRef<StepperComponent>) {
        this.stepperCompoentRef = compoent;
    }

    getComponent(index: number) {

    }

    gotoStep(index: number) {

    }

    nextStep() {

    }

    previousStep() {

    }
}
