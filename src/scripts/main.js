import { initShiftAlphabet, crypt } from './components/caesar.js';
import { buildChart } from './components/charts.js';

document.addEventListener('DOMContentLoaded', () => {
	// TEXTAREA I
	const textareaI_IN = document.getElementById('textareaI_IN');
	const textareaI_OUT = document.getElementById('textareaI_OUT');
	const inputI = document.getElementById('inputI_KEY');
	const buttonIplus = document.getElementById('buttonI_plus');
	const buttonIminus = document.getElementById('buttonI_minus');

	textareaI_IN.addEventListener('input', () => {
		crypt(textareaI_IN, textareaI_OUT, initShiftAlphabet(inputI.value));
	});

	inputI.addEventListener('input', () => {
		crypt(textareaI_IN, textareaI_OUT, initShiftAlphabet(inputI.value));
	});

	buttonIplus.addEventListener('click', () => {
		if (inputI.value < 0) {
			inputI.value = 0;
		} else {
			inputI.value++;
		}

		crypt(textareaI_IN, textareaI_OUT, initShiftAlphabet(inputI.value));
	});

	buttonIminus.addEventListener('click', () => {
		if (inputI.value <= 0) {
			inputI.value = 0;
		} else {
			inputI.value--;
		}

		crypt(textareaI_IN, textareaI_OUT, initShiftAlphabet(inputI.value));
	});

	// TEXTAREA II
	const textareaII_IN = document.getElementById('textareaII_IN');
	const textareaII_OUT = document.getElementById('textareaII_OUT');
	const inputII = document.getElementById('inputII_KEY');
	const buttonIIplus = document.getElementById('buttonII_plus');
	const buttonIIminus = document.getElementById('buttonII_minus');

	textareaII_IN.addEventListener('input', () => {
		crypt(textareaII_IN, textareaII_OUT, initShiftAlphabet(-inputII.value));
	});

	inputII.addEventListener('input', () => {
		crypt(textareaII_IN, textareaII_OUT, initShiftAlphabet(-inputII.value));
	});

	buttonIIplus.addEventListener('click', () => {
		if (inputII.value < 0) {
			inputII.value = 0;
		} else {
			inputII.value++;
		}

		crypt(textareaII_IN, textareaII_OUT, initShiftAlphabet(-inputII.value));
	});

	buttonIIminus.addEventListener('click', () => {
		if (inputII.value <= 0) {
			inputII.value = 0;
		} else {
			inputII.value--;
		}

		crypt(textareaII_IN, textareaII_OUT, initShiftAlphabet(-inputII.value));
	});

	// TEXTAREA III
	const textareaIII_IN = document.getElementById('textareaIII_IN');
	const textareaIII_OUT = document.getElementById('textareaIII_OUT');
	const inputIII = document.getElementById('inputIII_KEY');
	const buttonIIIplus = document.getElementById('buttonIII_plus');
	const buttonIIIminus = document.getElementById('buttonIII_minus');
	buildChart(textareaIII_OUT.value);

	textareaIII_IN.addEventListener('input', () => {
		crypt(textareaIII_IN, textareaIII_OUT, initShiftAlphabet(inputIII.value));
		buildChart(textareaIII_OUT.value);
	});

	inputIII.addEventListener('input', () => {
		crypt(textareaIII_IN, textareaIII_OUT, initShiftAlphabet(inputIII.value));
		buildChart(textareaIII_OUT.value);
	});

	buttonIIIplus.addEventListener('click', () => {
		inputIII.value++;
		crypt(textareaIII_IN, textareaIII_OUT, initShiftAlphabet(inputIII.value));
		buildChart(textareaIII_OUT.value);
	});

	buttonIIIminus.addEventListener('click', () => {
		inputIII.value--;
		crypt(textareaIII_IN, textareaIII_OUT, initShiftAlphabet(inputIII.value));
		buildChart(textareaIII_OUT.value);
	});
});
