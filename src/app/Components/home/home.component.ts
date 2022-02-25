import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core'; 
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
     
      // typing text animation script
      var typed = new Typed('.typing', {
        strings: [
          'a Java Developer',
          'an Android Developer',
          'a Javascript Developer',
          'an Angular Developer',
          'a Fullstack Mobile and Web Developer',
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
      
    });
  }

}
