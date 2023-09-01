document.addEventListener('DOMContentLoaded', () => {
	console.log('Hello, World!');
})

// window.onload = function () {
//   // Текущее положение вертикального скролла
//   let scrollTopPos = $(window).scrollTop();
//   let parts = [
//     $("#partI").offset().top,
//     $("#partII").offset().top,
//     $("#partIII").offset().top,
//     $("#partIV").offset().top,
//   ];
//   definePosition();
//
//   // Отображение текущего положения скролла в навигации
//   $(window).on("scroll", function () {
//     scrollTopPos = $(window).scrollTop();
//     definePosition();
//   });
//
//   // При изменении размеров окна
//   $(window).on("resize", function () {
//     // Заново рассчитываем положение блоков на странице
//     parts = [
//       $("#partI").offset().top,
//       $("#partII").offset().top,
//       $("#partIII").offset().top,
//       $("#partIV").offset().top,
//     ];
//     definePosition();
//
//     // Если был открыт бургер и ширина стала больше 1200, то закрываем бургер
//     if ($(window).width() > 1200) {
//       $(".menuBurger").removeClass("menuBurger_state-open");
//       $(".menuBurger__part").removeClass("menuBurger_state-open");
//       $(".site-header").removeClass("menuBurger_state-open");
//       $(".menu").removeClass("menuBurger_state-open");
//     }
//   });
//
//
//
//   // Скролл к выбранному разделу в навигации
//   $(".menu-link").on("click", function (e) {
//     e.preventDefault();
//     $("html, body").animate(
//       {
//         scrollTop: $($(this).attr("href")).offset().top - 100,
//       },
//       500,
//       "swing"
//     );
//   });
//
//   // Возврат наверх
//   $(".return-to-top").on("click", function (e) {
//     e.preventDefault();
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       1000
//     );
//   });
//
//   // Определяем текущее положение
//   function definePosition() {
//     $(".menu-link").removeClass("menu-link_active");
//     switch (true) {
//       case scrollTopPos < parts[1] - 110:
//         $(".menu-link[href='#partI']").addClass("menu-link_active");
//         break;
//       case scrollTopPos < parts[2] - 110:
//         $(".menu-link[href='#partII']").addClass("menu-link_active");
//         break;
//       case scrollTopPos < parts[3] - 110:
//         $(".menu-link[href='#partIII']").addClass("menu-link_active");
//         break;
//       case scrollTopPos >= parts[3] - 110:
//         $(".menu-link[href='#partIV']").addClass("menu-link_active");
//       default:
//         break;
//     }
//   }
//
//   // ============================= CAESAR CIPHER =============================
//   // Алфавиты
//   const CYR_SMALL = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
//   const CYR_BIG = CYR_SMALL.toUpperCase();
//   const LAT_SMALL = "abcdefghijklmnopqrstuvwxyz";
//   const LAT_BIG = LAT_SMALL.toUpperCase();
//
//   // -------------------------------Шифрование--------------------------------
//   let text_in1 = $(".ta-in")[0];
//   let text_out1 = $(".ta-out")[0];
//   let key1 = $(".input-key")[0];
//   let btn_plus1 = $(".textarea-buttons__item")[0];
//   let btn_minus1 = $(".textarea-buttons__item")[1];
//
//   text_in1.oninput = function () {
//     initShiftAlph(key1.value);
//     crypt(text_in1, text_out1);
//   };
//
//   key1.oninput = function () {
//     initShiftAlph(key1.value);
//     crypt(text_in1, text_out1);
//   };
//
//   btn_plus1.onclick = function () {
//     if (key1.value < 0) {
//       key1.value = 0;
//     } else {
//       key1.value++;
//     }
//     initShiftAlph(key1.value);
//     crypt(text_in1, text_out1);
//   };
//
//   btn_minus1.onclick = function () {
//     if (key1.value > 0) {
//       key1.value--;
//     } else {
//       key1.value = 0;
//     }
//     initShiftAlph(key1.value);
//     crypt(text_in1, text_out1);
//   };
//
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
//   function initShiftAlph(k) {
//     // Ключи по модулю длины алфавита
//     let k_cyr = k % CYR_SMALL.length;
//     let k_lat = k % LAT_BIG.length;
//     // Отбрасываем первые k букв и добавляем их в конец
//     shift_cyr_small = CYR_SMALL.slice(k_cyr) + CYR_SMALL.slice(0, k_cyr);
//     shift_cyr_big = CYR_BIG.slice(k_cyr) + CYR_BIG.slice(0, k_cyr);
//     shift_lat_small = LAT_SMALL.slice(k_lat) + LAT_SMALL.slice(0, k_lat);
//     shift_lat_big = LAT_BIG.slice(k_lat) + LAT_BIG.slice(0, k_lat);
//   }
//
//   function crypt(inp, outp) {
//     let i_shift = 0; // Индекс сдвигаемого символа
//     outp.value = ""; // При каждом срабатывании сначала очищаем результат
//     for (let i = 0; i < inp.value.length; i++) {
//       // Если строчная буква алфавита русского языка
//       if (CYR_SMALL.indexOf(inp.value[i]) !== -1) {
//         // находим в исходном алфавите индекс символа
//         i_shift = CYR_SMALL.indexOf(inp.value[i]);
//         // Записываем в строку символ по этой позиции из сдвинутого алфавита
//         outp.value += shift_cyr_small[i_shift];
//       } // Если прописная буква алфавита русского языка
//       else if (CYR_BIG.indexOf(inp.value[i]) !== -1) {
//         i_shift = CYR_BIG.indexOf(inp.value[i]);
//         outp.value += shift_cyr_big[i_shift];
//       } // Если строчная буква алфавита английского языка
//       else if (LAT_SMALL.indexOf(inp.value[i]) !== -1) {
//         i_shift = LAT_SMALL.indexOf(inp.value[i]);
//         outp.value += shift_lat_small[i_shift];
//       } // Если прописная буква алфавита английского языка
//       else if (LAT_BIG.indexOf(inp.value[i]) !== -1) {
//         i_shift = LAT_BIG.indexOf(inp.value[i]);
//         outp.value += shift_lat_big[i_shift];
//       } // В противом случае переписываем символ без изменений
//       else outp.value += inp.value[i];
//     }
//   }
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
//   // ============================= КОММЕНТАРИИ =============================
//   // Загрузим комментарии из локального хранилища
//   initStorage();
//
//   // Добавление комментария
//   $(".commentary-form__button-add").on("click", addComment);
//
//   // Удаление комментария (исопльзуем делегированное событие, т.к. кнопка может изначально отсутствовать)
//   $("body").on("click", ".commentary-item__delete", function () {
//     $(this).parent().remove();
//
//     // Сохраняем изменения в хранилище
//     addToStorage();
//
//     // Если удалили все комментарии
//     if ($(".commentary-item").length == 0) {
//       $(".commentary__none").show();
//       localStorage.removeItem("comments");
//     }
//   });
//
//   function addComment() {
//     let commName = $(".commentary-name").val();
//     let commText = $(".commentary-text").val();
//     let commDate = new Date().toLocaleString();
//
//     // Если есть и имя, и текст, то добавляем комментарий
//     if (commName && commText) {
//       $(".commentary__list").prepend(`
//         <div class="commentary-item">
//           <button class="commentary-item__delete"></button>
//           <div class="commentary-item__author">${commName}</div>
//           <div class="commentary-item__text">${commText}</div>
//           <div class="commentary-item__date">${commDate}</div>
//         </div>
//       `);
//
//       // Возвращаем элементы формы в исходное положение
//       commName = $(".commentary-name").val("");
//       commText = $(".commentary-text").val("");
//       $(".commentary-name").removeClass("fill-me");
//       $(".commentary-text").removeClass("fill-me");
//       $(".commentary__none").hide();
//
//       // Сохраняем изменения в хранилище
//       addToStorage();
//
//       // Если что-то не введено
//     } else if (!commName && commText) {
//       $(".commentary-name").addClass("fill-me");
//       $(".commentary-text").removeClass("fill-me");
//     } else if (!commText && commName) {
//       $(".commentary-text").addClass("fill-me");
//       $(".commentary-name").removeClass("fill-me");
//     } else {
//       $(".commentary-name").addClass("fill-me");
//       $(".commentary-text").addClass("fill-me");
//     }
//   }
//
//   function initStorage() {
//     if (localStorage.getItem("comments") == null) {
//       $(".commentary__none").show();
//     } else {
//       $(".commentary__list").html(localStorage.getItem("comments"));
//       $(".commentary__none").hide();
//     }
//   }
//
//   function addToStorage() {
//     let content = $(".commentary__list").html();
//     localStorage.setItem("comments", content);
//   }
// };
