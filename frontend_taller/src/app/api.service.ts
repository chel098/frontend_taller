// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cliente } from './models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) { }

  getClientList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ClientList`);
  }

  getAddClient(newclient: any){
    const url = `${this.apiUrl}/AddClient`;
    console.log(url);
    return this.http.post<cliente>(url, newclient);
  }
  

  deleteClient(CC: number): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiUrl}/DeleteClien/${CC}`);
  //  return this.http.delete<any[]>(`${this.apiUrl}/DeleteClien/${CC}`,{params: {CC: CC.toString()}});
  
  }


}
