document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmationMessage").textContent =
      "Thanks for reaching out! We'll get back to you soon.";
    this.reset();
  });
  