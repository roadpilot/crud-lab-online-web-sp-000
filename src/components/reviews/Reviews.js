import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId);
    const reviewMap = filteredReviews.map((reviewText, reviewID) => {
      return <Review keyText={reviewID} review={reviewText} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {reviewMap}
      </ul>
    );
  }
};

export default Reviews;