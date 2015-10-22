/* gets bfForm from html and assigns it variable "x" - calls methods on x to get appropriate values from form - adds the numbers of the measurement elements together, creates two variables based on gender equations, assigns the user one of the variables based on whether gender is male or female, runs two different calculations to determine bf%, calculates lbs fat and lbs lean, and displays in bodyfat divs.

*/

function bfCalc() {
    'use strict';
    var x = document.getElementById("bfForm"),
        gender = x.elements.gender.value,
        wt = x.elements.wt.value,
        age = x.elements.age.value,
        ch = x.elements.ch.value,
        mid = x.elements.mid.value,
        tri = x.elements.tri.value,
        sub = x.elements.sub.value,
        ab = x.elements.sub.value,
        sup = x.elements.sup.value,
        thigh = x.elements.thigh.value,
        sumOfFolds = (+ch) + (+mid) + (+tri) + (+sub) + (+ab) + (+sup) + (+thigh),
        
        
        maleBodyDensity = 1.112 - (0.00043499 * sumOfFolds) + (0.00000055 * (sumOfFolds * sumOfFolds)) - (0.00028826 * age),
        
        femaleBodyDensity = 1.097 - (0.00046971 * sumOfFolds) + (0.00000056 * (sumOfFolds * sumOfFolds)) - (0.00012828 * age),
        
        userBodyDensity = (gender === "male") ? maleBodyDensity : femaleBodyDensity,
        
        SiriBFPercent = ((495 / userBodyDensity) - 450),
        BrozekBFPercent = ((4.570 / userBodyDensity) - 4.142) * 100,
        SiriBFPercentRound = Math.round(SiriBFPercent * 10) / 10,
        BrozekBFPercentRound = Math.round(BrozekBFPercent * 10) / 10,
        
        lbsFat = Math.round(SiriBFPercentRound * wt / 100),
        lbsLean = wt - lbsFat;
        
    document.getElementById("bodyFat").innerHTML = "Estimated body fat percentage: " + SiriBFPercentRound + "%.";
    document.getElementById("lbsFatLean").innerHTML = "That's " + lbsFat + " lbs. of fat and " + lbsLean + " lbs. of lean body mass.";
}
