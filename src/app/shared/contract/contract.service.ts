import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  public API = '//localhost:8090';
  public CONTRACT_API = this.API + '/api';

  constructor(private http: HttpClient) { }

	getAll(): Observable<any> {
	    return this.http.get(this.CONTRACT_API + '/contrats');
	}

	get(id: string) {
	    return this.http.get(this.CONTRACT_API + '/contrats/' + id);
	}

	save(contrat: any): Observable<any> {
	    let result: Observable<Object>;
	    if (contrat['href']) {
	      result = this.http.put(this.CONTRACT_API + '/contrat', contrat);
	    } else {
	      result = this.http.post(this.CONTRACT_API + '/contrat', contrat);
	    }
	    return result;
	}

	remove(id: string) {
	    return this.http.delete(this.CONTRACT_API + '/contrat/' + id);
	    
	}

}
