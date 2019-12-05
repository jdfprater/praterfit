var maxHR = 0,
    HRR = 0,
    age = 0,
    rhr = 0,
    z1 = 0,
    z2 = 0,
    z3 = 0,
    z4 = 0,
    z5 = 0;

function heartZones() {
    'use strict';
    var x = document.getElementById("heartForm"),
        age = Number(x.elements.Age.value),
        rhr = Number(x.elements.RHR.value);
    
    maxHR = Math.round(207 - (0.7 * age));
    HRR = maxHR - rhr;
        
    z1 = Math.round((HRR * 0.5) + rhr);
    z2 = Math.round((HRR * 0.6) + rhr);
    z3 = Math.round((HRR * 0.7) + rhr);
    z4 = Math.round((HRR * 0.8) + rhr);
    z5 = Math.round((HRR * 0.9) + rhr);
     
    document.getElementById("zone1").innerHTML = z1 + " BPM";
    document.getElementById("zone2").innerHTML = z2 + " BPM";
    document.getElementById("zone3").innerHTML = z3 + " BPM";
    document.getElementById("zone4").innerHTML = z4 + " BPM";
    document.getElementById("zone5").innerHTML = z5 + " BPM";
    
}
