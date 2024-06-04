/*-------------------------------- Constants --------------------------------*/
const ELEMENTS = {
calcWrapper: '#calculator',
btn: '.button',
digit: '.number',
action: '.operator',
resultBtn: '.equals',
resetBtn: '.clear'
};

const ACTIONS = {
plus: '+',
minus: '-',
times: '*',
over: '/'
};

/*------------------------------- Variables -------------------------------*/
// Variables to store the current entry and the chosen action
let entry = '';
let action = '';
let previousEntry = '';

/*------------------------ Cached Element References ------------------------*/
// Cache a reference to the main calculator element
const calcWrapper = document.querySelector(ELEMENTS.calcWrapper);

/*----------------------------- Event Listeners -----------------------------*/
// Event delegation: add an event listener to the calculator element
calcWrapper.addEventListener('click', (event) => {
// This log is for testing purposes to verify we're getting the correct value
// You have to click a button to see this log
console.log(event.target.innerText);

// Check if the clicked element is a button
if (!event.target.classList.contains(ELEMENTS.btn.slice(1))) {
  return;
}

// Check if the clicked element is a number button
if (event.target.classList.contains(ELEMENTS.digit.slice(1))) {
  processDigit(event.target.innerText);
}

// Check if the clicked element is an operator
if (event.target.classList.contains(ELEMENTS.action.slice(1))) {
  processAction(event.target.innerText);
}

// Check if the clicked element is the equals button
if (event.target.classList.contains(ELEMENTS.resultBtn.slice(1))) {
  computeResult();
}

// Check if the clicked element is the clear button
if (event.target.classList.contains(ELEMENTS.resetBtn.slice(1))) {
  resetCalc();
}
});

/*-------------------------------- Functions --------------------------------*/

// Function to handle number button clicks
function processDigit(digit) {
entry += digit;
console.log('Current Entry:', entry); // For testing purposes
}

// Function to handle operator button clicks
function processAction(act) {
if (entry === '') return; // Prevent setting action if no number is entered
if (previousEntry !== '') {
  computeResult(); // Calculate result if there was a previous entry and action
}
action = act;
previousEntry = entry;
entry = '';
console.log('Action:', action); // For testing purposes
}

// Function to compute the result
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
console.log('Outcome:', outcome); // For testing purposes
}

// Function to clear the calculator
function resetCalc() {
entry = '';
action = '';
previousEntry = '';
console.log('Calculator reset'); // For testing purposes
}


