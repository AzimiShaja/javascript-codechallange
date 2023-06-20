const textField = document.querySelector('.text-field');

let operand1 = 0;
let operand2 = null; 
let operator = null;

function addNumber(num) {
    textField.value += num;

}
function addDecimal(){
    if(textField.value.indexOf(".") === -1 ){
        textField.value += ".";
    }
}

function clearDisplay(){
    textField.value = '';
    operand1 = 0;
    operand2 = null; 
    operator = null;
}

function performOperation(op){

    operand1 = parseFloat(textField.value);
    operator = op;
    textField.value = '';
}

function calculate(){
    operand2 = parseFloat(textField.value);

    let result;

    switch(operator){
        case '+':
            result = operand1 + operand2;
            break;
        
        case '-':
            result = operand1 - operand2;
            break;
        
        case '*':
            result = operand1 * operand2;
            break;

        case '/':
            if (operand2 === 0) {
                result = 'error: division by zero';
            } else {
                result = operand1 / operand2;
            }
            break;
        
        default:
            result = 'error';
            break;
    }
    textField.value = result;
}