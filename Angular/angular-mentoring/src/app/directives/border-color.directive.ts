import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColorBinding]'
})
export class BorderColorDirective {
  @Input('appBorderColorBinding') public color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { };

  public ngOnInit() {
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.renderer.setAttribute(this.element.nativeElement, 'style', `border: 5px solid ${color};`);
  }
}
