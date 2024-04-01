var orders = []; // Array to hold orders

        // Function to handle adding an order
        function order(pastaName, price) {
            var quantity = parseInt(prompt("Enter quantity for " + pastaName, "1"));
            if (!isNaN(quantity) && quantity > 0) {
                // Add the new order to the array
                orders.push({
                    pastaName: pastaName,
                    price: price,
                    quantity: quantity
                });
                // Update orders summary display
                updateOrdersSummary();
            } else {
                alert("Please enter a valid quantity.");
            }
        }

        // Function to update the orders summary display
        function updateOrdersSummary() {
            var summaryContainer = document.getElementById('ordersSummary');
            var summaryHTML = '<h3>Orders Summary:</h3>';
            if (orders && orders.length > 0) {
                summaryHTML += '<ul>';
                orders.forEach(function(order) {
                    summaryHTML += '<li>' + ' each'+ order.quantity + ' x ' + order.pastaName + ' - ' + '₱'+order.price + '</li>';
                });
                summaryHTML += '</ul>';
            } else {
                summaryHTML += '<p>No orders added yet.</p>';
            }
            // Update the HTML content of the summary container
            summaryContainer.innerHTML = summaryHTML;
        }

        // Function to handle order confirmation and redirection
        function confirmOrder() {
            // Check if there are any orders
            if (orders.length > 0) {
                // Store orders in localStorage
                localStorage.setItem("orders", JSON.stringify(orders));
                // Open order.html in a new tab
                window.open("cart.html", "_blank");
            } else {
                alert("Please add some orders before confirming.");
            }
        }