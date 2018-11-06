import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToTop() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    console.log(document.documentElement);
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
