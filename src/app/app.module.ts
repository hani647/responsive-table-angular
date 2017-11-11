import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveTableComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class TestComponent { }
