import { Component, OnInit } from '@angular/core';
import { ConfigService } from './core/services/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DummyJSON';
  isApiUp: boolean = false;
  
  constructor(private readonly configService: ConfigService) {}
  
  ngOnInit(): void {
    this.checkApiStatus();
  }

  checkApiStatus(): void {
    this.configService.checkApiStatus().subscribe({
      next: response => { this.isApiUp = response.status === 'ok' },
      error: error => { alert(`La API ha dejado de funcionar: ${error}`) }
    })
  }

  
}
