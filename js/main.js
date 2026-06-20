document.addEventListener('DOMContentLoaded', () => {
    // Gjejmë numrin e shportës
    const cartBadge = document.getElementById('cart-badge');
    
    // Gjejmë të gjithë butonat "Shto në Shportë"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    let cartCount = 0;

    // I shtojmë një funksion klikimi secilit buton
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartBadge.textContent = cartCount;
            
            // Efekt i vogël vizual te butoni kur klikohet
            const originalText = button.innerHTML;
            button.innerHTML = '<span class="material-symbols-outlined">check</span> U Shtua';
            button.style.backgroundColor = '#10b981'; // Ngjyrë jeshile
            button.style.borderColor = '#10b981';
            button.style.color = 'white';
            
            // Kthejmë butonin në gjendjen normale pas 2 sekondash
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
                button.style.borderColor = '';
                button.style.color = '';
            }, 2000);
        });
    });
});