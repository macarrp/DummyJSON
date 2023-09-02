import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tab: string = 'tab1';

  constructor(private readonly router: Router) { 

  }

  ngOnInit() { 
    this.selectTabAfterInit()
  }

  selectTabAfterInit() {
    // console.log(this.router)
    // console.log(this.router.url === '/productos')
    // this.changeActive(1); // Poner el numero adecuado segun la ruta
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
      case 4:
        this.tab = 'tab4';
        break;
    }
  }

  showCart(): void {
    console.log('showCart')
  }
}

