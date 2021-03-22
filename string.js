str = "";
let x;
let len = 0;
do {
  x = prompt("give char");
  if (x.length == 1) {
    str += x;
  }
} while (x != "." || x.length != 1);

console.log(str);
console.log("Length of str= ", str.length);

/*The number of char*/
for (let i = 0; i < str.length; i++) {
  if (str[i] != " " && str[i] != ".") {
    len += 1;
  }
}
console.log("NB_Char= ", len);

/*The number of world*/
len = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == " " || str[i] == ".") {
    len += 1;
  }
}
console.log("Nb_Words= ", len);

/*The number of vowels*/
len = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "o" ||
    str[i] == "i" ||
    str[i] == "u"
  ) {
    len += 1;
  }
}

console.log("NB_vowels= ", len);
