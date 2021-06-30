import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Review } from '../../models/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent implements OnInit {
  reviewForm: FormGroup;

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

  @Output() addReview = new EventEmitter<Review>();

  addAnotherReview() {}

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      text: ['', Validators.required, Validators.minLength(10)],
      author: ['', Validators.required],
    });

    this.returnURI = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.reviewForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.reviewForm.invalid) {
      return null;
    }

    this.loading = true;
    this.authenticator
      .login(this.form.username.value, this.form.password.value)
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
