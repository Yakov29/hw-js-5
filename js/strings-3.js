const balance = 'Ваш баланс поповнено на 100';
console.log('Кількість символів завдання 3:', balance.length);
// 1 варіант
const balancePadEnd = balance.padEnd(29, 0);
console.log(balancePadEnd);
// 2 варіант
// console.log(balance.padEnd(29, 0));