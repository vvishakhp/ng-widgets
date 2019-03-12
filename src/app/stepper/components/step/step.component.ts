import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rpa-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input()
  enabled = true;

  @Input()
  compleated = false;

  @Input()
  label: string;

  constructor() { }

  ngOnInit() {
  }

}
