var bmi = 0,
    ffmi = 0,
    risk = "";

function bmiCalc() {
    'use strict';
    var x = document.getElementById("bmiForm"),
        ht = x.elements.ht.value * 0.0254,
        mass = x.elements.wt.value * 0.4535;
    
    bmi = Math.round(mass / (ht * ht));
    
    if (18 <= bmi && bmi <= 25) {
        risk = "You are likely at a normal bodyweight.";
    } else if (25 <= bmi && bmi <= 30) {
        risk = "You are likely considered overweight.";
    } else if (bmi > 30) {
        risk = "You are likely considered obese.";
    } else {
        risk = "Try again.";
    }
    
    document.getElementById("bmiResult").innerHTML = "Your BMI is " + bmi + ".<br>" + risk;
}

function ffmiCalc() {
    'use strict';
    var x = document.getElementById("ffmiForm"),
        ht = x.elements.ht.value * 0.0254,
        mass = x.elements.wt.value * 0.4535,
        bf = 1.0 - (x.elements.bf.value / 100.0);
    
    ffmi = Math.round((mass * bf) / (ht * ht));
    
    document.getElementById("ffmiResult").innerHTML = "Your FFMI is " + ffmi + ".";
}
