import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpmetService {
  private apiUrl = 'https://ogcie.iblsoft.com/ria/opmetquery';

  constructor(private http: HttpClient) {}

  createBriefing(queryCriteria: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const jsonRpcRequest = {
      id: 'query01',
      method: 'query',
      params: [queryCriteria]
    };

    return this.http.post<any>(this.apiUrl, JSON.stringify(jsonRpcRequest), { headers });
  }
}
