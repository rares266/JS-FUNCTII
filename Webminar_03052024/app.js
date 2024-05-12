// Sum of Numbers 

//const numbers = [1, 2, 1, 4, 1, 6, 7, 8, 9 , 10];
//console.log(numbers);

//OBJECTS
const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
}

const otherProps = {
    weight: 80,
    unit: 'kg'
}

//Adaugare proprietati in array
const newPerson = {...person, ...otherProps};
console.log(newPerson);

const { name } = person;
console.log(name);

/*
const keys = Object.keys(person);
person.interests = ['Sports', 'Cooking'];
console.log(keys, typeof keys, Array.isArray(keys));
*/

/*
const NAME = 'name';
const AGE = 'age';
const JOB = 'job';
const INTERESTS = 'interests';

const LABELS = {
    [NAME]: 'Name', //name = 0 se transforma de aia am pus [name]
    [AGE]: 'Age',
    [JOB]: 'Job'
}
Object.entries(person).forEach(([key, value]) =>  {
    console.log(`${LABELS[key]}: ${value}`);
})
Object.keys(LABELS).forEach(key => {

})
*/

/*
const unicqueNumbers = new Set();

numbers.forEach(n => unicqueNumbers.add(n));
console.log(unicqueNumbers);
*/


// SCOATE DUBLICATE 
//for(let i = 0; i < numbers.length; i++) {
 //   for(let j = i + 1; j < numbers.length; j++) {  
  //      if(numbers[i] === numbers[j]) {
   //         numbers.splice(j, 1);
 //           j--;
  //      }
  //  }}
   // console.log(numbers);



// SPREAD OPERATOR
/*
console.log('Max ', Math.max(...numbers));
console.log('Min ', Math.min(...numbers));

const newNumbers = [1, 2, 3 ,4];
const newArray = [...newNumbers, 5, 6, 7, 8];
*/

//numbers.concat(newNumbers);
//console.log(numbers);


//prices.forEach((price) => {
//    sum = sum + price; 
//})
//console.log(sum);

//for(let i = 0; i < prices.length; i++) {
//    sum = sum + prices[i];
//}

//let i = 0;
//while(i < prices.length) {
 //   sum = sum + prices[i];
//    i += 1;
//}



