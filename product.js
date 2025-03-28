// products.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu toggle functionality (reuse from homepage2.js)
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");
  
    menuBtn.addEventListener("click", (e) => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });
  
    navLinks.addEventListener("click", (e) => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  
    // Product search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.toLowerCase();
      filterProducts(searchTerm);
    });
  
    function filterProducts(searchTerm) {
      const products = document.querySelectorAll('.product-card');
      
      products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  
    // Add click event to all "Rent Now" buttons
    document.querySelectorAll('.product-card button').forEach(button => {
      button.addEventListener('click', function() {
        // Get product details
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // In a real app, you would redirect to a checkout page or show a modal
        alert(`Added to cart: ${productName} for ${productPrice}`);
      });
    });
  });