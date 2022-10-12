import { Component } from '@angular/core';
import { AuthLibService } from '@flight-workspace/shared/auth-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';

  constructor(private authService: AuthLibService) {
    this.authService.login('Max', '');
  }
}
