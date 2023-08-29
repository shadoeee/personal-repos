class UberCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const distanceCost = distanceInMiles * this.costPerMile;
        const timeCost = durationInMinutes * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + timeCost;
        return totalPrice;
    }
}

// Example usage
const uberXCalculator = new UberCalculator(2.5, 0.2, 1.1);
const rideDistance = 5; // miles
const rideDuration = 15; // minutes

const totalPrice = uberXCalculator.calculatePrice(rideDistance, rideDuration);
console.log(`Total price for the ride: $${totalPrice.toFixed(2)}`);
