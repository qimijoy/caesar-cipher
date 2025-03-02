import { CYR_SMALL, LAT_SMALL, initShiftAlphabet, crypt } from './caesar.js';
import text from '../../data/big-text.json';
import { buildChart } from './charts.js';

document.addEventListener('DOMContentLoaded', () => {
	const TAI_IN = document.getElementById('textareaI_IN');
	const TAI_OUT = document.getElementById('textareaI_OUT');
	const KEYI = document.getElementById('inputI_KEY');
	const TAII_IN = document.getElementById('textareaII_IN');
	const TAII_OUT = document.getElementById('textareaII_OUT');
	const KEYII = document.getElementById('inputII_KEY');
	const TAIII_IN = document.getElementById('textareaIII_IN');
	const TAIII_OUT = document.getElementById('textareaIII_OUT');
	const KEYIII = document.getElementById('inputIII_KEY');

	document.querySelectorAll('.insert-text-link').forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();

			switch (link.id) {
				case 'insertCYR':
					TAI_IN.value = CYR_SMALL;
					KEYI.value = 0;
					crypt(TAI_IN, TAI_OUT, initShiftAlphabet(KEYI.value));
					break;

				case 'insertLAT':
					TAI_IN.value = LAT_SMALL;
					KEYI.value = 0;
					crypt(TAI_IN, TAI_OUT, initShiftAlphabet(KEYI.value));
					break;

				case 'insertShifr':
					TAII_IN.value = link.textContent;
					KEYII.value = 0;
					crypt(TAII_IN, TAII_OUT, initShiftAlphabet(-KEYII.value));
					break;

				case 'insertBigText':
					TAIII_IN.value = text.text;
					KEYIII.value = 0;
					crypt(TAIII_IN, TAIII_OUT, initShiftAlphabet(KEYIII.value));
					buildChart(TAIII_OUT.value);
					break;

				default:
					break;
			}
		});
	});
});
