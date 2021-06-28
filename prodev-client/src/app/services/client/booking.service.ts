import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AdvertPost } from '../../models/studio/advert.post';

@Injectable({ providedIn: 'root' })
export class AdvertPostService {
  constructor(private http: HttpClient) {}

  create_booking(new_booking) {
    return this.http.post<AdvertPost>(
      `${environment.api_uri}/api/client-user/create-booking`,
      new_booking
    );
  }
}
