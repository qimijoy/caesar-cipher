document.addEventListener('DOMContentLoaded', () => {
	// Alphabets
	const CYR_SMALL = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
	const CYR_BIG = CYR_SMALL.toUpperCase();
	const LAT_SMALL = "abcdefghijklmnopqrstuvwxyz";
	const LAT_BIG = LAT_SMALL.toUpperCase();

	const textareaI_IN = document.getElementById('textareaI_IN');
	const textareaI_OUT = document.getElementById('textareaI_OUT');
	const inputI = document.getElementById('inputI_KEY');
	const buttonIplus = document.getElementById('buttonI_plus')
	const buttonIminus = document.getElementById('buttonI_minus')

	let shiftedCyrSmall = '';
	let shiftedCyrBIG = '';
	let shiftedLatSmall = '';
	let shiftedLatBIG = '';

	const initShiftAlphabet = (key) => {
		const k_cyr = key % CYR_SMALL.length;
		const k_lat = key % LAT_BIG.length;

		shiftedCyrSmall = CYR_SMALL.slice(k_cyr) + CYR_SMALL.slice(0, k_cyr);
		shiftedCyrBIG = CYR_BIG.slice(k_cyr) + CYR_BIG.slice(0, k_cyr);
		shiftedLatSmall = LAT_SMALL.slice(k_lat) + LAT_SMALL.slice(0, k_lat);
		shiftedLatBIG = LAT_BIG.slice(k_lat) + LAT_BIG.slice(0, k_lat);
	}

	// Caesar Algorithm
	const crypt = (textareaIN, textareaOUT) => {
		textareaOUT.value = "";

		for (let i = 0; i < textareaIN.value.length; i++) {
			if (CYR_SMALL.includes(textareaIN.value[i])) {
				textareaOUT.value += shiftedCyrSmall[CYR_SMALL.indexOf(textareaIN.value[i])];
			} else if (CYR_BIG.includes(textareaIN.value[i])) {
				textareaOUT.value += shiftedCyrBIG[CYR_BIG.indexOf(textareaIN.value[i])];
			}	else if (LAT_SMALL.includes(textareaIN.value[i])) {
				textareaOUT.value += shiftedLatSmall[LAT_SMALL.indexOf(textareaIN.value[i])];
			}	else if (LAT_BIG.includes(textareaIN.value[i])) {
				textareaOUT.value += shiftedLatBIG[LAT_BIG.indexOf(textareaIN.value[i])];
			}	else {
				textareaOUT.value += textareaIN.value[i];
			}
		}
	}

	textareaI_IN.addEventListener('input', () => {
		initShiftAlphabet(inputI.value);
		crypt(textareaI_IN, textareaI_OUT);
	});

	inputI.addEventListener('input', () => {
		initShiftAlphabet(inputI.value);
		crypt(textareaI_IN, textareaI_OUT);
	});

	buttonIplus.addEventListener('click', () => {
		inputI.value < 0 ? inputI.value = 0 : inputI.value++;
		initShiftAlphabet(inputI.value);
		crypt(textareaI_IN, textareaI_OUT);
	});

	buttonIminus.addEventListener('click', () => {
		inputI.value <= 0 ? inputI.value = 0 : inputI.value--;
		initShiftAlphabet(inputI.value);
		crypt(textareaI_IN, textareaI_OUT);
	});
})

//   // -------------------------------Дешифрование--------------------------------
//   let text_in2 = $(".ta-in")[1];
//   let text_out2 = $(".ta-out")[1];
//   let key2 = $(".input-key")[1];
//   let btn_plus2 = $(".textarea-buttons__item")[2];
//   let btn_minus2 = $(".textarea-buttons__item")[3];
//
//   text_in2.oninput = function () {
//     initShiftAlph(-key2.value);
//     crypt(text_in2, text_out2);
//   };
//
//   key2.oninput = function () {
//     // Создадим "сдвинутый" алфавит
//     initShiftAlph(-key2.value);
//     crypt(text_in2, text_out2);
//   };
//
//   btn_plus2.onclick = function () {
//     if (key2.value < 0) {
//       key2.value = 0;
//     } else {
//       key2.value++;
//     }
//     initShiftAlph(-key2.value);
//     crypt(text_in2, text_out2);
//   };
//
//   btn_minus2.onclick = function () {
//     if (key2.value > 0) {
//       key2.value--;
//     } else {
//       key2.value = 0;
//     }
//     initShiftAlph(key2.value);
//     crypt(text_in2, text_out2);
//   };
//


