import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-studiosignup',
  templateUrl: './studiosignup.component.html',
  styleUrls: ['./studiosignup.component.css'],
})
export class StudiosignupComponent implements OnInit {
  loginForm: FormGroup;

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
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.pattern('^[a-zA-Z3*$')],
      email: ['', Validators.required],
      user_type: ['', Validators.required, Validators.maxLength(1)],
      password: ['', Validators.required, Validators.minLength(6)],
    });

    this.returnURI = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return null;
    }

    this.loading = true;
    this.authenticator
      .register(
        this.form.username.value,
        this.form.email.value,
        this.form.user_type.value,
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
