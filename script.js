class Calculator {
	constructor(previousOperandElement, currentOperandElement) {
		this.previousOperandTextElement = previousOperandTextElement
		this.currentOperandTextElement = currentOperandTextElement
		this.clear()
	}
	clear() {
		this.currentOperand = ''
		this.previousOperand = ''
		this.operation = undefined
}
	
	delete() {
}

	appendNumber(number) {
}

	chooseOperation(operation) {
}

	compute() {
}
	
	updateDisplay() {
}

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandtTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
