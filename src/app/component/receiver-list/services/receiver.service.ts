import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  getReceivers(param:string = ''): Observable<any> {
    let url = param ? `${this.apiUrl}?${param}` : this.apiUrl;
    return this.http.get(url);
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
