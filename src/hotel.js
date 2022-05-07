module.exports = class Hotel{
    constructor(weekTax, fidelityWTax, weekEndTax, fidelityWETax, rate){
        this.weekTax = weekTax;
        this.fidelityWTax = fidelityWTax;
        this.weekEndTax = weekEndTax;
        this.fidelityWETax = fidelityWETax;
        this.rate = rate;
    }
    cost(n_normal, n_weekend){
        return (n_normal*this.weekTax + n_weekend*this.weekEndTax);
    }
    costFid(n_normal, n_weekend){
        return (n_normal*this.fidelityWTax + n_weekend*this.fidelityWETax);
    }
}