import { Component } from '@angular/core';
import { UiService } from '../../services/config/ui.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  constructor(public readonly uiService: UiService) { }
}
