// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange = {};
    var error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0) {
        return {};
    } else if (currency > 0 && currency < 10000) {
        while (currency > 0) {
            if (currency >= 50) {
                if (typeof exchange.H == "undefined") {
                    exchange['H'] = 0;
                }
                currency = currency - 50;
                exchange.H++;
            } else if (currency >= 25) {
                if (typeof exchange.Q == "undefined") {
                    exchange['Q'] = 0;
                }
                currency = currency - 25;
                exchange.Q++;
            } else if (currency >= 10) {
                if (typeof exchange.D == "undefined") {
                    exchange['D'] = 0;
                }
                currency = currency - 10;
                exchange.D++;
            } else if (currency >= 5) {
                if (typeof exchange.N == "undefined") {
                    exchange['N'] = 0;
                }
                currency = currency - 5;
                exchange.N++;
            } else if (currency >= 1) {
                if (typeof exchange.P == "undefined") {
                    exchange['P'] = 0;
                }
                currency = currency - 1;
                exchange.P++;
            }
        }
        return exchange;
    } else if (currency > 10000) {
        return error;
    }
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
