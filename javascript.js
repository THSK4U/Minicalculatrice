function afficher(val) {
    document.querySelector(".small p").textContent += val;
}

function solve() {
    let array = document.querySelector(".small p").textContent.split('+');
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseFloat(array[i]);
    }
        document.querySelector(".larg p").textContent = sum;
        document.querySelector(".small p").textContent = sum;
    }


function clr() {
    document.querySelector(".small p").textContent = "0";
    document.querySelector(".larg p").textContent = "0";
}


function clrlast(){
    input = document.querySelector(".small p").textContent;
if (input.length == 1){
    document.querySelector(".small p").textContent = "0";
}else if (input.length > 0){
        input = input.slice(0, -1);
        document.querySelector(".small p").textContent = input;
    }
}