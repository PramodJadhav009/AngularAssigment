import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  registrationForm!: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      fullName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      terms: new FormControl(false)
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
