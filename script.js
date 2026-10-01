const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  if (!button) return;
  button.addEventListener("click", () => {
    faqItems.forEach((faq) => faq.classList.remove("active"));
    item.classList.add("active");
  });
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const recipient = "ayodeleayomide484@gmail.com";
    const subject = `New client enquiry from ${formData.get("Name")}`;
    const body = [
      `Name: ${formData.get("Name")}`,
      `Email: ${formData.get("Email")}`,
      `Project type: ${formData.get("Project type")}`,
      "",
      "Goals and message:",
      formData.get("Message")
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    formStatus.textContent = "Your email app is opening with the enquiry details ready to send.";
  });
  }
