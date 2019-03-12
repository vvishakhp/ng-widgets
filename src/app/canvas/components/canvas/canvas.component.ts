import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'rpa-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  @ViewChild('connectorContainer', { read: ViewContainerRef })
  connectorContainer: ViewContainerRef;

  @ViewChild('componetContainer', { read: ViewContainerRef })
  componetContainer: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }

}
