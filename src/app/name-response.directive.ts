import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNameResponse]'
})
export class NameResponseDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Sélectionner tous les boutons radio dans le document
    
    const spans = this.el.nativeElement.querySelectorAll('span');
    let i=0
    spans.forEach(
      (span: any) =>{
        let letter = String.fromCharCode('a'.charCodeAt(0) + (i)) + ". "
        span.lastChild.nodeValue = letter + span.lastChild.nodeValue
        i++
      }
    )
  }
}
