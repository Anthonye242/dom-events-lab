/*-------------------------------- Constants --------------------------------*/
const ELEMENTS = {
  calcWrapper: '#calculator',
  btn: '.button',
  digit: '.number',
  action: '.operator',
  resultBtn: '.equals',
  resetBtn: '.operator:contains("C")',
  display: '.display'
};

const ACTIONS = {
  plus: '+',
  minus: '-',
  times: '*',
  over: '/'
};

/*------------------------------- Variables -------------------------------*/
let entry = '';
let action = '';
let previousEntry = '';

/*------------------------ Cached Element References ------------------------*/
const calcWrapper = document.querySelector(ELEMENTS.calcWrapper);
const display = document.querySelector(ELEMENTS.display);

/*----------------------------- Event Listeners -----------------------------*/
calcWrapper.addEventListener('click', (event) => {
  if (!event.target.classList.contains(ELEMENTS.btn.slice(1))) {
      return;
  }

  if (event.target.classList.contains(ELEMENTS.digit.slice(1))) {
      processDigit(event.target.innerText);
  }

  if (event.target.classList.contains(ELEMENTS.action.slice(1))) {
      processAction(event.target.innerText);
  }

  if (event.target.classList.contains(ELEMENTS.resultBtn.slice(1))) {
      computeResult();
  }

  if (event.target.innerText === 'C') {
      resetCalc();
  }

  updateDisplay();
});

/*-------------------------------- Functions --------------------------------*/

function processDigit(digit) {
  entry += digit;
}

function processAction(act) {
  if (entry === '') return;
  if (previousEntry !== '') {
      computeResult();
  }
  action = act;
  previousEntry = entry;
  entry = '';
}

function computeResult() {
  if (previousEntry === '' || entry === '' || action === '') return;
  let outcome;
  const prev = parseFloat(previousEntry);
  const curr = parseFloat(entry);
  switch (action) {
      case ACTIONS.plus:
          outcome = prev + curr;
          break;
      case ACTIONS.minus:
          outcome = prev - curr;
          break;
      case ACTIONS.times:
          outcome = prev * curr;
          break;
      case ACTIONS.over:
          outcome = prev / curr;
          break;
      default:
          return;
  }
  entry = outcome.toString();
  action = '';
  previousEntry = '';
}

function resetCalc() {
  entry = '';
  action = '';
  previousEntry = '';
}

function updateDisplay() {
  display.textContent = entry || previousEntry || '0';
}
