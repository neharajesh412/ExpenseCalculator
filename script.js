//Initial References
let bInp = document.getElementById("b-inp");
let lInp = document.getElementById("l-inp");
let dInp = document.getElementById("d-inp");
let sbInp = document.getElementById("sb-inp");
let sdInp = document.getElementById("sd-inp");
let slInp = document.getElementById("sl-inp");
let tot=document.getElementById("t-op");
let share=document.getElementById("s-op");
let errorMsg = document.getElementById("error-msg");

function calculateSum(bValue, dValue, lValue) {
    let sum = 0;

    while (bValue > 0 || dValue > 0 || lValue > 0) {
        const minVal = Math.min(bValue, dValue, lValue);

        if (minVal === 0) {
            if (bValue > 0) {
                if(lValue>0){
                    sum += bValue * 35;
                    sum += lValue * 65;
                    bValue = 0;
                    lValue=0;
                }
                sum += bValue * 35;
                bValue = 0;
            } if (dValue > 0) {
                if(lValue>0){
                    sum += dValue * 35;
                    sum += lValue * 65;
                    dValue = 0;
                    lValue=0;
                }
                sum += dValue * 35;
                dValue = 0;

            } if (lValue > 0) {
                sum += lValue * 60;
                lValue = 0;}
            } else {
            sum += minVal * 130;
            bValue -= minVal;
            dValue -= minVal;
            lValue -= minVal;
        }
    }

    return sum;
}


function updateSum() {
    let bValue = parseInt(bInp.value) || 0; // Ensure numeric value or default to 0
    let lValue = parseInt(lInp.value) || 0;
    let dValue = parseInt(dInp.value) || 0;
       
    tot.textContent = "Total:"+ calculateSum(bValue, dValue, lValue);
}


const r = '\u20B9';
function shareCalculator(bValue, dValue, lValue, sbValue, sdValue, slValue){
    let c=[];

    let S1=bValue*35/sbValue;
    let S2=lValue*60/slValue;
    let S3=dValue*35/sdValue;

    S1=Math.round(S1 * 100) / 100;
    S2=Math.round(S2 * 100) / 100;
    S3=Math.round(S3 * 100) / 100;
    
    if(lValue>0 && bValue==0){
        S3+=5/sdValue
    }
    if(lValue>0 && dValue==0){
        S1+=5/sbValue
    }

    let S=0;
    if(isFinite(S1)){
        c.push("Breakfast: "+ r + S1 +" ");
        S+=S1*sbValue;
    }
    if(isFinite(S2)){
        c.push("Lunch: "+ r + S2 +" ");
        S+=S2*slValue;
    }
    if(isFinite(S3)){
        c.push("Dinner: "+ r + S3 +" ")
        S+=S3*sdValue;
    }
    S=S.toFixed(2);
    c.push("Total: "+ r + S +" ")
    console.log("bprice:", S1,"lprice:", S3,"dprice:",S2);
    return(c)
}

function shares(){
    let bValue = parseInt(bInp.value) || 0; // Ensure numeric value or default to 0
    let lValue = parseInt(lInp.value) || 0;
    let dValue = parseInt(dInp.value) || 0;
    let sbValue = parseInt(sbInp.value) || 0;
    let sdValue = parseInt(sdInp.value) || 0;
    let slValue = parseInt(slInp.value) || 0;
    share.textContent = shareCalculator(bValue, dValue, lValue, sbValue, sdValue, slValue);
}

// let tot=document.getElementById("t-op");
// Add input event listeners
bInp.addEventListener("input", updateSum);
dInp.addEventListener("input", updateSum);
lInp.addEventListener("input", updateSum);
sbInp.addEventListener("input", shares);
sdInp.addEventListener("input", shares);
slInp.addEventListener("input", shares);