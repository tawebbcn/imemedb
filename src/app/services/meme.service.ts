import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MemeService {
  private baseUrl = 'http://localhost:3000/meme';

  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }

  create(data: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}`, data, options)
      .toPromise();
  }

  delete(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }
}
