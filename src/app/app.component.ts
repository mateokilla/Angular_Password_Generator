import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';

  onButtonClick() {
    this.password = 'my ass pain and a shat myself'
  }
}
