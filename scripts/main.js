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

function logInput(e) {
  const display = document.querySelector('.display > .in');
  const text = document.createTextNode(e.target.textContent);
  display.appendChild(text);
}

function logOutput(e) {
  const display = document.querySelector('.display > .out');
  const text = document.createTextNode(e.target.textContent);
  display.appendChild(text);
}

function clear() {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    document.querySelector('.display > .in').innerHTML = '';
    document.querySelector('.display > .out').innerHTML = '';
  });
}

function startListeners() {
  const eqButton = document.querySelector('.eq');
  eqButton.addEventListener('click', (e) => {
    const display = document.querySelector('.display');
    y = display.textContent.replace(/\s/g, '');
    y = y.replace(/^.+[\/x\-\+]/g, '');
    let ans = operate(op, x, y);
    display.textContent = `${x} ${op} ${y} = ${ans}`;
  });
  getNums();
  getOps();
  clear();
}

function getOps() {
  const opButtons = document.querySelectorAll('.op');
  opButtons.forEach(button => button.addEventListener('click', (e) => {
    x = document.querySelector('.display').textContent;
    x = x.replace(/\s/g, '');
    op = e.target.textContent;
    logInput(e);
  }));
}

function getNums() {
  const numButtons = document.querySelectorAll('.num');
  numButtons.forEach(button => button.addEventListener('click', logInput));
}

function main() {
  let x;
  let y;
  let op;
  startListeners();
}

main();
