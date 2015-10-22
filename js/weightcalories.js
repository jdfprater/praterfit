function calorieCalc() {
    'use strict';
    var x = document.getElementById("volumeForm"),
        wt = x.elements.wt.value,
        reps = x.elements.reps.value,
        sets = x.elements.sets.value,
        dist = x.elements.dist.value,
        volume = wt * reps * sets * dist,
        calories = Math.round((volume * 0.00032383155353287) * 100) / 100;

    document.getElementById("calorieDisplay").innerHTML = "You burned " + calories + " Calories for that exercise.";
}
