import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
@Input('appColor') highlightColor:string;
private originalColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    this.highlightColor = '';
    this.originalColor = this.elementRef.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.highlightColor);

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'backgroundColor');

  }

}
