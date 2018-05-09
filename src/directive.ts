import { Directive, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ycaSlide]',
  exportAs: 'ycaSlide',
})
export class SlideDirective implements OnChanges {
  @Input() ycaSlide: boolean;
  @Input() transitionTimingFunction: string = 'ease-in-out';
  @Input() speed: number = 1;
  @Input() wait: number = 0;
  htmlElement: HTMLElement;
  scrollHeight: number;
  init: boolean;

  constructor(private el: ElementRef) {
    setTimeout(() => {
      this.htmlElement = this.el.nativeElement;
      this.htmlElement.style.overflow = 'hidden';
      if (!this.ycaSlide) {
        this.htmlElement.style.height = '0px';
        this.scrollHeight = 0;
      } else {
        this.htmlElement.style.height = 'auto';
        this.scrollHeight = this.htmlElement.scrollHeight;
      }
      this.init = true;
    }, this.wait);
  }

  ready() {
    return new Promise(resolve => {
      const wait = () => {
        if(this.init) resolve();
        else setTimeout(() => {
          wait();
        }, 100);
      };
      wait();
    });
  }

  async ngOnChanges(changes: SimpleChanges) {
    await this.ready();
    if (changes.ycaSlide.currentValue) {
      this.slideDown();
    } else {
      this.slideUp();
    }
  }

  slideDown() {
    const oldScrollHeight = this.scrollHeight;
    this.htmlElement.style.height = 'auto';
    this.scrollHeight = this.htmlElement.scrollHeight;
    const duration = (this.scrollHeight - oldScrollHeight) / this.speed;
    this.htmlElement.style.transition = `height ${duration + 'ms'} ${this.transitionTimingFunction}`;
    this.htmlElement.style.height = oldScrollHeight + 'px';
    setTimeout(() => {
      this.htmlElement.style.height = this.scrollHeight + 'px';
      setTimeout(() => {
        this.htmlElement.style.height = 'auto';
      }, duration);
    });
  }

  slideUp() {
    const oldScrollHeight = this.scrollHeight;
    this.scrollHeight = 0;
    this.htmlElement.style.height = oldScrollHeight + 'px';
    const duration = oldScrollHeight / this.speed + 'ms';
    this.htmlElement.style.transition = `height ${duration} ${this.transitionTimingFunction}`;
    setTimeout(() => {
      this.htmlElement.style.height = '0px';
    });
  }
}
