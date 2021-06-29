export class Review {
    showReview: boolean;

    constructor(
        public text: string,
        public author: string,
        public date: Date,
        ) {
        this.showReview = false;
    }
}
