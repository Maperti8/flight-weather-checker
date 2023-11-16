// opmet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpmetService {
  private opmetQueryUrl = 'https://ogcie.iblsoft.com/ria/opmetquery';

  constructor(private http: HttpClient) {}

  generateBriefing(briefingObject: any): Observable<any> {
    return this.http.post(this.opmetQueryUrl, briefingObject);
  }
}
