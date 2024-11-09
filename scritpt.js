// Placeholder for flight pricing data
const flightPrices = [
    { route: 'New York to London', price: 500 },
    { route: 'London to Paris', price: 300 },
    { route: 'Paris to Tokyo', price: 700 },
];

// Function to simulate flight price fetching
function fetchFlightPrices() {
    const flightPricesContainer = document.getElementById('flight-prices');
    flightPricesContainer.innerHTML = '';  // Clear previous prices

    flightPrices.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.classList.add('flight-card');
        flightCard.innerHTML = `
            <h3>${flight.route}</h3>
            <p>$${flight.price}</p>
        `;
        flightPricesContainer.appendChild(flightCard);
    });
}

// Call the function to fetch prices when the page loads
window.onload = fetchFlightPrices;

// Simulate UPI Payment
function payWithUPI() {
    alert("Redirecting to UPI payment gateway...");
    // In a real-world scenario, you would integrate with a UPI payment gateway.
    // Example: Redirecting to a UPI app for payment
    window.location.href = 'upi://pay?pa=youremail@upi&pn=YourName&mc=0000&tid=1234567890&url=http://example.com';
}
