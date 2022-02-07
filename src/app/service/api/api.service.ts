import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  response: any;

  constructor(
    private http: HttpClient
  ) { }

  post(requestBody: JSON, url: string): Promise<any> {
    return new Promise(async (resolve) => {
      let headers = new HttpHeaders()
      headers.append('Access-Control-Allow-Origin', '*')
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
      headers.append('Accept', 'application/json')
      headers.append('content-type', 'application/json')

      await this.http.post(url, requestBody, { headers: headers })
        .subscribe(response => {
          this.response = response
          resolve(this.response)
        },
          error => {
            resolve(0)
          }
        )
    })
  }

  get(url: string): Promise<any> {
    return new Promise(async (resolve) => {
      let headers = new HttpHeaders()
      headers.append('Access-Control-Allow-Origin', '*')
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
      headers.append('Accept', 'application/json')
      headers.append('content-type', 'application/json')

      await this.http.get(url, { headers: headers })
        .subscribe(response => {
          this.response = response
          resolve(this.response)
        },
          error => {
            resolve(0)
          }
        )
    })
  }
}
