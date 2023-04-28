import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  //@Input() color= 'red';
  @Input('appClass') set backgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }


  //@HostBinding('style.backgroundColor') backGroundColor: string = 'yellow';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    
    //this.elementRef.nativeElement.style.backgroundColor  = this.color;

    ///console.log(this.elementRef);

    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') onMouseOver(){
    //this.elementRef.nativeElement.style.backgroundColor = 'red';
    //this.backGroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseOut(){
    //this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    //this.backGroundColor = 'yellow';
  }
}
