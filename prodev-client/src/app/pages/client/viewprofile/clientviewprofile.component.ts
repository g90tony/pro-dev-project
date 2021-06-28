import { Component, OnInit } from '@angular/core';
import { ClientProfile } from 'src/app/models/client/profile';
import { ClientProfileService } from 'src/app/services/client/profile.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-clientviewprofile',
  templateUrl: './clientviewprofile.component.html',
  styleUrls: ['./clientviewprofile.component.css'],
})
export class ClientviewprofileComponent implements OnInit {
  user_id;

  constructor(
    private profileService: ClientProfileService,
    private authenticator: AuthenticationService
  ) {
    this.user_id = this.authenticator.currentUser;
  }
  loading = false;

  profile: ClientProfile;

  ngOnInit(): void {
    this.loading = true;
    this.profileService.get_profile(this.user_id).subscribe((profile) => {
      this.profile = profile;
    });
  }
}
