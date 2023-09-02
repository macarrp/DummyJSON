import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
