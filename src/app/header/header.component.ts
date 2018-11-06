import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMainmenuExpanded = false;
  isSubmenuAboutExpanded = false;
  isSubmenuAcademicsExpanded = false;
  isSubmenuCampusLifeExpanded = false;
  constructor() { }

  ngOnInit() {
  }

  expandFunction() {
    this.isMainmenuExpanded = !this.isMainmenuExpanded;
    const shand = document.getElementsByClassName('menuzord-menu') as HTMLCollectionOf<HTMLElement>;
    if (this.isMainmenuExpanded) {
      shand[0].style.display = 'block';
    } else {
      shand[0].style.display = 'none';
    }
  }

  submenuExpandFunction(submenuName: string) {
    const shand = document.getElementsByClassName('dropdown') as HTMLCollectionOf<HTMLElement>;
    if (submenuName === 'About') {
      this.isSubmenuAboutExpanded = !this.isSubmenuAboutExpanded;
      if (this.isSubmenuAboutExpanded) {
        shand[0].style.display = 'block';
        shand[1].style.display = 'none';
        shand[2].style.display = 'none';
        shand[0].style.width = '100%';
      } else {
        shand[0].style.display = 'none';
        shand[1].style.display = 'none';
        shand[2].style.display = 'none';
      }
    } if (submenuName === 'Academics') {
        this.isSubmenuAcademicsExpanded = !this.isSubmenuAcademicsExpanded;
        if (this.isSubmenuAcademicsExpanded) {
          shand[0].style.display = 'none';
          shand[1].style.display = 'block';
          shand[2].style.display = 'none';
          shand[1].style.width = '100%';
        } else {
          shand[0].style.display = 'none';
          shand[1].style.display = 'none';
          shand[2].style.display = 'none';
        }

    } if (submenuName === 'Campus Life') {
      this.isSubmenuCampusLifeExpanded = !this.isSubmenuCampusLifeExpanded;
        if (this.isSubmenuCampusLifeExpanded) {
          shand[0].style.display = 'none';
          shand[1].style.display = 'none';
          shand[2].style.display = 'block';
          shand[2].style.width = '100%';
        } else {
          shand[0].style.display = 'none';
          shand[1].style.display = 'none';
          shand[2].style.display = 'none';
        }
    }
  }

}
