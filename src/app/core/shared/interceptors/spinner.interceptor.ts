import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { UiService } from '../../services/config/ui.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private readonly uiService: UiService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.uiService.showSpinner();
    return next.handle(req).pipe(
      finalize(() => this.uiService.hideSpinner())
    );
  }
}
