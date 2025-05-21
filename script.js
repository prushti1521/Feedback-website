// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Email format validation function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const rating = document.querySelector("#rating").value;
    const message = document.querySelector("#message").value.trim();

    // Simple validation
    if (!name || !email || !rating || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Email format validation
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show success message
    alert("Thank you for your feedback!");

    // Reset the form
    form.reset();
  });
});

// Add this to the bottom of script.js
const loadFeedbacks = async () => {
  try {
    const res = await fetch("http://localhost:5000/feedback");
    const data = await res.json();

    const listContainer = document.getElementById("feedback-list");
    listContainer.innerHTML = "";

    data.forEach((fb) => {
      const div = document.createElement("div");
      div.className = "border p-4 rounded-lg bg-gray-50";
      div.innerHTML = `
        <p><strong>Name:</strong> ${fb.name}</p>
        <p><strong>Email:</strong> ${fb.email}</p>
        <p><strong>Rating:</strong> ${fb.rating}</p>
        <p><strong>Message:</strong> ${fb.message}</p>
      `;
      listContainer.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading feedbacks:", err);
  }
};

// Load feedbacks on page load
document.addEventListener("DOMContentLoaded", () => {
  loadFeedbacks();
});




if (response.ok) {
  alert("Feedback submitted successfully!");
  form.reset();
  loadFeedbacks(); // ⬅ Refresh feedback list
}
const container = document.getElementById("feedback-list");
