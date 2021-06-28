import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user';

@Injectable({ providedIn: 'root' })
export class ClientProfileService {
  constructor(private http: HttpClient) {}

  get_profile() {
    return this.http.get<User>(`${environment.api_uri}/api/client/profile/`);
  }
}
