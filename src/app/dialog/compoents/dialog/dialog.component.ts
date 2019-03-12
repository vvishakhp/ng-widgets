import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef, ElementRef } from '@angular/core';
import { DialogOptions, DialogButton } from '../../dialog-options';
import { CreateComponentService } from 'src/app/component-creator/services/create-component.service';

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

  @ViewChild('dlg', { read: ElementRef })
  private dlg: ElementRef;

  contentCompoent: ComponentRef<T>;

  closeCallback: () => void;
  showBackdrop = true;

  constructor(private componetCreator: CreateComponentService) { }

  ngOnInit() {
  }

  async invokeClose() {
    return new Promise((resolve, reject) => {
      if (open) {
        const div = (this.dlg.nativeElement as HTMLDivElement);
        const animEnd = () => {
          this.closeCallback();
          resolve();
        };
        div.addEventListener('webkitAnimationEnd', animEnd);
        div.addEventListener('animationend', animEnd);
        this.open = false;
      }
    });
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
    btn.function();
  }

  backdropClick(ev: MouseEvent) {
    if (!this.options.isModel && (ev.target as HTMLElement).classList.contains('dlg-backdrop')) {
      this.invokeClose();
    }
  }
}
