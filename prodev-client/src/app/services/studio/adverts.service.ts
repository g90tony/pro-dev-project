import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AdvertPost } from '../../models/studio/advert.post';

@Injectable({ providedIn: 'root' })
export class AdvertPostService {
  constructor(private http: HttpClient) {}

  get_post(profile_id) {
    return this.http.get<AdvertPost>(
      `${environment.api_uri}/api/studio/advert-post/${profile_id}`
    );
  }

  create_post(new_post) {
    return this.http.post<AdvertPost>(
      `${environment.api_uri}/api/studio/advert-post/`,
      new_post
    );
  }

  update_post(post_id, new_updates) {
    return this.http.put<AdvertPost>(
      `${environment.api_uri}/api/studio/advert-post/${post_id}`,
      new_updates
    );
  }

  delete_post(profile_id) {
    return this.http.delete<AdvertPost>(
      `${environment.api_uri}/api/studio/advert-post/${profile_id}`
    );
  }
}
