// Alphabets
export const CYR_SMALL = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
export const CYR_BIG = CYR_SMALL.toUpperCase();
export const LAT_SMALL = 'abcdefghijklmnopqrstuvwxyz';
export const LAT_BIG = LAT_SMALL.toUpperCase();

export const initShiftAlphabet = (key) => {
	const k_cyr = key % CYR_SMALL.length;
	const k_lat = key % LAT_BIG.length;

	return {
		shiftedCyrSmall: CYR_SMALL.slice(k_cyr) + CYR_SMALL.slice(0, k_cyr),
		shiftedCyrBIG: CYR_BIG.slice(k_cyr) + CYR_BIG.slice(0, k_cyr),
		shiftedLatSmall: LAT_SMALL.slice(k_lat) + LAT_SMALL.slice(0, k_lat),
		shiftedLatBIG: LAT_BIG.slice(k_lat) + LAT_BIG.slice(0, k_lat),
	};
};

// Caesar Algorithm
export const crypt = (textareaIN, textareaOUT, { shiftedCyrSmall, shiftedCyrBIG, shiftedLatSmall, shiftedLatBIG }) => {
	textareaOUT.value = '';

	for (let i = 0; i < textareaIN.value.length; i++) {
		if (CYR_SMALL.includes(textareaIN.value[i])) {
			textareaOUT.value += shiftedCyrSmall[CYR_SMALL.indexOf(textareaIN.value[i])];
		} else if (CYR_BIG.includes(textareaIN.value[i])) {
			textareaOUT.value += shiftedCyrBIG[CYR_BIG.indexOf(textareaIN.value[i])];
		} else if (LAT_SMALL.includes(textareaIN.value[i])) {
			textareaOUT.value += shiftedLatSmall[LAT_SMALL.indexOf(textareaIN.value[i])];
		} else if (LAT_BIG.includes(textareaIN.value[i])) {
			textareaOUT.value += shiftedLatBIG[LAT_BIG.indexOf(textareaIN.value[i])];
		} else {
			textareaOUT.value += textareaIN.value[i];
		}
	}
};
