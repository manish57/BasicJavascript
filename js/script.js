/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FIRST ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a1() {
    const valA = parseInt(document.getElementById("valA").value);
    const valB = parseInt(document.getElementById("valB").value); 
    const valC = parseInt(document.getElementById("valC").value);
    
    if(valA > valB && valA > valC)
    {
        text = "First number is Greatest";
    } else if(valB > valA && valB > valC) {
        text = "Second number is Greatest";
    } else if(valC > valA && valC > valB) { 
        text = "Third number is Greatest";
    } else if(valA == valB && valA > valC) { 
        text = "First and Second number are Greater than Third";
    } else if(valB == valC && valB > valA) { 
        text = "Second and Third number are Greater than First";
    } else if(valA == valC && valA > valB) { 
        text = "First and Third number are Greater than Second";
    } else { 
        text = "All numbers have equal values";
    }

    document.getElementById("sol1").innerHTML = text;
}
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* SECOND ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a2() {
    let valD = parseInt(document.getElementById("valD").value);
    let valE = parseInt(document.getElementById("valE").value); 
    let i,j=0, result = [];
    if(valE > valD) {
        for(i = valD; i <= valE; i++) {
            result[j] = i;
            j++;
        }
    } else if(valD > valE) {
        for(i = valD; i >= valE; i--) {
            result[j] = i;
            j++;
        }
    }

    for(let i = 0; i <= result.length; i++) {
        document.getElementById("sol2").innerHTML = result;
    }
    
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* THIRD ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a3() {
    let valF = parseInt(document.getElementById("valF").value);
    let valG = parseInt(document.getElementById("valG").value);
    let valH = parseInt(document.getElementById("valH").value);  
    let i,j=0, result = [];

    if(valG > valF) {
        for(i = valF; i <= valG; i = i + valH) {
            result[j] = i;
            j++;
        }
    } else if(valF > valG) {
        for(i = valF; i >= valG; i = i - valH) {
            result[j] = i;
            j++;
        }
    }
    
    for(let i = 0; i <= result.length; i++) {
        document.getElementById("sol3").innerHTML = result;
    }
    
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FOURTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a4() {
    let i, valI = [];
    valI = document.getElementById("valI").value.split(",");

    for(i = valI.length; i > 0; i--) {
        document.getElementById("sol4").innerHTML = valI.reverse();
    }
}    
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FIFTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a5() {
    let i, valJ = [], result = [],j=0;
    valJ = document.getElementById("valJ").value.split(",");

    for(let i = 0; i <= valJ.length; i++) {
        if (valJ[i] % 2 == 1 ) {
            result[j] = valJ[i];
            j++;
        }
    }
    document.getElementById("sol5").innerHTML = result;
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* SIXTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
function a6() {
    let i, valK, c = 0;
    valK = parseInt(document.getElementById("valK").value);

    for (i = 1; i <= valK; i++) {
        if (valK % i == 0) {
            c = c + 1;
        }
    }

    if (c == 2) {
        document.getElementById('sol6').innerHTML = valK + ' is a Prime number';
    }else{
        document.getElementById('sol6').innerHTML = valK + ' is NOT a Prime number';
    }
}
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* SEVENTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a7() {
    let i;
    valL = Math.round(document.getElementById("valL").value);
    valL = valL.toString().split('').reverse().join('');
    document.getElementById("sol7").innerHTML = valL;
}   

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* EIGHT ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a8() {
    let i, valM = [], valN;
    valM = document.getElementById("valM").value.split(",");
    document.getElementById("sol8").innerHTML = valM;
    valN = document.getElementById("valN").value;
    valM.splice(valN, 1);
    document.getElementById("sol8a").innerHTML = valM;
}  

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* NINETH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a9a() {
    valO = document.getElementById("valO").value.split(",");
    document.getElementById("sol9a").innerHTML = valO.map(addArrayElement);   
    function addArrayElement(num) {
        return parseInt(num) + parseInt(document.getElementById("valP").value);
    }
}


function a9b() {
    valQ = document.getElementById("valQ").value.split(",");
    document.getElementById("sol9b").innerHTML = valQ.reduce(add);
    function add(total, num) {
        return parseInt(total) + parseInt(num);
    }
}

function a9c() {
    valR = document.getElementById("valR").value.split(",");
    document.getElementById("sol9c").innerHTML = valR.filter(checkeven);
    function checkeven(num){
        if(num % 2 == 0)
            return num;
    }    
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* TENTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a10() {
    var res = 1, arguments= [];
    arguments = document.getElementById("valS").value.split(",");
    for (var i = 0; i < arguments.length; i++) {
        res *= parseInt(arguments[i]);
    }
    document.getElementById("sol10").innerHTML = res;
}