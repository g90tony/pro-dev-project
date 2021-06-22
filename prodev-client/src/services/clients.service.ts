import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { SearchComponent } from './app/search/search.component';
import { Clients } from 'src/app/module/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: Clients[] = [];
  _URL = '';
  token = '';

  constructor(private http: HttpClient) { }

  searchClients(searchTerm: string) {
    interface ApiResponse {
      
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.clients = [];
      this.http.get<ApiResponse>(this._URL + searchTerm + this.token).toPromise().then((results) => {
        this.clients.push(results);
        console.log(results);

        resolve();
      }, (err) => {
        reject();
      }
      )
    })
    return promise;
  }
}