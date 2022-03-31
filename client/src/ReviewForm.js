import React, { useState, useEffect } from "react";

function ReviewForm() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      // name,
      comment,
    };

    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
    console.log(newReview);
  };

  return (
     <div>
       <h2>Add A Review</h2>
      < form onSubmit={handleSubmit}>
        {/* <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Restaurant name"
        /> */}
        <input
          onChange={(e) => setComment(e.target.value)}
          type="text"
          name="comment"
          placeholder="Write review"
        />
        <button type="submit">Add Review</button>
      </form>

    </div>
  )
}

export default ReviewForm;
