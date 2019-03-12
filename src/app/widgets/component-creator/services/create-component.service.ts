
import {
  Injectable, ComponentRef, Type, ViewContainerRef, Injector,
  ComponentFactoryResolver, ApplicationRef, EmbeddedViewRef
} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CreateComponentService {

  constructor(private compoentFactory: ComponentFactoryResolver, private defaultInjector: Injector,
    private appRef: ApplicationRef) { }

  public createComponent<T>(options: {
    component: Type<T>,
    viewcontainerRef?: ViewContainerRef,
    injector?: Injector
  }): ComponentRef<T> {
    const factory = this.compoentFactory.resolveComponentFactory(options.component)
    if (options.viewcontainerRef) {
      // ViewContainer is provided. Create component inside the viewcontainer

      return options.viewcontainerRef.createComponent(factory);
    } else {
      // View container is not provided. Create component inside 
      const injector = options.injector || this.defaultInjector;
      const comRef = factory.create(injector);
      this.appRef.attachView(comRef.hostView);
      document.body.appendChild(this._getComponentRootNode(comRef));
      return comRef;
    }
  }

  public removeComponent(comRef: ComponentRef<any>) {
    this._getComponentRootNode(comRef).remove();
    this.appRef.detachView(comRef.hostView);
    comRef.destroy();
    comRef = null;
  }

  private _getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}
