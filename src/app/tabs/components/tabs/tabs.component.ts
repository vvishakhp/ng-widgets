import { Component, OnInit, ContentChild, TemplateRef, AfterContentInit, ViewChild, ViewContainerRef, ContentChildren, QueryList, AfterContentChecked } from '@angular/core';
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
  selector: 'rpa-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentChecked, AfterContentInit {

  @ContentChild(TemplateRef) pillTemplate: TemplateRef<any>;


  @ViewChild('pills', { read: ViewContainerRef }) pillsContainer: ViewContainerRef;

  @ContentChildren(TabItemComponent) tabItems: QueryList<TabItemComponent>;

  selectedTab = 0;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.click(0);
  }

  ngAfterContentChecked() {
    const items = this.tabItems.map(i => i.data);
    this.pillsContainer.clear();
    console.log(items);
    items.forEach((i, j) => {
      const viewRef = this.pillsContainer.createEmbeddedView(this.pillTemplate, { $implicit: i });

      (viewRef.rootNodes[0] as HTMLDivElement).onclick = () => this.click(j);
    });
  }

  click(index: number) {
    this.selectedTab = index;
    if (this.tabItems) {
      this.tabItems.forEach((i, j) => {
        i.show = (j === this.selectedTab) ? true : false;
      });
    }
  }


}
