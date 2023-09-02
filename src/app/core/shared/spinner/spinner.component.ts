import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SpinnerService } from '../../services/config/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements AfterViewInit {

  constructor(
    public readonly spinnerService: SpinnerService,
    private elementRef: ElementRef) 
    { }
  
  ngAfterViewInit() {
    // this.elementRef.nativeElement.
    //   ownerDocument.body.style.backgroundColor = 'rgba(79, 75, 75, 0.7)';
  }
}
