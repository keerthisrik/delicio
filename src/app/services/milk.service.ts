import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilkService {

  private baseurl = "assets/milk.json";

  constructor(private http: HttpClient) { }
  getall(): Observable<any[]> {
    return this.http.get<any[]>(`${ this.baseurl }`);


}
}
