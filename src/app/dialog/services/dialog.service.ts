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
    dlgRef.instance.closeCallback = () => this.afterClose(dlgRef);
    dlgRef.changeDetectorRef.detectChanges();
    this.dialogs.push(dlgRef);
    return dlgRef;
  }

  // Dialog calls this. cleasn up the dialog here
  async afterClose(dlgRef: ComponentRef<DialogComponent<any>>) {
    this.componentCreatror.removeComponent(dlgRef);
    const lastDlg = this.dialogs[this.dialogs.length - 1];
    if (lastDlg) {
      lastDlg.instance.showBackdrop = true;
    }
  }

  // Invokes the close on dialog. Dont need to cleen the dilaog. It will be done later
  async closeDialog() {
    const dlgRef = this.dialogs.pop();
    await dlgRef.instance.invokeClose();
  }

  async closeAll() {
    await Promise.all(this.dialogs.map(dlg => dlg.instance.invokeClose()));
  }
}
