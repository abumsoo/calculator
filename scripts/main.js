function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(op, x, y) {
  op = op.replace(/\s/g, '');
  x = Number(x)
  y = Number(y)
  if (op == '+') return add(x, y);
  else if (op == '-') return subtract(x, y);
  else if (op == 'x') return multiply(x, y);
  else if (op == '÷') return divide(x, y);
  else return "Not a valid operation";
}

function showInput(e) {
  const display = document.querySelector('.display > .in');
  const text = document.createTextNode(e.target.textContent);
  display.appendChild(text);
}

function showOutput(ans) {
  const display = document.querySelector('.display > .out');
  const text = document.createTextNode(ans);
  display.appendChild(text);
}

function listenClear() {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', () => {
    document.querySelector('.display > .in').innerHTML = '';
    document.querySelector('.display > .out').innerHTML = '';
  });
}

function startListeners() {
  listenNums();
  listenOps();
  listenEq();
  listenClear();
}

function listenEq() {
  const eqButton = document.querySelector('.eq');
  eqButton.addEventListener('click', (e) => {
    const display = document.querySelector('.display');
    let num = display.textContent.replace(/\s/g, '');
    num = num.replace(/^.+[÷x\-\+]/g, '');
    equation.push(num);
    let ans = equation.shift();
    while (equation && equation.length) {
      console.log(ans);
      let op = equation.shift();
      console.log(op);
      let nextNum = equation.shift();
      console.log(nextNum);
      ans = operate(op, ans, nextNum);
    }
    showOutput(ans);
  });
}

function listenOps() {
  /* On operator click, save previous number, current operator,
   * and show it on display */
  const opButtons = document.querySelectorAll('.op');
  opButtons.forEach(button => button.addEventListener('click', (e) => {
    const display = document.querySelector('.display');
    let num = display.textContent.replace(/\s/g, '');
    num = num.replace(/^.+[÷x\-\+]/g, '');
    equation.push(num);
    let op = e.target.textContent;
    equation.push(op);
    e.target.textContent = ` ${e.target.textContent} `
    showInput(e);
  }));
}

function listenNums() {
  const numButtons = document.querySelectorAll('.num');
  numButtons.forEach(button => button.addEventListener('click', (e) => {
    /* Check that the output screen is cleared */
    if (document.querySelector('.display > .out').textContent != '') {
      document.querySelector('.display > .in').innerHTML = '';
      document.querySelector('.display > .out').innerHTML = '';
    }
    /* Show numbers on the display */
    showInput(e);
  }));
}

function main() {
  startListeners();
}

let equation = [];
main();
