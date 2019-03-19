import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileManagerModule } from './file-manager/file-manager.module';
import { DialogModule } from './dialog/dialog.module';
import { ContextMenuModule } from './context-menu/context-menu.module';
import { StepperModule } from './stepper/stepper.module';
import { CanvasModule } from './canvas/canvas.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule,
    DialogModule,
    ContextMenuModule,
    StepperModule,
    FormsModule,
    CanvasModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
