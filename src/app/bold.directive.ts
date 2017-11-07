import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective{
  constructor(
    private element: ElementRef, 
    private rendered: Renderer2
  ){
    this.rendered.setStyle(this.element.nativeElement, "cursor", "pointer");
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.setFontWeight("bold");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setFontWeight("normal");
  }

  private setFontWeight(val: string) {
    this.rendered.setStyle(this.element.nativeElement, "font-weight", val);
  }
}