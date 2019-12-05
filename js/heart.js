function heartZones() {
    'use strict';
    var x = document.getElementById("heartForm"),
        age = x.elements.Age.value,
        rhr = x.elements.RHR.value,
        maxHR = Math.round(207 - (0.7 * age)),
        HRR = maxHR - rhr,
        z1 = Math.round((HRR * 0.5) + rhr),
        z2 = Math.round((HRR * 0.6) + rhr),
        z3 = Math.round((HRR * 0.7) + rhr),
        z4 = Math.round((HRR * 0.8) + rhr),
        z5 = Math.round((HRR * 0.9) + rhr);
     
     document.getElementById("zone1").innerHTML = z1 + " BPM";
     document.getElementById("zone2").innerHTML = z2 + " BPM";
     document.getElementById("zone3").innerHTML = z3 + " BPM";
     document.getElementById("zone4").innerHTML = z4 + " BPM";
     document.getElementById("zone5").innerHTML = z5 + " BPM";

    
}
