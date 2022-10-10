// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Dati
let num = 0;
let fizz = 'Fizz';
let buzz = 'Buzz';
let fizzBuzz = 'FizzBuzz';

// Ciclo iniziale per stampare i numeri in console
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        const col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("red");
        col.innerHTML = fizzBuzz;
        document.querySelector(".row").append(col);
    }

    else if (i % 3 === 0) {
        const col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("violet");
        col.innerHTML = fizz;
        document.querySelector(".row").append(col);
    }

    else if (i % 5 === 0) {
        const col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("yellow");
        col.innerHTML = buzz;
        document.querySelector(".row").append(col);
    }

    else {
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = i;
        document.querySelector(".row").append(col);;
    }
    
}