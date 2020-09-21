// let message = 'Hello World';//дали имя переменной message//String
// alert('Hello World');

//Числа
// const sum = 2 + 2;
// alert(sum);

//prompt - возврат //parseFloat - не целое число. Роевращаем текст в цифру
const age = parseFloat(prompt('Enter age'));
alert('Your age is' + age);

const nextAge = add(age, 1);
alert('Next age is' + nextAge);

if(age < 18) {  
    alert('You under age'); 

} else { 
    alert('You are adult!');
}

function add(a, b) { 
    const sum = a + b;
    return sum;
}