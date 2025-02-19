document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is loaded
  const submitReview = document.querySelector(".submit-review");
  const reviewOutputSection = document.querySelector(".user-output-section"); // Cache the output section

  submitReview.addEventListener("click", () => {
    const ratingValue = document.querySelector(".rating-select").value;
    const username = document.querySelector(".username").value;
    const userExperience = document.querySelector(".user-experience").value;

    // Input Validation (Important!)
    if (!username || !userExperience) {
      alert("Please enter both your name and review.");
      return; // Stop execution if inputs are empty
    }

    const stars = "*".repeat(ratingValue);

    const singleReviewCard = document.createElement("div");
    singleReviewCard.classList.add("single-review-card"); // Use classList for cleaner syntax

    const userDetail = document.createElement("div");
    userDetail.classList.add("single-user-detail");

    const userName = document.createElement("p");
    userName.classList.add("user-name");
    userName.textContent = username;

    const userRating = document.createElement("p");
    userRating.classList.add("user-rating");
    userRating.textContent = stars;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-review");
    deleteButton.textContent = "Delete";

    // Deleting reviews (Improved)
    deleteButton.addEventListener("click", () => {
      singleReviewCard.remove(); // Directly remove the parent card
    });

    userDetail.appendChild(userName);
    userDetail.appendChild(userRating);
    userDetail.appendChild(deleteButton);

    const userReview = document.createElement("p");
    userReview.classList.add("user-review-written");
    userReview.textContent = userExperience;

    singleReviewCard.appendChild(userDetail);
    singleReviewCard.appendChild(userReview);

    reviewOutputSection.appendChild(singleReviewCard); // Use cached output section

    // Clear form fields (Improved)
    document.querySelector(".rating-select").selectedIndex = 0; // More robust way to reset select
    document.querySelector(".username").value = "";
    document.querySelector(".user-experience").value = "";
  });
});