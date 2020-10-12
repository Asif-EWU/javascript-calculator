let currentOperand = "";
let newOperand = "";
let currentOperator = "";

function updateOperand() {
  document.getElementById('current-operand').innerText = currentOperand + currentOperator;
  document.getElementById('new-operand').innerText = newOperand;
}

function calculate() {
  const operand1 = parseFloat(currentOperand);
  const operand2 = parseFloat(newOperand);

  switch(currentOperator) {
    case '+':
      currentOperand = operand1 + operand2;
      break;
    case '-':
      currentOperand = operand1 - operand2;
      break;
    case '*':
      currentOperand = operand1 * operand2;
      break;
    case '÷':
      currentOperand = operand1 / operand2;
      break;
  }
}


//    OPERAND BUTTONS
const operandList = document.getElementsByClassName('operand');

for(let i = 0; i < operandList.length; i++) {
  const item = operandList[i];
  item.addEventListener('click', function() {
    const lastDigit = item.innerText;
    if(!newOperand) newOperand = lastDigit;
    else newOperand = newOperand + lastDigit;
    document.getElementById('new-operand').innerText = newOperand;
  });
}


//     DEL BUTTON
document.getElementById('del').addEventListener('click', function() {
  newOperand += "";
  if(newOperand) {
    let operand = "";
    for(let i = 0; i < newOperand.length - 1; i++) {
      operand += newOperand[i];
    }

    newOperand = operand;  
    updateOperand();
  }
});


//     OPERATOR BUTTONS
const operatorList = document.getElementsByClassName('operator');

for(let i = 0; i < operatorList.length; i++) {
  const item = operatorList[i];
  item.addEventListener('click', function() {
    const newOperator = item.innerText;

    if(currentOperand && !newOperand) {
      currentOperator = newOperator;
    }

    else if(!currentOperand && newOperand) {
      currentOperand = newOperand;
      currentOperator = newOperator;
    }

    else if(currentOperand && newOperand) {
      calculate();
      currentOperator = newOperator;
    }

    newOperand = "";
    updateOperand();
  });
}


//     AC BUTTON
document.getElementById('ac').addEventListener('click', function() {
  currentOperand = newOperand = currentOperator = "";
  updateOperand();
})


//    EQUAL BUTTON
document.getElementById('equal').addEventListener('click', function() {
  if(currentOperand) {
    calculate();
    newOperand = currentOperand;
    currentOperand = currentOperator = "";
    updateOperand();
  }
})