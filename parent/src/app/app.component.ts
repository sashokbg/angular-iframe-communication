import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {IframeComponent} from "./iframe/iframe.component";
import {AddIframeDirective} from "./iframe/addIframe.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  entryComponents: [IframeComponent]
})
export class AppComponent {
  private matricule: string;

  @ViewChild(AddIframeDirective, {static: true}) container: AddIframeDirective;
  private iframe: any;
  private text: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public ngOnInit(): void {
    this.matricule = localStorage.getItem('matricule');
  }

  sendToChild(): void {
    console.log('Sending message to', this.iframe);

    this.iframe.contentWindow.postMessage(this.text, '*');
  }

  addIframe() {
    const componentFactory  = this.componentFactoryResolver.resolveComponentFactory(IframeComponent);

    console.log('Container', this.container.viewContainerRef);

    const componentRef = this.container.viewContainerRef.createComponent(componentFactory);

    this.iframe = componentRef.location.nativeElement.children[0];
  }
}
