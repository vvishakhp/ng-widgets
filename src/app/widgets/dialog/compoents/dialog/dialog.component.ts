import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef } from '@angular/core';
import { DialogOptions, DialogButton } from '../../dialog-options';
import { CreateComponentService } from 'src/app/widgets/component-creator/services/create-component.service';
import { delay } from 'q';

@Component({
  selector: 'rpa-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent<T> implements OnInit, AfterViewInit {


  open = true;
  options: DialogOptions<T>;

  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  contentCompoent: ComponentRef<T>;

  closeCallback: () => void;
  showBackdrop: boolean = true;

  constructor(private componetCreator: CreateComponentService) { }

  ngOnInit() {
  }

  async close() {
    if (open) {
      this.open = false;
      await delay(500);
    }
    this.closeCallback();
  }

  ngAfterViewInit(): void {
    if (this.options.compoent) {
      this.contentCompoent = this.componetCreator.createComponent({
        component: this.options.compoent,
        viewcontainerRef: this.content
      });
    }
  }

  buttonClick(ev: MouseEvent, btn: DialogButton) {
    ev.cancelBubble = true;
    btn.function();
  }

  backdropClick() {
    if (!this.options.isModel) {
      this.close();
    }
  }
}
