import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  user = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  };
}
