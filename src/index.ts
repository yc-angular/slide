import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideDirective } from './directive';

export * from './directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlideDirective,
  ],
  exports: [
    SlideDirective,
  ],
})
export class SlideModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SlideModule,
    };
  }
}
