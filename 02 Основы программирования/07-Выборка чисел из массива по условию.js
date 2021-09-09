const numbers = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15];

const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
    
    if (evenNumbers.length === 3) break;
}