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
// };
