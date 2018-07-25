import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BillService {
public API = '//localhost:8090';
  public BILL_API = this.API + '/api';

  constructor(private http: HttpClient) { }

   getAll(): Observable<any> {
    return this.http.get(this.BILL_API + '/bills');
  }

   get(id: string) {
    return this.http.get(this.BILL_API + '/bills/' + id);
  }

  save(bill: any): Observable<any> {
    let result: Observable<Object>;
    if (bill['href']) {
      result = this.http.put(this.BILL_API + '/bill', bill);
    } else {
      result = this.http.post(this.BILL_API + '/bill', bill);
    }
     return result;
   }

    remove(id: string) {
      return this.http.delete(this.BILL_API + '/bill/' + id);
    
    }
}
