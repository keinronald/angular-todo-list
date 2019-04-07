import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-list';
  name: string = 'Roland';

  constructor() {
    console.log(123);
    this.changeName('Ronald');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
