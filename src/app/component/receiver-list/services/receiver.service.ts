import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReceiver } from "./../receiver.interface";

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {
  private apiUrl = 'http://localhost:3000/receivers';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param param 
   * @returns 
   */
  getReceivers(param: string = '', page: string | number = 1): Observable<HttpResponse<any>> {
    let url = param ? `${this.apiUrl}?${param}&_order=asc&_page=${page}&_limit=10` : `${this.apiUrl}?_order=desc&_page=${page}&_limit=10`;
    return this.http.get(url, { observe: 'response' }); // Observe a resposta completa, incluindo o cabeçalho
  }

  /**
   * 
   * @param receiverData 
   * @returns 
   */
  updateReceiver(receiverData: IReceiver): Observable<any> {
    const url = `${this.apiUrl}/${receiverData.id}`;
    const headers = { 'Content-Type': 'application/json' };
    
    return this.http.put(url, receiverData, { headers });
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  deleteReceiver(id: string): Observable<any> {

    const url = `${this.apiUrl}/${id}`;
    const headers = { 'Content-Type': 'application/json' };
  
    return this.http.delete(url, { headers });
  }

  /**
   * 
   * @param receiverData 
   * @returns 
   */
  postReceiver(receiverData:IReceiver): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(this.apiUrl, receiverData, { headers });
  }

}
