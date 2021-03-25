let mixedDataTypes = [1, "flk", 1.2, 5, 6, 7];

console.log(mixedDataTypes.length);

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle ", "Amazon", "bimo"];
console.log(itCompanies);

console.log(itCompanies[0]);
console.log(itCompanies[((itCompanies.length - 1) / 2) + 0.5])
console.log(itCompanies[itCompanies.length - 1])
*/


/*let i = 0;
let a = 0;
let somme = 0;
while (i < 101) {
  a = i * i
  if (i % 2 == 0) {
    console.log(i + " * " + i + " = " + a);
    somme = somme + i;
  }

  console.log(somme)
  i++

}

*/
/*
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let Z = []
for (i = 0; i < countries.length; i++) {
  let T = [(countries[i]), (countries[i].length), (countries[i].substring(0, 3).toUpperCase())]
  Z.push(T);

} console.log(Z)
*/

/*








let








const f0 = () => {

}



for (let a = 0; a < 11; a++) {
  console.log(`${a}x
   ${a} =
                ${a * a}`);
}


let dog = { name: " name", legs: "legs", color: "color", age: 50 };
console.log(dog.name);
*/

/*var x;  // ne l'untilise pas//
let x = 5;       //le valeur de les variables  Symbol ; undefined ; null; string  '' or ""; Boolean ;//

const y = 5;
shift // remove first element
unshift // put in first place
pop // remove last element


let x = {
    name = "dkdkdld",
    lele = "flkfkf",
}

let y = [1, 2, " null"];

console.log(x)
console.log(y);


console.log(z);
*/
/*
let str = "This is a sentence.";
let words = str.split(" ");
console.log(words);
console.log(words.length);
let vowels = str.join("");
let number = vowels.length;
let nuvowels;

for (i = 0; i < number; i++) {

};

console.log(str.length);

*/

/*

const car_rental = (mileage, days) => {
  let p_d = 0.5;
  const ins = 0.8;
  const vat = 0.18;
  let r1 = 0.7;
  let r2 = 0.4;
  let r3 = 0.3;
  let cash;
  let best;
  if (mileage < 101) {

    cash = r1 * mileage;
  }
  if (mileage > 100 && mileage < 1001) {

    cash = r2 * (mileage - 100) + (r1 * 100);
  }
  if (mileage > 1000) {

    cash = r3 * (millage - 1000) + (r1 * 100) + (r2 * 900);
  }

  let sumca2 = (days * p_d + ins * days) * (1 + vat);
  let sumca1 = (cash + ins * days) * (1 + vat);

  if (sumca1 < sumca2) {
    best = "Daily rate better then Per kilometers";
  } else {
    best = "Per kilometers  better then Daily rate";
  }

  return {
    perKms: sumca1,
    perDays: sumca2,
    best: best
  }
};
car_rental(1000, 5);


*/

/* let array = [];
  interval = [start, end];
  intLen = Array.length;
  if (array.isArray(interval) = "true") {
    for (i = 0; i < intLen; i++) {

      array.find[]
      function myFunction(value, index, array) {

      }
    }



  }
*/


/*
const intervaloverlapping = (intervals) => {
  let interval = [start, end];
  intLen = intervals.length;
  for (let index = 0; index < intervals.length; index++) {
    for (let j = insdex + 1; index < intervals.length; j++) {
      if((interval[i][0]))


*/
// substr.substring(1, 3);//chosir les characerter deux trois et quatre;
// str.substring(2);// elle enleve i caractere;



/*const longest = (word, k) => {
  word.substring(k);
  wordlength = word.length;
  str = word.split();
  let the_word;
  let key;
  length;
  for (i = 0; i < wordlength; i++) {
    for (j = i + 1; i < wordlength || key < k; j++) {
      if (str[i] == str[i + 1]) {
        the_word = str[i] + str[i + 1];
        length += 1;
      }
      else {
        the_word = str[i] + str[i + 1];
        length += 1;
        key += 1;



      }
    } break;
  }*/
/*


}*/

/*for (i = 0; i < wholikesit; i++) {
  if (wholikesit = 0) {
    console.log("no one likes this");*/

/*
const like = (likes) => {
  let aff;
  let wholikesit = likes.length;
  if (wholikesit == 0) {
    aff = console.log("no one likes this")
  };
  if (wholikesit == 1) {
    aff = console.log();
  }
  if (wholikesit == 2) {
    aff = console.log(`${[0]}` + `${[1]}` + "likes this");
  }
  if (wholikesit == 3) {
    aff = console.log(`${[0]}` + `${[1]}` + `${[2]}` + "likes this");
  }
  if (wholikesit > 3) {
    aff = console.log(`${[0]}` + `${[1]}` + `${wholikesit - 2}` + "likes this");
  }
  return window.alert(aff);
}*/
//---------------------------------------------------------------------------------------

/*
const sumtreyfiv = (number) => {
  let list = [];
  let summe = 0;
  for (i = 1; i < number; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
      list.push(i);
      summe = summe + i;
    }
  }
  return (summe);
}*/
/*
const digitalroot = (n) => {
  // let sum1 = 0;
  // let sum2 = 0;
  // while (number != 0) {
  //   sum1 = sum1 + (number % 10);
  //   number = parseInt(number / 10);
  // }
  // while
  // return sum1;
  let sum = 0;

  // Loop to do sum while 
  // sum is not less than 
  // or equal to 9 
  while (n > 0 || sum > 9) {
    if (n == 0) {
      n = sum;
      sum = 0;
    }
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;

  console.log(digitalroot(99));*/


function digitalroot(num) {
  let numStr = num;
  numStr = num.toString();
  numStr = numStr.split("");
  numStr = numStr.join("+");
  numStr = eval(numStr);

}
console.log(digitalroot(155));



