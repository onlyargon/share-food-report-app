import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSalesReport(){
    var obj = {};
    return this.http.post('https://share-food-api.herokuapp.com/report/get-month-end-sales', obj)
  }
}
