import { Directive, ElementRef, 
          Renderer2, 
          HostListener, 
          Input,
          HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('defaultColor') defaultColor ;
  @Input('newColor') newColor ;

  @HostBinding("style.backgroundColor") bgColor : string;

  @HostListener('mouseenter') mouseenter(eventdata){
    // this.renderer.setStyle(this.elementRef.nativeElement, 
    //   'background-color', this.newColor);
    this.bgColor = this.newColor;
  } 
  @HostListener('mouseleave') mouseleave(eventdata){
    // this.renderer.setStyle(this.elementRef.nativeElement, 
    //   'background-color', this.defaultColor);
      this.bgColor = this.defaultColor;
  } 
  constructor(private elementRef : ElementRef, 
            private renderer : Renderer2) { 
    //this.elementRef.nativeElement.style.backgroundColor = "green";
    //this.renderer.setStyle(this.elementRef.nativeElement, 
      //    'background-color', "aqua");
  }

}
