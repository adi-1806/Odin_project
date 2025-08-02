const display = document.createElement("input");
display.className = "display";

const buttonGrid = document.createElement("div");
buttonGrid.id = "buttonGrid";

const bottomRow = document.createElement("div");
bottomRow.id = "bottomRow";

// Add display
document.body.appendChild(display);

// Add button grid
document.body.appendChild(buttonGrid);

// Add bottom buttons row
document.body.appendChild(bottomRow);

// Create number buttons
for (let i = 0; i < 10; i++) {
  const btn = document.createElement("button");
  btn.value = i;
  btn.textContent = i;
  btn.className = "btn";
  btn.onclick = () => displayEntry(i);
  buttonGrid.appendChild(btn);
}

// Create operator buttons
const operators = ["+", "-", "*", "/"];
operators.forEach(op => {
  const btn = document.createElement("button");
  btn.value = op;
  btn.textContent = op;
  btn.className = "btn operator";
  btn.onclick = () => displayEntry(op);
  buttonGrid.appendChild(btn);
});

// Clear button
const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.id = "clearBtn";
clearBtn.onclick = () => (display.value = "");
bottomRow.appendChild(clearBtn);

// Equal button
const equalBtn = document.createElement("button");
equalBtn.textContent = "=";
equalBtn.id = "equalBtn";
equalBtn.onclick = () => numberCalculator();
bottomRow.appendChild(equalBtn);

function numberCalculator(){
    let inputValue = display.value;
    let arr = inputValue.split(" ");
    let result = evaluateExpression(arr);
    display.textContent = result
    display.value = result
}


function displayEntry(operand){
    if(isNaN(operand)){
        display.value += (" " + operand + " ")
        return
    }
    display.value += operand
    display.textContent += operand
}

function evaluateExpression(tokens) {
    // First pass: handle * and /
    let stack = [];
    let i = 0;
  
    while (i < tokens.length) {
      const token = tokens[i];
  
      if (token === '*' || token === '/') {
        const prev = parseFloat(stack.pop());
        const next = parseFloat(tokens[i + 1]);
        const result = token === '*' ? prev * next : prev / next;
        stack.push(result.toString());
        i += 2;
      } else {
        stack.push(token);
        i++;
      }
    }
  
    // Second pass: handle + and -
    let result = parseFloat(stack[0]);
    for (let j = 1; j < stack.length; j += 2) {
      const op = stack[j];
      const next = parseFloat(stack[j + 1]);
  
      if (op === '+') result += next;
      else if (op === '-') result -= next;
    }
    
    return result;
}