document.addEventListener("DOMContentLoaded", function(){
    let output = document.getElementById('output');
    let plusButton = document.getElementById('plusBtn');
    let input = document.getElementById('number');
    let minusButton = document.getElementById('minusBtn');
    let number = 0;  
    plusButton.addEventListener("click", function(e) {
        number = +number + +input.value;
        output.innerText = number;
        if (number < 0) {
            output.style.color = "red"
        } else if (number > 0) {
            output.style.color = "black"
        }
    });
    minusButton.addEventListener("click", function(e) {
        number = +number - +input.value;
        output.innerText = number;
        if (number < 0) {
            output.style.color = "red"
        } else if (number > 0) {
            output.style.color = "black"
        }
    }) 
    })