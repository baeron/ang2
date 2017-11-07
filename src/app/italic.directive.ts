import { Directive, Input,  HostListener, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[italic]'
})

export class ItalicDirective implements OnInit{
  @Input('italic') selectedSize = "18px";
  @Input() defaultSize = "16px";

  private fontSize : string;
  private fontStyle = "normal";

  ngOnInit(): void {
    this.fontSize = this.defaultSize;
  }

  constructor(){ }

  @HostBinding("style.fontSize") get getFontSize(){
    return this.fontSize;
  }

  @HostBinding("style.fontStyle") get getFontStyle(){
    return this.fontStyle;
  }

  @HostBinding("style.cursor") get getCursor(){
    return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter(){
      this.fontStyle = "italic";
      this.fontSize = this.selectedSize;
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.fontStyle = "normal";
    this.fontSize = this.defaultSize;
}
}