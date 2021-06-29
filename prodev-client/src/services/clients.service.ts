import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { SearchComponent } from '../app/components/search/search.component';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  clients: User[] = [];
  _URL = '';
  token = '';

  constructor(private http: HttpClient) {}

  searchStudios(searchTerm: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.clients = [];
      this.http
        .get<User>(this._URL + searchTerm + this.token)
        .toPromise()
        .then(
          (results) => {
            this.clients.push(results);
            console.log(results);

            resolve();
          },
          (err) => {
            reject();
          }
        );
    });
    return promise;
  }

  creatProfile(newProfile: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.clients = [];
      this.http
        .get<User>(this._URL + newProfile + this.token)
        .toPromise()
        .then(
          (results) => {
            this.clients.push(results);
            console.log(results);

            resolve();
          },
          (err) => {
            reject();
          }
        );
    });
    return promise;
  }
}
