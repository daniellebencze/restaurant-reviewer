import React, { useState, useEffect } from "react";

function ReviewCard({review}) {
  return (
    <div className = "card">
        <div>
            {review.comment}
        </div>
    </div>
  )
}

export default ReviewCard;

