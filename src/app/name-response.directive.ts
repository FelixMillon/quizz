import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNameResponse]'
})
export class NameResponseDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const spans: HTMLSpanElement[] = this.el.nativeElement.querySelectorAll('span');
    let i=0
    spans.forEach(
      (span: HTMLSpanElement) =>{
        if(span.lastChild){
          let letter = String.fromCharCode('a'.charCodeAt(0) + (i)) + ". "
          span.lastChild.nodeValue = letter + span.lastChild.nodeValue
          i++
        }
      }
    )
  }
}
