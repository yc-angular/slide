/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SlideModule }  from '@yca/slide';

@Component({
  selector: 'app',
  template: `
  <div [ycaSlide]="show" [speed]="0.2">
    <h1>Hello World!</h1>
  </div>
  <button (click)="show=!show">click me</button>
  `,
  styles: [`
  div {
    width: 100px;
    background: red;
  }
  `]
})
class AppComponent {
  show = true;
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, SlideModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
