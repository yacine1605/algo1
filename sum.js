let set1 = [15, 1, 9],
  set2 = [9, 3, 6];
const obj = {};

for (let i = 0; i < set1.length; i++) {
  obj[set1[i]] = 1;
}
for (let i = 0; i < set2.length; i++) {
  if (obj[set2[i]] !== undefined) {
    obj[set2[i]] += 1;
  } else {
    obj[set2[i]] = 1;
  }
}
const keys = Object.keys(obj); /*Permet de sauvegarder les keys de l'objet */
console.log(keys);
let sum_commun = 0,
  sum_diff = 0;
for (let i = 0; i < keys.length; i++) {
  if (obj[keys[i]] == 2) {
    sum_commun += parseFloat(keys[i]);
  } else {
    sum_diff += parseFloat(keys[i]);
  }
}
console.log(obj);
console.log(sum_diff);
console.log(sum_commun)
