import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rpa-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {


  @Input() data: any;

  @Input() show = false;
  constructor() { }

  ngOnInit() {
  }

}
