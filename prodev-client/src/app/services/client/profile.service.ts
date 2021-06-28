import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { ClientProfile } from '../../models/client/profile';

@Injectable({ providedIn: 'root' })
export class ClientProfileService {
  constructor(private http: HttpClient) {}

  get_profile(profile_id) {
    return this.http.get<ClientProfile>(
      `${environment.api_uri}/api/client/profile/${profile_id}`
    );
  }

  create_profile(new_profile) {
    return this.http.post<ClientProfile>(
      `${environment.api_uri}/api/client/profile/`,
      new_profile
    );
  }

  update_profile(profile_id, new_updates) {
    return this.http.put<ClientProfile>(
      `${environment.api_uri}/api/client/profile/${profile_id}`,
      new_updates
    );
  }

  delete_profile(profile_id) {
    return this.http.delete<ClientProfile>(
      `${environment.api_uri}/api/client/profile/${profile_id}`
    );
  }
}
