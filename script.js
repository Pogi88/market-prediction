async function predictStock() {
    try {

        const apiKey = 'YOUR_API_KEY';

        const stockSymbol = document.getElementById("stockSymbol").value.toUpperCase();
        const currentStockValue = parseFloat(document.getElementById("currentStockValue").value);

        if (!stockSymbol || !currentStockValue || isNaN(currentStockValue)) {
            alert("Please enter valid values for stock symbol and current stock value.");
            return;
        }

        const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const currentPrice = parseFloat(data['Global Quote']['05. price']);

        const fluctuation = (Math.random() - 0.5) * 20;
        const predictedValue = currentStockValue * (1 + fluctuation / 100);


        document.getElementById("predictedValue").innerText = predictedValue.toFixed(2);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}