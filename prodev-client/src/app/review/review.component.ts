import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Review } from '../module/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Output() myData = new EventEmitter();
  
  reviews: Review[] = [
    new Review(
      'Amaizingly affordable prices.',
      'Abraham Lincon',
      new Date(2021, 1, 6),
    ),
    new Review(
      'Definetly the best studio I have been to in a while. Quality photos and videos.',
      'Oscar Wilde',
      new Date(2021, 2, 8),
    ),
    new Review(
      'Wonderful creativity display.',
      'Toba Beta ',
      new Date(2021, 4, 11),
    ),
    new Review(
      'Great studio. Photographer takes wonderful pictures.',
      'John Connolly',
      new Date(2021, 5, 3),
    )
  ]

  constructor() { }

  public upvote: true;

  addNewReview(review) {
    const reviewLength = this.reviews.length;
    review.date = new Date(review.date);
    this.reviews.push(review);
  }

  ngOnInit(): void {
  }

}
