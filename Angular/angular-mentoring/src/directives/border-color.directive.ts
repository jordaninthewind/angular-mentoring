import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorderColorBinding]'
})
export class BorderColorDirective {
  @Input('appBorderColorBinding') public color: string;
  constructor(private element: ElementRef) { };

  public ngOnInit() {
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.border = `5px solid ${color}`;
  }
}
