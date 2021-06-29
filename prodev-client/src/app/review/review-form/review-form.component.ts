import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/module/review';
import { Review } from '../module/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  newReview = new Review('', '', new Date());

  @Output() addReview = new EventEmitter<Review>();

  addAnotherReview() {
    this.addReview.emit(this.newReview);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
