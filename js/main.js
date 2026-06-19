document.addEventListener('DOMContentLoaded', () => {
    // --- Cart Counter Logic ---
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartBadge = document.getElementById('cart-badge');
    
    let cartCount = 0;

    addToCartBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            // Prevent event from bubbling up if card has a link wrapper later
            e.preventDefault(); 
            
            // Increment logic
            cartCount++;
            cartBadge.textContent = cartCount;

            // Trigger scale pop animation
            cartBadge.classList.remove('pop'); // Reset if clicked quickly
            
            // Force reflow to restart animation
            void cartBadge.offsetWidth; 
            
            cartBadge.classList.add('pop');

            // Remove class after animation finishes (matches CSS transition duration)
            setTimeout(() => {
                cartBadge.classList.remove('pop');
            }, 200); 
            
            // Optional: Subtle button text change feedback
            const originalText = button.textContent;
            button.textContent = 'Added!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 1000);
        });
    });

    // --- Smooth Sticky Nav Effect (Optional enhancement) ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(250, 250, 250, 0.85)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
        } else {
            navbar.style.background = 'rgba(250, 250, 250, 0.75)';
            navbar.style.boxShadow = 'none';
        }
    });
});