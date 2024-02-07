// Problem - 01

function calculateMoney(ticketSales) {
    if(
        typeof ticketSales !== "number"
    ) {
        return "Please provide valid ticket number.";
    } else if (ticketSales < 0){
        return "All parameters should be positive numbers.";
    } else {
        const ticketPrice = 120;
        const securityCost = 500;
        const lunchCost = 50;

        const totalIncome = ticketSales * ticketPrice;
        const totalExpenses = securityCost + (lunchCost * 8);
        const dailyIncome = totalIncome - totalExpenses;
        return dailyIncome;

    }
}

// console.log(calculateMoney(10));


// problem - 02