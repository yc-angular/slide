import { Directive, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ycaSlide]'
})
export class SlideDirective implements OnChanges {
  @Input() ycaSlide: boolean;
  @Input() firstAnimate: boolean = false;
  @Input() transitionTimingFunction: string = 'ease-in-out';
  @Input() speed: number = 1;
  htmlElement: HTMLElement;
  scrollHeight: number;

  constructor(private el: ElementRef) {
    this.htmlElement = this.el.nativeElement;
    this.htmlElement.style.overflow = 'hidden';
    this.htmlElement.style.height = '0px';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.htmlElement.style.height = 'auto';
    this.scrollHeight = this.htmlElement.scrollHeight;
    this.htmlElement.style.transition = this.generateTransition(changes);
    if (changes.ycaSlide.currentValue) {
      this.slideDown(changes);
    } else {
      this.slideUp(changes);
    }
  }

  slideDown(changes: SimpleChanges) {
    this.htmlElement.style.height = '0px';
    setTimeout(() => {
      this.htmlElement.style.height = this.scrollHeight + 'px';
    });
  }

  slideUp(changes: SimpleChanges) {
    this.htmlElement.style.height = this.scrollHeight + 'px';
    setTimeout(() => {
      this.htmlElement.style.height = '0px';
    });
  }

  generateTransition(changes: SimpleChanges) {
    if (changes.ycaSlide.firstChange && !this.firstAnimate) {
      return '';
    }
    const duration = this.scrollHeight / this.speed + 'ms';
    return `height ${duration} ${this.transitionTimingFunction}`;
  }

}
