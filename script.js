function ticketCountHandler(id, isIncrease) {
    const ticketCount = document.getElementById(id).value;
    const numberOfTicket = parseFloat(ticketCount);
    let totalNumberOfTicket = numberOfTicket;
    if (isIncrease == true) {
        totalNumberOfTicket = numberOfTicket + 1;
    }
    if (isIncrease == false && totalNumberOfTicket > 0) {
        totalNumberOfTicket = numberOfTicket - 1;
    }
    document.getElementById(id).value = totalNumberOfTicket;
    calculateTotal()
}

function calculateTotal(params) {
    const firstClassCount = document.getElementById("first-class-count").value;
    const economyClassCount = document.getElementById("economy-class-count").value;
    const subTotal = parseFloat(firstClassCount) * 150 + parseFloat(economyClassCount) * 100;
    document.getElementById("subtotal").innerText = subTotal;

    const tax = subTotal * 0.1;
    const taxElement = document.getElementById("tax").innerText = tax;

    const total = document.getElementById("total").innerText = subTotal + tax;


}


    function displayMessage(params) {
        document.getElementById("ticket-area").style.display = "none";
        document.getElementById("booking-info").style.display = "block"

       const messageForFrom = document.getElementById("fromValue").innerText = document.getElementById("from-value").value ;

       const messageForTo = document.getElementById("toValue").innerText = document.getElementById("to-value").value ;

       const messageForDepartureDate = document.getElementById("departureDate").innerText = document.getElementById("departure-date").value;

       const messageForReturnDate = document.getElementById("returnDate").innerText = document.getElementById("return-date").value;

       const messageForNumberOfFirstClassTicket = document.getElementById("firstClassTicket").innerText = document.getElementById("first-class-count").value;

       const messageForNumberOfEconomyClassTicket = document.getElementById("economyClassTicket").innerText = document.getElementById("economy-class-count").value;
       
       const messageForTotalCost = document.getElementById("totalCost").innerText = document.getElementById("total").innerText;
    
    }
