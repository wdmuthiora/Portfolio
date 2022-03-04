import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ContactService } from 'src/app/services/contact service/contact.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //bind the form, and its fields to model.
  emailForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  sendMessage() {
    // TODO: Use EventEmitter with form value
    console.warn(this.emailForm.value);
    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button'; //default type for button is submit.
    button.style.display = 'none';

    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#confirmationModal');
    container?.appendChild(button);
    button.click();
  }
  onEmailConfirm(emailForm: FormGroup) {}
}
