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
  ngOnInit(): void {}

  //bind the form, and its fields to model.
  emailForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  closeResult = '';

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
      console.log("Form submitted");
      console.log(this.emailForm.value);
    }
  }
}
