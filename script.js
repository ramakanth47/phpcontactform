document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Simple validation
    if (name === "" || email === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Display thank you message
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.textContent = `Thank you, ${name}! We have received your email: ${email}.`;
    thankYouMessage.classList.remove("hidden");
    thankYouMessage.classList.add("show");

    // Optionally reset the form
    document.getElementById("contactForm").reset();
  });
