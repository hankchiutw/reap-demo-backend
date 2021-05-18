import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResult } from './models';
import { ProcedurePath, ResourcePath } from './request-path';

interface RequestOptions {
  body?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  reportProgress?: boolean;
}

interface ApiOptions extends RequestOptions {
  method: 'post' | 'get' | 'delete' | 'put';
  path: ProcedurePath | ResourcePath;
}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public send<T>(options: ApiOptions): Observable<T> {
    const { method, path, body, headers, params, reportProgress } = options;
    const url = `${env.apiUrl}/${path}`;
    const requestOptions = {
      body,
      params,
      headers,
      reportProgress,
      withCredentials: true,
    };
    if (reportProgress) {
      Object.assign(requestOptions, {
        observe: 'events',
      });
    }

    return this.http.request<ApiResult>(method, url, requestOptions).pipe(
      map(({ result, errorMessage }: ApiResult) => {
        if (errorMessage) {
          throw errorMessage;
        }
        return result;
      })
    );
  }

  public post<T>(
    path: ApiOptions['path'],
    options?: RequestOptions
  ): Observable<T> {
    return this.send<T>({
      method: 'post',
      path,
      ...options,
    });
  }

  public get<T>(
    path: ApiOptions['path'],
    options?: RequestOptions
  ): Observable<T> {
    return this.send<T>({
      method: 'get',
      path,
      ...options,
    });
  }
}
