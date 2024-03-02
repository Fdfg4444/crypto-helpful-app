// Function to fetch cryptocurrency price
async function fetchCryptoPrice(cryptoId) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
        const data = await response.json();
        const cryptoPrice = data[cryptoId].usd;
        return cryptoPrice;
    } catch (error) {
        console.error('Error fetching cryptocurrency price:', error);
    }
}

// Function to display cryptocurrency price
function displayCryptoPrice(cryptoId, cryptoPrice) {
    console.log(`Current price of ${cryptoId.toUpperCase()} in USD: $${cryptoPrice}`);
}

// Example usage:
const cryptoId = 'bitcoin'; // Cryptocurrency ID (e.g., 'bitcoin' for Bitcoin)

// Fetch and display cryptocurrency price
fetchCryptoPrice(cryptoId)
    .then(price => {
        displayCryptoPrice(cryptoId, price);
    })
    .catch(error => {
        console.error('Error:', error);
    });
