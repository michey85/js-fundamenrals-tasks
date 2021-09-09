// Задание 1
const spainCapital = 'Valencia';
let isCorrectAnswer;

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

// Добавьте код здесь, переписав конструкцию выше на switch
switch(spainCapital) {
    case 'Madrid':
        isCorrectAnswer = true;
        break;
    case 'madrid':
        isCorrectAnswer = true;
        break;
    case 'MADRID':
        isCorrectAnswer = true;
        break;
    default:
        isCorrectAnswer = false;
}


// Задание 2
const a = 1;
const b = 2;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Добавьте код здесь, переписав конструкцию выше на тернарный оператор
result = a + b < 4 ? 'Мало' : 'Много';