import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'rpa-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, AfterContentInit {

  activeStep = 1;

  @ContentChildren(StepComponent)
  steps: QueryList<StepComponent>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    console.log(this.steps);
  }

  prevClick() {

  }

  nxtClick() {

  }

}
