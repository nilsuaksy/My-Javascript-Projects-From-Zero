/*

    1-Türkçe 40   -4
    2-Matematik 40
    3-Sosyal Bilimler 20
    4-Fen Bilimleri 20

    ----> 100 puanı ÖSYM  veriyor
    ----> Okul puanı max 60 veriyor

*/


let ders = prompt("Ders seçiniz: \n 1-Türkçe\n2-Matematik\n3-Sosyal Bilimler\n4-Fen Bilimleri")

        let turkceD = prompt("Türkçe doğru sayınızı giriniz: ")
        let turkceY = prompt("Türkçe yanlış sayınızı giriniz: ")

        let matD = prompt("Matematik doğru sayınızı giriniz: ")
        let matY = prompt("Matematik yanlış sayınızı giriniz: ")

        let sosD = prompt("Sosyal Bilimler doğru sayınızı giriniz: ")
        let sosY = prompt("Sosyal Bilimler yanlış sayınızı giriniz: ")

        let fenD = prompt("Fen Bilimleri doğru sayınızı giriniz: ")
        let fenY = prompt("Fen Bilimleri yanlış sayınızı giriniz: ")


let osym = 100;

let dogruSoru = turkceD + matD + sosD + fenD
let yanlisSoru = turkceY + matY + sosY + fenY

let genelPuan = osym + (dogruSoru * 4) - ((yanlisSoru / 4) * 4) 
