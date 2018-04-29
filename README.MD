# @yca/slide

## Intro

angular slideUp/slideDown directive.

demo: [https://stackblitz.com/edit/yca-slide](https://stackblitz.com/edit/yca-slide)

## Installation

To install this library, run:

```bash
$ npm install @yca/slide --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @yca/slide
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SlideModule } from '@yca/slide';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    SlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<div [ycaSlide]="show" [speed]="0.2">
  <h1>Hello World!</h1>
</div>
<button (click)="show=!show">click me</button>
```

## Inputs
```ts
@Input() ycaSlide: boolean;
@Input() transitionTimingFunction: string = 'ease-in-out';
@Input() speed: number = 1; // px per ms
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)
