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

// Animation Effects
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {...scrollRevealOption});
ScrollReveal().reveal(".header__container form", {...scrollRevealOption, delay: 500});
ScrollReveal().reveal(".header__container img", {...scrollRevealOption, delay: 1000});
ScrollReveal().reveal(".range__card", {duration: 1000, interval: 500});
ScrollReveal().reveal(".location__image img", {...scrollRevealOption, origin: "right"});
ScrollReveal().reveal(".location__content .section__header", {...scrollRevealOption, delay: 500});
ScrollReveal().reveal(".location__content p", {...scrollRevealOption, delay: 1000});
ScrollReveal().reveal(".location__content .location__btn", {...scrollRevealOption, delay: 1500});
ScrollReveal().reveal(".story__card", {...scrollRevealOption, interval: 500});
ScrollReveal().reveal(".download__image img", {...scrollRevealOption, origin: "right"});
ScrollReveal().reveal(".download__content .section__header", {...scrollRevealOption, delay: 500});
ScrollReveal().reveal(".download__links", {...scrollRevealOption, delay: 1000});

// Banner Animation
const banner = document.querySelector(".banner__wrapper");
if (banner) {
  const bannerContent = Array.from(banner.children);
  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
  });
}

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
  const featuredSwiper = new Swiper('.product-carousel .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  });
});

  // Product Details Modal
  const productLinks = document.querySelectorAll('.product-link');
  if (productLinks.length > 0) {
    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.className = 'product-details-container';
    document.body.appendChild(productDetailsContainer);

    const products = {
      camera: {
        title: "Canon EOS R6 Mirrorless Camera",
        price: "$195/day",
        description: "Professional mirrorless camera with 20MP sensor, 4K video, and advanced autofocus system.",
        specs: [
          "20.1MP Full-Frame CMOS Sensor",
          "4K UHD Video at 60fps",
          "Dual Pixel CMOS AF II",
          "5-axis In-body Stabilization",
          "Weather-sealed body"
        ],
        image: "assets/image/CAMER.webp" // Fixed typo in "assets"
      },
      // ... other products
    };

    function showProductDetails(productId) {
      const product = products[productId];
      if (!product) return;
      
      productDetailsContainer.innerHTML = `
        <div class="product-details-overlay"></div>
        <div class="product-details-modal">
          <button class="close-product-details">&times;</button>
          <div class="product-details-content">
            <div class="product-image">
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
              <h2>${product.title}</h2>
              <div class="product-price">${product.price}</div>
              <p class="product-description">${product.description}</p>
              <h3>Specifications:</h3>
              <ul class="product-specs">
                ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
              </ul>
              <div class="product-actions">
                <button class="btn rent-now">Rent Now</button>
                <button class="btn add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      productDetailsContainer.style.display = 'block';
      
      document.querySelector('.close-product-details')?.addEventListener('click', () => {
        productDetailsContainer.style.display = 'none';
      });
      
      document.querySelector('.product-details-overlay')?.addEventListener('click', () => {
        productDetailsContainer.style.display = 'none';
      });
    }

    productLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = link.getAttribute('data-product') || 
                         link.href.match(/id=([^&]+)/)?.[1];
        if (productId) showProductDetails(productId);
      });
    });
  }
