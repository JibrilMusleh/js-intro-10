const numbers = [5, 3, 2, 20];

const oddOrEven = numbers.map((numbers) => numbers % 2 === 0 ? 'even' : 'odd');
console.log(oddOrEven);


const sentences = ['Good morning', 'I like arrays', 'It is Saturday'];
// each sentence's first word -> ['Good', 'I', 'It'];


const firstWord = sentences.map((sentences) => sentences.split(' ')[0]);
console.log(firstWord);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]


const roundUp = salaries.map ((salary) => salary.toFixed(2));
console.log(roundUp);