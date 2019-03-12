import { Component } from '@angular/core';
import { ContextMenuService } from './context-menu/services/context-menu.service';
import { DialogService } from './dialog/services/dialog.service';
import { FileManagerComponent } from './file-manager/components/file-manager/file-manager.component';
import { DialogOptions } from './dialog/dialog-options';
@Component({
  selector: 'rpa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workflow2';

  constructor(private menuService: ContextMenuService, private dialogService: DialogService) {

  }

  showMenu(ev: MouseEvent) {
    ev.preventDefault();
    this.menuService.showMenu(ev, {
      items: [
        {
          label: 'Test 1'
        }, {
          label: 'Test 2'
        }
      ]
    });
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
    };
    this.dialogService.showDialog(dlgOptions());
  }
}
