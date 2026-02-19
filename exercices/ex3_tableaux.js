let notes = [12, 8, 15, 10, 7];

// 1. moyenne
let somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}
let moyenne = somme / notes.length;

// 2. meilleure note
let max = notes[0];
for (let i = 1; i < notes.length; i++) {
    if (notes[i] > max) {
        max = notes[i];
    }
}

// 3. nombre notes >= 10
let admis = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        admis++;
    }
}

console.log("Moyenne :", moyenne);
console.log("Meilleure note :", max);
console.log("Nombre d'admis :", admis);
