import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import '../../../assets/js/smtp.js';
import {email}from '../../../email.environment'
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}

  //bind the form, and its fields to model.
  emailForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  closeResult = '';
  name = '';
  email = '';
  subject = '';
  message = '';

  constructor(private modalService: NgbModal) {}

  // modal section
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.emailForm.reset();
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.emailForm.reset();
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onFormSubmit(): void {
    if (this.emailForm.valid) {
      console.log('Form submitted');
      console.log(this.emailForm.value);

      //get input data
      this.name = this.emailForm.get('name')?.value;
      this.email = this.emailForm.get('email')?.value;
      this.subject = this.emailForm.get('subject')?.value;
      this.message = this.emailForm.get('message')?.value;

      Email.send({
        Host: email.EmailSend.Host,
        Username: email.EmailSend.Username,
        Password: email.EmailSend.Password,
        To: email.EmailSend.To,
        From: email.EmailSend.Username,
        Subject: this.subject,
        Body: `
          <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.name} <br /> <b>Email: </b>${this.email}<br /> <b>Subject: </b>${this.subject}<br /> <b>Message:</b> <br /> ${this.message} <br><br> <b>~End of Message.~</b> `,
      }).then(() => console.log('Message sent.'));
    }
  }
}
