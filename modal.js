export function initializeModal(productsData, Chart) {
    const modal = document.getElementById('product-modal');
    const closeButton = document.querySelector('.close-button');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Function to open the modal (can be called from main.js for specific products)
    window.openProductModal = function(productId) {
        const product = productsData[productId];

        if (product) {
            // These products now have their own pages, so don't open modal for them
            if (productId === 'bcaa' || productId === 'whey-protein') {
                return;
            }

            document.getElementById('modal-title').textContent = product.title;
            document.getElementById('modal-image').src = product.image;
            document.getElementById('modal-description').textContent = product.description;

            const benefitsList = document.getElementById('modal-benefits');
            benefitsList.innerHTML = ''; // Clear previous benefits
            product.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });

            document.getElementById('modal-suggestion').textContent = product.suggestion;

            // Destroy existing chart if it exists
            const ctx = document.getElementById('resultsChart');
            if (ctx && ctx.chart) { // Check if chart instance exists on the canvas
                ctx.chart.destroy();
            }

            // Render chart if data exists
            if (product.chartData) {
                const newChart = new Chart(ctx, {
                    type: 'line',
                    data: product.chartData,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                            }
                        }
                    }
                });
                ctx.chart = newChart; // Store chart instance on canvas element
            } else {
                // Clear chart area if no data
                ctx.getContext('2d').clearRect(0, 0, ctx.width, ctx.height);
            }

            modal.style.display = 'block';
        }
    };
}