import { Injectable, ApplicationRef, ComponentRef, createComponent, EnvironmentInjector } from '@angular/core';
import { AlertComponent } from '../../alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  private showAlert(message: string, type: 'success' | 'error' | 'info') {
    // Cria dinamicamente o componente
    const componentRef: ComponentRef<AlertComponent> = createComponent(AlertComponent, {
      environmentInjector: this.injector
    });

    // Define os inputs
    componentRef.instance.message = message;
    componentRef.instance.type = type;

    // Injeta na árvore do Angular
    this.appRef.attachView(componentRef.hostView);

    // Coloca no DOM
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Fecha automático
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 3000);
  }

  success(message: string) {
    this.showAlert(message, 'success');
  }

  error(message: string) {
    this.showAlert(message, 'error');
  }

  info(message: string) {
    this.showAlert(message, 'info');
  }
}
