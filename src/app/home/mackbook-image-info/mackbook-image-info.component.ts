import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mackbook-image-info',
  templateUrl: './mackbook-image-info.component.html',
  styleUrls: ['./mackbook-image-info.component.css']
})
export class MackbookImageInfoComponent implements OnInit {
  imageUrl = 'https://ununsplash.imgix.net/photo-1417024321782-1375735f8987?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950';
  constructor() { }

  ngOnInit() {
  }

  changeimage(slidNumber: string) {
    if (slidNumber === 'one') {
      this.imageUrl = 'https://ununsplash.imgix.net/photo-1417024321782-1375735f8987?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950';
    } else if (slidNumber === 'two') {
      this.imageUrl = 'https://unsplash.imgix.net/uploads/1411724908903377d4696/2e9b0cb2?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950';
    } else {
      this.imageUrl = 'https://ununsplash.imgix.net/photo-1422479516648-9b1f0b6e8da8?dpr=2&fit=crop&fm=jpg&h=650&q=75&w=950';
    }

     }

}
