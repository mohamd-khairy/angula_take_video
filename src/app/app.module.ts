import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojsRecordComponent } from './videojs-record/videojs-record.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojsRecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
