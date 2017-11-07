import { Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[italic]'
})

export class ItalicDirective{
    private fontStyle = "normal";
  constructor(){}
  @HostBinding("style.fontStyle") get getFontStyle() {
    return this.fontStyle;
  }
  @HostBinding("style.cursor") get getCursor(){
    return "pointer";
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.fontStyle = "italic";
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.fontStyle = "normal";
  }
}