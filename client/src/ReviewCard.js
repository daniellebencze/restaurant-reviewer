import React, { useState, useEffect } from "react";

function ReviewCard({review}) {
  return (
    <div className = "review_card">
        <div>
            {review.comment}
        </div>
    </div>
  )
}

export default ReviewCard;

