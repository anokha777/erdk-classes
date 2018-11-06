import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // const mydiv = document.getElementById('download-pdf');
    // const aTag = document.createElement('a');
    // aTag.setAttribute('href', 'assets/file');
    // aTag.innerHTML = 'link text';
    // mydiv.appendChild(aTag);

  }

  downloadPdf() {
    // const link = document.createElement('a');
    // link.setAttribute('type', 'hidden');
    // link.href = 'assets/file';
    // link.download = 'path';
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
  }




}
