import { Component } from '@angular/core';
import { ContextMenuService } from './widgets/context-menu/services/context-menu.service';
import { DialogService } from './widgets/dialog/services/dialog.service';
import { FileManagerComponent } from './widgets/file-manager/components/file-manager/file-manager.component';
import { DialogOptions } from './widgets/dialog/dialog-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workflow2';

  constructor(private menuService: ContextMenuService, private dialogService: DialogService) {

  }

  showMenu(ev: MouseEvent) {
    ev.preventDefault();
  }


  showDialog() {
    const dlgOptions = (title?: string): DialogOptions<FileManagerComponent> => {
      return {
        compoent: FileManagerComponent,
        enableClose: () => true,
        isModel: false,
        title: title || 'Test Dialog - This is a dialog',
        buttons: [
          { color: 'red', function: () => { console.log('Close clicked'); this.dialogService.closeDialog(); }, label: 'Close' },
          {
            color: 'red', function: () => {
              console.log('Close clicked');
              this.dialogService.showDialog(dlgOptions('New Dialog'));
            }, label: 'Open new'
          }
        ]
      };
    }
    this.dialogService.showDialog(dlgOptions());
  }
}
