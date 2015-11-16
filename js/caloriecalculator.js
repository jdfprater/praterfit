var bmrCalories = 0;
var tdeeCalories = 0;
var caloriesPerDay = 0;

/* calculates basal metabolic rate (bmr) by getting the bmrForm and assigning it to "x", then assigns the demographic information inputted by the user to their own variables, figures out if the button selected is male or female and assigning it a number, then runs it through an equation before displaying the result in the bmrDisplay div */

function bmrCalc() {
    'use strict';
    var x = document.getElementById("bmrForm"),
        gender = x.elements.gender.value,
        wt = x.elements.wt.value * 0.45392,
        ht = x.elements.ht.value * 2.54,
        age = x.elements.age.value,
        maleOrFemale = (gender === "male") ? 5 : -161;

    bmrCalories = Math.round((wt * 9.99) + (ht * 6.25) - (age * 4.92) + maleOrFemale);

    document.getElementById("bmrDisplay").innerHTML = "Your body needs approximately " + bmrCalories + " Calories per day.";
}

/* calculates total daily energy expenditure (tdee) by getting the tdeeForm and assigning it to "x", figures out which button has been selected, runs it through a switch/case to see which equation should be applied, then displays the result in the tdeeDisplay div */

function tdeeCalc() {
    'use strict';
        var x = document.getElementById("tdeeForm"),
            activity = x.elements.activity.value;
        switch (activity) {
        case 'sedentary':
            tdeeCalories = Math.round(bmrCalories * 1.2);
            break;
        case 'light':
            tdeeCalories = Math.round(bmrCalories * 1.375);
            break;
        case 'moderate':
            tdeeCalories = Math.round(bmrCalories * 1.55);
            break;
        case 'heavy':
            tdeeCalories = Math.round(bmrCalories * 1.725);
            break;
        case 'extra':
            tdeeCalories = Math.round(bmrCalories * 1.9);
            break;
        }
        document.getElementById("tdeeDisplay").innerHTML = "Your body uses " + tdeeCalories + " Calories per day to maintain it's cellular processes AND its activity.";
}


/* calculates the amount of calories need to lose 1 or 2 pounds per week by getting the weightRateForm and assigning it to "x", figures out which button has been selected and assigns a caloric equivalent number to be subracted from TDEE necessary to achieve the desired result, then displays the result in the weightRateDisplay div */

function weightRateCalc() {
    'use strict';
        var x = document.getElementById("weightRateForm"),
            weightRate = x.elements.weightRate.value,
            amountToLose = x.elements.amountToLose.value,
            howLong,
            numberOfWeeks,
            goal;
        switch (weightRate) {
        case 'one':
            goal = 500;
            howLong = 1;
            break;
        case 'two':
            goal = 1000;
            howLong = 2;
            break;
        case 'maintain':
            goal = 0;
            break;
        case 'gain':
            goal = -300;
            howLong = 0.5;
            break;
        }
        caloriesPerDay = tdeeCalories - goal;
        numberOfWeeks = amountToLose / howLong;
        
        document.getElementById("weightRateDisplay").innerHTML = "In order to lose " + weightRate + " pounds per week, you need to eat " + caloriesPerDay + " Calories per day.";
        
        if (goal !== 0) {
            document.getElementById("howLongDisplay").innerHTML = "It should take you approximately " + numberOfWeeks + " weeks, or " + numberOfWeeks / 4 + " months to reach your goal.";
        } else {
            document.getElementById("howLongDisplay").innerHTML = "You should not add or lose weight.";
        }
}

/* calculates the number of grams of macronutrients according to a diet selected from caloriesPerDay. Gets dietForm and assigns it to "x", figures out which diet button has been selected and gets the dietType associated with the number value of the diet button. Also gets the number of meals from the range on the html form. Assigns variables for macronutrients associated with the macros percentages by calling methods on each macro and multiplying it by the caloriesPerDay, then converting them into grams.

*/

function macroCalc() {
    'use strict';
        var x = document.getElementById("dietForm"),
            mealNum = x.elements.mealNum.value,
            diet = x.elements.diet.value,
            dietTypes = [
                {name: "fda", carb: 0.6, pro: 0.25, fat: 0.15},
                {name: "mod", carb: 0.5, pro: 0.3, fat: 0.2},
                {name: "zone", carb: 0.4, pro: 0.3, fat: 0.3},
                {name: "lowCarb", carb: 0.25, pro: 0.45, fat: 0.3}
            ],
            macros = dietTypes[diet],
            carbs = Math.round(caloriesPerDay * macros.carb / 4),
            protein = Math.round(caloriesPerDay * macros.pro / 4),
            fat = Math.round(caloriesPerDay * macros.fat / 9),
            carbsMeal = Math.round(carbs / mealNum),
            proteinMeal = Math.round(protein / mealNum),
            fatMeal = Math.round(fat / mealNum);

        document.getElementById("macroDisplayDay").innerHTML = "You must eat " + carbs + "g Carbs per day, " + protein + "g Protein per day, and " + fat + "g fat per day.";

        document.getElementById("macroDisplayMeal").innerHTML = "That's " + carbsMeal + "g of carbs per meal, " + proteinMeal + "g of protein, and " + fatMeal + "g of fat.";
}
