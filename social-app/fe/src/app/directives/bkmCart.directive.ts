import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
  selector: "[bkmCart]"
})
export class BkmCartDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    renderer.setElementStyle(el.nativeElement, "backgroundColor", "red");
  }
}
