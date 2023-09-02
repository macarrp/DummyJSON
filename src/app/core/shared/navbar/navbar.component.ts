import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tab: string = 'tab1';

  ngOnInit() { 
    this.changeActive(1); // <-- No lo esta pillando
  }

  changeActive(elementToActive: number) {
    switch (elementToActive) {
      case 1:
        this.tab = 'tab1';
        break;
      case 2:
        this.tab = 'tab2';
        break;
      case 3:
        this.tab = 'tab3';
        break;
    }
  }

  showCart(): void {
    console.log('showCart')
  }
}
