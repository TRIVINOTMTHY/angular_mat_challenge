import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent],
  template: `<app-signup></app-signup>`
})
export class App {
  title = 'angular-mat-challenge';
}