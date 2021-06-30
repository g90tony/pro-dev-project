import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Review } from '../../../models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Output() myData = new EventEmitter();

  constructor() {}

  public upvote: true;
  reviews: Review[] = [];

  addNewReview(review) {
    review.date = new Date(review.date);
  }

  ngOnInit(): void {}
}
