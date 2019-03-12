import { Injectable, ComponentRef } from '@angular/core';
import { CreateComponentService } from '../../component-creator/services/create-component.service';
import { DialogOptions } from '../dialog-options';
import { DialogComponent } from '../compoents/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialogs: Array<ComponentRef<DialogComponent<any>>> = [];

  constructor(private componentCreatror: CreateComponentService) { }

  showDialog(options: DialogOptions<any>) {
    const dlgRef = this.componentCreatror.createComponent({
      component: DialogComponent
    });
    this.dialogs.forEach(dlg => dlg.instance.showBackdrop = false);
    dlgRef.instance.showBackdrop = true;
    dlgRef.instance.options = options;
    dlgRef.instance.closeCallback = this.afterClose;
    dlgRef.changeDetectorRef.detectChanges();
    this.dialogs.push(dlgRef);
    return dlgRef;
  }

  async afterClose() {
    const last = this.dialogs[this.dialogs.length - 1];
    if (last) {
      last.instance.showBackdrop = true;
    }
  }

  async closeDialog() {
    let dlgRef = this.dialogs.pop();
    dlgRef.instance.close();
    this.componentCreatror.removeComponent(dlgRef);
  }
}
