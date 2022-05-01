const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

function slices(foods){
  let modifiedFood = foods.slice(1, 4);

  console.log(modifiedFood);
}

slices(foods);

function splices(foods){
  foods.splice(2, 0, "noodles", "icecream");

  console.log(foods);
}

splices(foods);

const numberArray = [12,324,213,4,2,3,45,4234];

function isEven(numberArray){
  let newArray = numberArray.filter(function(number){
    return (number % 2 === 0);
  });

  console.log(newArray);
}

isEven(numberArray);

function isPrime(numberArray){
  let newArray = numberArray.filter(function(number){
    for(let i = 2; i * i <= number; i++){
      if (number % i === 0)
      return false;
    }
    return number !== 1;
  });
  return newArray;
}

console.log(isPrime(numberArray));

function nonPrime(numberArray){
  let prime = isPrime(numberArray);

  console.log(prime);

  let composite = numberArray.filter(function(number){
    return !prime.includes(number);
  });
  console.log(composite);
}

nonPrime(numberArray);

let even = numberArray.filter(data => data % 2==0);
console.log(even);

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray){
  var sqArray = myArray.map(function(number){
    return number * number;
  });
  console.log(sqArray);
}

findSquareOfNumbers(myArray);

function multiply(myArray){
  let product = myArray.reduce(function(number, acc){
    return number * acc;
  }, 1);

  console.log(product);
}

multiply([2, 3, 5, 10]);
