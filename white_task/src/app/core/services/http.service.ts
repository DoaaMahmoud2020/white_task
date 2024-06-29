import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/api-end-points.constant';
import { Observable } from 'rxjs/internal/Observable';
import { IListPayload, ISinglePayload } from '@app/shared/models/payload.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _httpClient: HttpClient = inject(HttpClient);

  public getAll(params: any, apiUrl: string): Observable<any> {
    const endpointUrl = `${API_URL(apiUrl)}`;
    return this._httpClient.get<IListPayload<any>>(endpointUrl);
  }
  public getItemById(id: number, apiUrl: string): Observable<any> {
    const endpointUrl = `${API_URL(apiUrl)}/${id}`;
    return this._httpClient.get<any>(endpointUrl);
  }
}
