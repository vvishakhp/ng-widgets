import { Component, OnInit, Inject, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ContextMenuOptions } from '../../menu-options';

@Component({
  selector: 'rpa-context-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private cha: ChangeDetectorRef) {

  }

  ngOnInit() {

  }

}
