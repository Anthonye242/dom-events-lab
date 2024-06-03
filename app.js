/*-------------------------------- Constants --------------------------------*/
const SELECTORS = {
    calculator: '#calculator',
    button: '.button',
    number: '.number',
    operator: '.operator',
    equals: '.equals',
    clear: '.clear'
  };
  
  const OPERATORS = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/'
  };
  
  /*-------------------------------- Variables --------------------------------*/
  // Variables to store the current input and the operator
  let currentInput = '';
  let operator = '';
  let previousInput = '';
  
  /*------------------------ Cached Element References ------------------------*/
  // Cache a reference to the parent calculator element
  const calculator = document.querySelector(SELECTORS.calculator);
  
  /*----------------------------- Event Listeners -----------------------------*/
  // Event delegation: add an event listener to the calculator element
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Check if the clicked element is a button
    if (!event.target.classList.contains(SELECTORS.button.slice(1))) {
      return;
    }
  
    // Check if the clicked element is a number button
    if (event.target.classList.contains(SELECTORS.number.slice(1))) {
      handleNumber(event.target.innerText);
    }
  
    // Check if the clicked element is an operator
    if (event.target.classList.contains(SELECTORS.operator.slice(1))) {
      handleOperator(event.target.innerText);
    }
  
    // Check if the clicked element is the equals button
    if (event.target.classList.contains(SELECTORS.equals.slice(1))) {
      calculateResult();
    }
  
    // Check if the clicked element is the clear button
    if (event.target.classList.contains(SELECTORS.clear.slice(1))) {
      clearCalculator();
    }
  });
  
  /*-------------------------------- Functions --------------------------------*/
  
  // Function to handle number button clicks
  function handleNumber(number) {
    currentInput += number;
    console.log('Current Input:', currentInput); // For testing purposes
  }
  
  // Function to handle operator button clicks
  function handleOperator(op) {
    if (currentInput === '') return; // Prevent setting operator if no number is entered
    if (previousInput !== '') {
      calculateResult(); // Calculate result if there was a previous input and operator
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    console.log('Operator:', operator); // For testing purposes
  }
  
  // Function to calculate the result
  function calculateResult() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
      case OPERATORS.add:
        result = prev + current;
        break;
      case OPERATORS.subtract:
        result = prev - current;
        break;
      case OPERATORS.multiply:
        result = prev * current;
        break;
      case OPERATORS.divide:
        result = prev / current;
        break;
      default:
        return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    console.log('Result:', result); // For testing purposes
  }
  
  // Function to clear the calculator
  function clearCalculator() {
    currentInput = '';
    operator = '';
    previousInput = '';
    console.log('Calculator cleared'); // For testing purposes
  }
  
