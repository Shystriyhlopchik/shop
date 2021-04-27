import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public statusForm(form: NgForm): '' | null {
    return form.status === 'VALID' ? null : '';
  }

  public sendForm(form: NgForm): void {
    console.log(form)
    // form.reset();
  }
}
