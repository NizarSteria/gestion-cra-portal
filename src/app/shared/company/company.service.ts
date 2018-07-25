import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 public API = '//localhost:8090';
  public COMPANY_API = this.API + '/api';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.COMPANY_API + '/clients');
  }

   get(id: string) {
    return this.http.get(this.COMPANY_API + '/clients/' + id);
  }

  save(company: any): Observable<any> {
    let result: Observable<Object>;
    if (company['href']) {
      result = this.http.put(this.COMPANY_API + '/client', company);
    } else {
      result = this.http.post(this.COMPANY_API + '/client', company);
    }
    return result;
  }

  remove(id: string) {
    return this.http.delete(this.COMPANY_API + '/client/' + id);
    
  }

}
