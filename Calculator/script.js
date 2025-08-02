const buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer";
const display = document.createElement("input")

document.body.appendChild(Object.assign(document.createElement("button"), {
    value: "clear",
    textContent: "Clear",
    id: "clearBtn",
    onclick: () => {display.value = "";}
    })
);

document.body.appendChild(Object.assign(document.createElement("button"), {
value: "=",
textContent: "=",
id: "equalBtn",
onclick: () => numberCalculator(),
}));

document.body.appendChild(buttonContainer);
document.body.appendChild(display);


for (let i = 0; i < 10; i++) {
  const btn = document.createElement("button");
  btn.value = i;
  btn.textContent = i; // Show the number on the button
  btn.style.margin = "5px"; // Optional styling
  buttonContainer.appendChild(btn); // Append button to the div
  btn.onclick = () => displayEntry(i);
}

operators = [ "+", "-", "*", "/"]
operators.forEach(item => {
    const btn = document.createElement("button");
    btn.value = item;
    btn.textContent = item; // Show the number on the button
    btn.style.margin = "5px"; // Optional styling
    buttonContainer.appendChild(btn); // Append button to the div
    btn.onclick = () => displayEntry(item);
})

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