//
//   // =========================== HISTOGRAMM ============================
//   let data = {
//     labels: CYR_SMALL.split(""),
//     series: [
//       [
//         0.0801,
//         0.0159,
//         0.0454,
//         0.017,
//         0.0298,
//         0.0845,
//         0.0004,
//         0.0094,
//         0.0165,
//         0.0735,
//         0.0121,
//         0.0349,
//         0.044,
//         0.0321,
//         0.067,
//         0.1097,
//         0.0281,
//         0.0473,
//         0.0547,
//         0.0626,
//         0.0262,
//         0.0026,
//         0.0097,
//         0.0048,
//         0.0144,
//         0.0073,
//         0.0036,
//         0.0004,
//         0.019,
//         0.0174,
//         0.0032,
//         0.0064,
//         0.0201,
//       ],
//     ],
//   };
//
//   let options = {
//     height: 600,
//     seriesBarDistance: 10,
//     axisX: {
//       offset: 20,
//     },
//     axisY: {
//       offset: 60,
//     },
//   };
//
//   new Chartist.Bar("#hist1", data, options);
//
//   let text_in3 = $(".ta-in")[2];
//   let text_out3 = $(".ta-out")[2];
//   let key3 = $(".input-key")[2];
//   let btn_plus3 = $(".textarea-buttons__item")[4];
//   let btn_minus3 = $(".textarea-buttons__item")[5];
//   buildHist(text_out3.value);
//
//   text_in3.oninput = function () {
//     initShiftAlph(key3.value);
//     crypt(text_in3, text_out3);
//     buildHist(text_out3.value);
//   };
//
//   key3.oninput = function () {
//     initShiftAlph(key3.value);
//     crypt(text_in3, text_out3);
//     buildHist(text_out3.value);
//   };
//
//   btn_plus3.onclick = function () {
//     key3.value++;
//     initShiftAlph(key3.value);
//     crypt(text_in3, text_out3);
//     buildHist(text_out3.value);
//   };
//
//   btn_minus3.onclick = function () {
//     key3.value--;
//     initShiftAlph(key3.value);
//     crypt(text_in3, text_out3);
//     buildHist(text_out3.value);
//   };
//
//   function buildHist(text) {
//     // Позиция буквы в алфавите
//     let pos = 0;
//     let data1 = {
//       labels: CYR_SMALL.split(""),
//       series: [
//         data.series[0],
//         [
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//           0,
//         ],
//       ],
//     };
//     // Выкинем из текста все символы, кроме русских букв
//     text = text.toLowerCase().replace(/[^а-яА-ЯёЁ]+/g, "");
//
//     for (let i = 0; i < text.length; i++) {
//       pos = CYR_SMALL.indexOf(text[i]);
//       data1.series[1][pos] += 1 / text.length;
//     }
//     new Chartist.Bar("#hist2", data1, options);
//   }
//
//   // --------------------------- Вставка в <textarea> ------------------------
//   let big_text =
//     "Кж, кж, ё тлфпивр, цхдщхуъ цчхшщх иоёт шихр нл щлсшщ.  Дщъ поилшщфъе эпщжщъ ив фжилчфёсж штвяжтп фп хкпф чжо... Цхшщхрщл, съкж нл ив, фл ъьхкпщл, дщх цчжикж лйх эпщжщж, цчхшщх хфж ожяпычхижфж, п фж цлчивр иойтёк сжнлщшё, ющх дщх злшшувштлффвр фжзхч зъси. Фх ив ъкпипщлшг, фжшсхтгсх цчхшщх ухнфх лйх чжшяпычхижщг – кхшщжщхюфх тпяг офжщг жтйхчпщу япычхижфпё.  Фжилчфхл фънфх шклтжщг флзхтгяхл хщшщъцтлфпл ктё щль, сщх 'фл и щлул' п иххзал фпсхйкж фл штвяжт цчх счпцщхйчжыпе, япычщлсшщв, стеюп п кчъйп шщчжффвл штхилюсп. Пфыхчужэпё ишлйкж ижнфлряпу ыжсщхчху фж цчхщёнлфпп ишлр пшщхчпп юлтхилюлшщиж, фжцчпулч, ъофжи юпштлффхшщг ичжнлшсхйх ихршсж п йкл чжоулалфв лйх хщчёкв, хцвщфвр цхтсхихклэ зло щчъкж шухнлщ цчпкъужщг щжсщпсъ п чжозпщг жчупе ичжйж. Птп, фжцчпулч, ижу цх шлсчлщъ шсжожтп, ющх юлчло флшсхтгсх кфлр фжюфмщшё чжшцчхкжнж звщхихр щльфпсп ш зхтгяпуп шспксжуп, п ив щлцлчг шщжтп фхшпщлтлу шхсчхилффхр щжрфв п чжкълщлшг, ющх хсжнлщлшг и юпштл флуфхйпь шюжшщтпиюпсхи, сщх ъчимщ шлзл клямиъе шщпчжтсъ. Ш кчлифпь ичлумф цхилтхшг цхшвтжщг йхфэхи по хкфхйх улшщж и кчъйхл, ющхзв цлчлкжщг дщъ ижнфъе пфыхчужэпе. Ичлуё ятх, йхфэв ънл кжифх хщцчжитлфв фж шижтсъ пшщхчпп, илкг цхёиптшё пфщлчфлщ п цчхщхсхтв цлчлкжюп пфыхчужэпп, фх фж шжуху клтл, цлчльижщпщг пфыхчужэпе ишм щжс нл цчхшщх.  П ш щль нл кчлифпь ичлумф текп ожкъужтпшг, ж сжс зв дщъ пфыхчужэпе цлчлкжщг щжс, ющхзв 'шихп' шухйтп лм цчхюлшщг п съцпщг цжчъ зпщсхрфхи цх ивйхкфхр элфл, ж 'юънпл', кжнл лштп цлчльижщёщ йхфэж, ъипкёщ иулшщх шххзалфпё флцхфёщфъе уляжфпфъ п, цхсчъщпи цжтгэлу ъ ипшсж, хщцъшщёщ йхфэж иулшщл ш дщхр лчъфкхр (схфлюфх, йхфэъ сжщлйхчпюлшсп флтгоё шххзажщг, ющх шхклчнпщшё и шххзалфпп п сжс иотхужщг япыч). Ъкхзфх, шхйтжшпщлшг? Ихщ щжс п ихофпстп счпцщхйчжыпё п счпцщхжфжтпо – фжъсп х щху, сжс шсчвщг щх, ющх хщсчвщх, п хщсчвщг щх, ющх шсчвщх.  Щжс ихщ, ихоичжажёшг с фжялуъ йлчхе - Эложчг, сжс ув ънл офжлу, звт фл къчжс, п фжпзхтлл элффвл шилклфпё, фжцчпулч, х цхтхнлфпп ичжнлшспь ихршс, цлчлшвтжт шихпу йлфлчжтжу пулффх и ожяпычхижффху ипкл цчп цхухап хшхзхйх япычж. П ьхщг и кжтгфлрялу ув цхсжнлу, ющх дщхщ япыч иотхужщг шлрюжш ухнлщ кжнл члзмфхс, фх и щл ичлулфж текп (цх зхтгялр южшщп) цхфёщпё фл пултп х сжспь-щх щжу япычжь, кж п иххзал звтп злойчжухщфв. Лам цхуфпщл х эпщжщл? Цх-цчлнфлуъ фпсжспь пклр? Щжс кжижрщл нл чжшшухщчпу улщхк, схщхчвр ихямт и пшщхчпе цхк фжоижфплу улщхкж япычхижфпё Эложчё, ёчсхйх цчлкшщжипщлтё япычж цчхшщхр ожулфв.";
//
//   $(".insert-text-link").on("click", function (e) {
//     e.preventDefault();
//     switch ($(this).attr("href")) {
//       case "#rus":
//         text_in1.value = CYR_SMALL;
//         initShiftAlph(key1.value);
//         crypt(text_in1, text_out1);
//         break;
//
//       case "#eng":
//         text_in1.value = LAT_SMALL;
//         initShiftAlph(key1.value);
//         crypt(text_in1, text_out1);
//         break;
//
//       case "#shifr":
//         text_in2.value = $(this).text();
//         initShiftAlph(-key2.value);
//         crypt(text_in2, text_out2);
//         break;
//
//       case "#big-text":
//         text_in3.value = big_text;
//         key3.value = 0;
//         initShiftAlph(key3.value);
//         crypt(text_in3, text_out3);
//         buildHist(text_out3.value);
//         break;
//
//       default:
//         break;
//     }
//   });
//
// };
