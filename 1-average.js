// DERS ORTALAMASI BULMA
// vize1 %30, vize2 %30, final %40

let mid1 = Number(prompt("1. vize notunuzu giriniz: "));
let mid2 = Number(prompt("2. vize notunuzu giriniz: "));
let final = Number(prompt("Final notunuzu giriniz: "));

let average = mid1 * 0.30 + mid2 * 0.30 + final * 0.40;

if (average >= 60) {
    alert(`Tebrikler, ortalamanız ${average} ve geçtiniz.`)
} else {
    alert("Ortalamanız " + average + ", kaldınız.")
}

