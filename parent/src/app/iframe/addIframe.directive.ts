import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[add-iframe]'
})
export class AddIframeDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
