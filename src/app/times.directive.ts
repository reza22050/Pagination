import { Directive, ViewContainerRef,  TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  @Input('appTimes') set render(time: number){
     
    for(let i= 0; i<time; i++) {
        this.vcRef.createEmbeddedView(this.templateRef,{index:i, color:'red'})
      }
  }
  constructor(private templateRef:TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
