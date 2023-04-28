import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetClass]'
})
export class SetClassDirective {
  @Input('appSetClass') set ClassNames(classObj: any){
    //console.log(classObj);

     for (let key in classObj) {
        //console.log('key: '+ key);
        //console.log('value:' + classObj[key]);
        if(classObj[key]){
            this.elementRef.nativeElement.classList.add(key);
        }
        else {
          this.elementRef.nativeElement.classList.remove(key);
        }

     }


  }
  constructor(private elementRef: ElementRef) { }

}
