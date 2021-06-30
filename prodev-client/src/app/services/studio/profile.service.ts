import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { StudioProfile } from '../../models/studio/profile';

@Injectable({ providedIn: 'root' })
export class StudioProfileService {
  constructor(private http: HttpClient) {}

  get_profile(profile_id) {
    return this.http.get<StudioProfile>(
      `${environment.api_uri}/api/client/profile/${profile_id}`
    );
  }

  create_profile(new_profile) {
    return this.http.post<StudioProfile>(
      `${environment.api_uri}/api/client/profile/`,
      new_profile
    );
  }

  update_profile(profile_id, new_updates) {
    return this.http.put<StudioProfile>(
      `${environment.api_uri}/api/client/profile/${profile_id}`,
      new_updates
    );
  }

  delete_profile(profile_id) {
    return this.http.delete<StudioProfile>(
      `${environment.api_uri}/api/client/profile/${profile_id}`
    );
  }
}
