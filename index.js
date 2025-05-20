// Demo Form Functionality
document.addEventListener('DOMContentLoaded', function() {
  const demoButton = document.getElementById('demo-button');
  const demoForm = document.getElementById('demo-form');
  const closeForm = document.getElementById('close-form');

  // Open form when demo button is clicked
  if (demoButton) {
    demoButton.addEventListener('click', function(e) {
      e.preventDefault();
      demoForm.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  }

  // Close form when close button is clicked
  if (closeForm) {
    closeForm.addEventListener('click', function() {
      demoForm.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }

  // Close form when clicking outside
  if (demoForm) {
    demoForm.addEventListener('click', function(e) {
      if (e.target === demoForm) {
        demoForm.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Founder Info Modal Functionality
  const founderInfoButton = document.getElementById('founder-info-button');
  const founderInfoModal = document.getElementById('founder-info-modal');
  const closeModal = document.getElementById('close-modal');

  if (founderInfoButton) {
    founderInfoButton.addEventListener('click', function(e) {
      e.preventDefault();
      if (founderInfoModal) {
        founderInfoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', function() {
      founderInfoModal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }

  // Close modal when clicking outside
  if (founderInfoModal) {
    founderInfoModal.addEventListener('click', function(e) {
      if (e.target === founderInfoModal) {
        founderInfoModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
