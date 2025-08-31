// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
      setActiveLink(link);
    });
  });
  
  function setActiveLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    activeLink.classList.add('active');
  }
  
  // Dark mode toggle
  const toggleBtn = document.getElementById('darkModeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  });
  
  // Contact form submission (simple alert for now)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
  
  // Google Maps function (replace with actual location)
  function initMap() {
    const location = { lat: 40.7128, lng: -74.006 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: location
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
  