import { Chart } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.2/+esm';
import { productsData } from './data.js';
import { initializeModal } from './modal.js';

initializeModal(productsData, Chart);

// Handle redirection for product cards
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const viewDetailsButton = card.querySelector('.view-details');
        if (viewDetailsButton) {
            viewDetailsButton.addEventListener('click', (event) => {
                const productId = event.target.dataset.product;
                if (productId === 'bcaa') {
                    window.location.href = 'index01.html';
                } else if (productId === 'whey-protein') {
                    window.location.href = 'index02.html';
                }
                // Add more conditions for other products if they get their own pages
            });
        }
    });
});