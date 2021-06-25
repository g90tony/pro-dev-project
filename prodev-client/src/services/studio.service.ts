import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { Studio } from '../app/module/studio';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  studio: Studio[] = [];
  _URL = '';
  token = '';

  constructor(private http: HttpClient) {}

  searchStudio(searchTerm: string) {
    interface ApiResponse {}

    let promise = new Promise<void>((resolve, reject) => {
      this.studio = [];
      this.http
        .get<ApiResponse>(this._URL + searchTerm + this.token)
        .toPromise()
        .then(
          (results) => {
            this.studio.push(results);
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
