import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mackbook-image-info',
  templateUrl: './mackbook-image-info.component.html',
  styleUrls: ['./mackbook-image-info.component.css']
})
export class MackbookImageInfoComponent implements OnInit {
  imageUrl = '../../../assets/images/mackbook/1.jpg';
  constructor() { }

  ngOnInit() {
  }

  changeimage(slidNumber: string) {
    if (slidNumber === 'one') {
      this.imageUrl = '../../../assets/images/mackbook/1.jpg';
    } else if (slidNumber === 'two') {
      this.imageUrl = '../../../assets/images/mackbook/erdk-banner.jpg';
    } else {
      this.imageUrl = '../../../assets/images/mackbook/2.jpg';
    }

     }

}
