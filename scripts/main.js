function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(op, x, y) {
  x = Number(x)
  y = Number(y)
  if (op == '+') return add(x, y);
  else if (op == '-') return subtract(x, y);
  else if (op == 'x') return multiply(x, y);
  else if (op == '/') return divide(x, y);
  else return "Not a valid operation";
}

function showInput(e) {
  const display = document.querySelector('.display');
  const text = document.createTextNode(e.target.textContent);
  display.appendChild(text);
}

function main() {
  let x;
  let y;
  let op;
  const numButtons = document.querySelectorAll('.num');
  numButtons.forEach(button => button.addEventListener('click', showInput));
  const opButtons = document.querySelectorAll('.op');
  opButtons.forEach(button => button.addEventListener('click', (e) => {
    x = document.querySelector('.display').textContent;
    x = x.replace(/\s/g, '');
    op = e.target.textContent;
    e.target.textContent = ` ${e.target.textContent} `;
    showInput(e);
  }));
  const eqButton = document.querySelector('.eq');
  eqButton.addEventListener('click', (e) => {
    const display = document.querySelector('.display');
    y = display.textContent.replace(/\s/g, '');
    y = y.replace(/^.+[\/x\-\+]/g, '');
    let ans = operate(op, x, y);
    e.target.textContent = ` = ${ans}`;
    showInput(e);
  });
}

main();
