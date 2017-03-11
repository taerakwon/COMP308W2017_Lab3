import { Component } from '@angular/core';

// INTERPOLATION one-way data binding
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`
})

export class AppComponent  {
  title = 'COMP308W2017 - Tour of Heroes';
  hero = 'Mr Hire';
}

export class Hero {
  id: number;
  name: string;
}