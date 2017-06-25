import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Basic} from './basic';
import {TestComponent} from './test.component';

@NgModule({
  declarations: [Basic, TestComponent],
  bootstrap: [Basic, TestComponent],
  imports: [BrowserModule],
})
export class AppModule {
}
