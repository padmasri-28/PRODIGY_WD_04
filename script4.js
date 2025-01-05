// Smooth scrolling to sections
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been sent successfully!');
});
