import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' = 'info';

  close() {
    // Remove o elemento do DOM manualmente
    const element = (document.querySelector('app-alert') as HTMLElement);
    if (element) {
      element.remove();
    }
  }
}
