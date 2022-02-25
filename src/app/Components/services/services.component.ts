import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      // owl carousel script
      $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
          },
        },
      });
    })
  }

}
