import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-clientsignup',
  templateUrl: './clientsignup.component.html',
  styleUrls: ['./clientsignup.component.css'],
})
export class ClientsignupComponent implements OnInit {
  registerForm: FormGroup;

  loading = false;
  submitted = false;
  returnURI = String;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticator: AuthenticationService
  ) {
    if (this.authenticator.currentUserValue) {
      this.router.navigate(['/client/feed']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.returnURI =
      this.route.snapshot.queryParams['returnUrl'] || '/client/feed';
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      console.log('Is Invalid');
      return null;
    }

    this.loading = true;
    this.authenticator
      .register(
        this.form.username.value,
        this.form.email.value,
        2,
        this.form.password.value
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate([this.returnURI]);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
