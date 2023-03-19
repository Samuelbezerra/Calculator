const calculation = document.getElementById("calculation");
const result = document.getElementById("result");

function handleButton(button) {
    var id = button.id
    if(id == "delete") {
        return result.innerHTML = result.innerHTML.slice(0, -1)
    }else if(id == "clear") {
        calculation.innerHTML = ""
        return result.innerHTML = "0"
    } else if(id == "+") {
        if(calculation.innerHTML == "") {
            calculation.innerHTML = result.innerHTML + "+"
            return result.innerHTML = 0
        }
        checkOperator((calculation.innerHTML.slice(-1)), "+")
    } else if(id == "-"){
        if(calculation.innerHTML == "") {
            calculation.innerHTML = result.innerHTML + "-"
            return result.innerHTML = 0
        }
        checkOperator((calculation.innerHTML.slice(-1)), "-")
    }else if(id == "x"){
        if(calculation.innerHTML == "") {
            calculation.innerHTML = result.innerHTML + "x"
            return result.innerHTML = 0
        }
        checkOperator((calculation.innerHTML.slice(-1)), "x")
    }else if(id == "÷"){
        if(calculation.innerHTML == "") {
            calculation.innerHTML = result.innerHTML + "÷"
            return result.innerHTML = 0
        }
        checkOperator((calculation.innerHTML.slice(-1)), "x")
    }
    else if(id == "="){
        checkOperator((calculation.innerHTML.slice(-1)))
    }else {
        result.innerHTML == "0"?result.innerHTML=id:
        result.innerHTML+=id
    }
}

function checkOperator(operator, id) {
    if(operator == "+") {
        result.innerHTML = parseInt(calculation.innerHTML.slice(0, -1)) + parseInt(result.innerHTML) 
    }if(operator == "-"){
        result.innerHTML = (calculation.innerHTML.slice(0, -1)) - parseInt(result.innerHTML) 
    }if(operator == "x"){
        result.innerHTML = (calculation.innerHTML.slice(0, -1)) * parseInt(result.innerHTML) 
    } if(operator == "÷") {
        result.innerHTML = (calculation.innerHTML.slice(0, -1)) / parseInt(result.innerHTML) 
    }
    if(!id) {
        return calculation.innerHTML = ""
    }
    calculation.innerHTML = result.innerHTML + id
}