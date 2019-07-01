import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CraService {
public API = '//localhost:8090';
  public CRA_API = this.API + '/api';

  constructor(private http: HttpClient) { }

   getAll(): Observable<any> {
    return this.http.get(this.CRA_API + '/cras');
  }

   get(id: string) {
    return this.http.get(this.CRA_API + '/cras/' + id);
  }

  save(cra: any): Observable<any> {
    let result: Observable<Object>;
    if (cra['href']) {
      result = this.http.put(this.CRA_API + '/cra', cra);
    } else {
      result = this.http.post(this.CRA_API + '/cra', cra);
    }
     return result;
   }

    remove(id: string) {
      return this.http.delete(this.CRA_API + '/cra/' + id);
    
    }

}




 

  

  