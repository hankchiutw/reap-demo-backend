import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResult } from '../models';

interface ApiProgressEvent extends HttpUserEvent<unknown>, ApiResult {}

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.reportProgress) {
      return next.handle(request).pipe(map(progressTransformer));
    }
    return next.handle(request);
  }
}

function progressTransformer(event: HttpEvent<any>): ApiProgressEvent {
  const res: ApiProgressEvent = { type: HttpEventType.User, result: null };
  res.result = { progress: -1 };
  switch (event.type) {
    case HttpEventType.Sent:
      res.result = { progress: 0 };
      break;
    case HttpEventType.UploadProgress:
      res.result = { progress: Math.round((100 * event.loaded) / event.total) };
      break;
    case HttpEventType.ResponseHeader:
    case HttpEventType.DownloadProgress:
      res.result = { progress: 100 };
      break;
    case HttpEventType.Response:
      res.result = { completed: true, body: event.body };
      break;
  }
  return res;
}
