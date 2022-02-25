import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: true,
    margin:30,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplayTimeout:2000,
    autoplayHoverPause: true,
    navSpeed: 1900,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true, 
  };

  slides = [
    { name: 'REST API development' },
    { name: 'FullStack Web Development' },
    { name: 'Android Apps Development' },
    { name: 'Angular Development' },
    { name: 'Fullstack Mobile and Web Development' },
  ];
}
