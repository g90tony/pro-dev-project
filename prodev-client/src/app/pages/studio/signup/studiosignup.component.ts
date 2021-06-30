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
  registerFrom: FormGroup;

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
    this.registerFrom = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.returnURI = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.registerFrom.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerFrom.invalid) {
      return null;
    }

    this.loading = true;
    this.authenticator
      .register(
        this.form.username.value,
        this.form.email.value,
        '2',
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
