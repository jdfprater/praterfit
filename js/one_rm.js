function rmCalc() {
    'use strict';
    document.getElementById("repMaxPercent").innerHTML = "";
    document.getElementById("repMax").innerHTML = "";
    var x = document.getElementById("wtForm"),
        wt = x.elements.wt.value,
        reps = x.elements.reps.value,
        oneRM = Math.round(wt / (1.0278 - (0.0278 * reps))),
        percents = [],
        i,
        j;
    
    for (i = 1; i >= 0.50; i -= 0.05) {
        percents.push(Math.round(i * oneRM));
        document.getElementById("repMaxPercent").innerHTML += Math.round(i * 100) + "% 1RM: <br>";
    }
    
    for (j = 0; j < percents.length; j += 1) {
        document.getElementById("repMax").innerHTML += percents[j] + "<br>";
    }
    
}

