import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNameResponse]'
})
export class NameResponseDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Sélectionner tous les boutons radio dans le document
    
    const lis = this.el.nativeElement.querySelectorAll('li');
    let i=0
    lis.forEach(
      (li: any) =>{
        let letter = String.fromCharCode('a'.charCodeAt(0) + (i)) + ". "
        li.lastChild.nodeValue = letter + li.lastChild.nodeValue
        i++
      }
    )
  }
}
