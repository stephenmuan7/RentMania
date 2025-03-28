document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Product database
    const products = {
        '1': {
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
            image: "assets/image/CAMER.webp",
            rating: 4.8,
            reviews: 24
        },
        '2': {
            title: "Sony PlayStation 5",
            price: "$85/day",
            description: "Next-gen gaming console with ultra-high speed SSD and 4K graphics.",
            specs: [
                "4K UHD Resolution",
                "120Hz Refresh Rate",
                "825GB SSD Storage",
                "Ray Tracing Support",
                "DualSense Controller"
            ],
            image: "assets/image/CONSOLE.webp",
            rating: 4.9,
            reviews: 36
        }
        // Add more products as needed
    };

    // Display product details
    if (productId && products[productId]) {
        const product = products[productId];
        const container = document.querySelector('.product-details-container');
        
        container.innerHTML = `
            <div class="product-details-modal">
                <div class="product-details-content">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <h2>${product.title}</h2>
                        <div class="product-rating">
                            <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                            <span class="review-count">(${product.reviews} reviews)</span>
                        </div>
                        <div class="product-price">${product.price}</div>
                        <p class="product-description">${product.description}</p>
                        <h3>Specifications:</h3>
                        <ul class="product-specs">
                            ${product.specs.map(spec => `<li><i class="ri-checkbox-circle-fill"></i> ${spec}</li>`).join('')}
                        </ul>
                        <div class="rental-options">
                            <h3>Rental Duration</h3>
                            <div class="duration-buttons">
                                <button class="duration-btn active" data-days="1">1 Day</button>
                                <button class="duration-btn" data-days="7">7 Days</button>
                                <button class="duration-btn" data-days="30">30 Days</button>
                            </div>
                            <div class="total-price">
                                Total: <span>${product.price}</span>
                            </div>
                        </div>
                        <div class="product-actions">
                            <button class="btn rent-now">Rent Now</button>
                            <button class="btn add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Setup duration buttons
        document.querySelectorAll('.duration-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                updateTotalPrice(product.price, this.getAttribute('data-days'));
            });
        });

        function updateTotalPrice(basePrice, days) {
            const priceNum = parseFloat(basePrice.replace(/[^0-9.]/g, ''));
            const total = (priceNum * parseInt(days)).toFixed(2);
            document.querySelector('.total-price span').textContent = `$${total}`;
        }
    } else {
        // Product not found
        document.querySelector('.product-details-container').innerHTML = `
            <div class="error-message">
                <h2>Product not found</h2>
                <a href="products.html" class="btn">Back to Products</a>
            </div>
        `;
    }

    // Add event listeners for product actions
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('rent-now')) {
            const productId = urlParams.get('id');
            const duration = document.querySelector('.duration-btn.active').getAttribute('data-days');
            alert(`Proceeding to rent product ${productId} for ${duration} days`);
            // window.location.href = `checkout.html?productId=${productId}&duration=${duration}`;
        }
        
        if (e.target.classList.contains('add-to-cart')) {
            const productId = urlParams.get('id');
            const duration = document.querySelector('.duration-btn.active').getAttribute('data-days');
            alert(`Added product ${productId} to cart for ${duration} days`);
            // Add actual cart logic here
        }
    });
});