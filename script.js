// ---- Navbar shadow on scroll ----
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('shadow-sm', window.scrollY > 20);
});

// ==========================================
// CONTACT FORM — EmailJS (no backend needed)
// ==========================================
emailjs.init('19z430QvgUnlXmB6T'); // Public Key

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  status.textContent = "Sending...";
  status.className = "mt-3 mb-0 small text-secondary";

  const nameVal = document.getElementById('name').value;
  const emailVal = document.getElementById('email').value;
  const messageVal = document.getElementById('message').value;

  const templateParams = {
    name: nameVal,
    from_name: nameVal,
    from_email: emailVal,
    email: emailVal,
    message: messageVal
  };

  emailjs.send('service_w15efdi', 'template_sdjlxnr', templateParams)
    .then(function () {
      status.textContent = "Message sent — I'll get back to you soon.";
      status.className = "mt-3 mb-0 small text-success fw-semibold";
      form.reset();
    })
    .catch(function (error) {
      console.error('EmailJS error:', error);
      status.textContent = "Something went wrong. Please try again.";
      status.className = "mt-3 mb-0 small text-danger fw-semibold";
    });
});