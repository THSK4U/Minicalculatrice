function afficher(val) {
    document.querySelector(".small p").textContent += val;
}

function solve() {
    let vall = document.querySelector(".small p").textContent;
    let numbers = vall.match(/\d+(\.\d+)?/g).map(Number);
    let operators = vall.match(/[\+\-\*\/]/g);

    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        } else if (operators[i] === '*') {
            result *= numbers[i + 1];
        } else if (operators[i] === '/') {
            result /= numbers[i + 1];
        }
    }

    document.querySelector(".larg p").textContent = result;
    document.querySelector(".small p").textContent = result;
}

function clr() {
    document.querySelector(".small p").textContent = "0";
    document.querySelector(".larg p").textContent = "0";
}


function clrlast(){
    input = document.querySelector(".small p").textContent;
if (input.length == 1){
    document.querySelector(".small p").textContent = "0";
}else if (input.length > 1){
        input = input.slice(0, -1);
        document.querySelector(".small p").textContent = input;
    }
}