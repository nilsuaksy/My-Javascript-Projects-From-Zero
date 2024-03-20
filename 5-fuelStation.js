/*
    1-Dizel   : 24.53
    2-Benzin  : 22.25
    3-LPG     : 11.1


    Gelen müşterinden alınacak bilgiler;
    1-Yakıt tipi
    2-Yüklenecek yakıt litresi
    3-Müşterinin parası
    4-Müşterinin kalan parası

*/



let fuelType = prompt("Almak istediğiniz yakıt türü: \n1-Dizel    : 24.53 \n2-Benzin : 22.25 \n3-LPG      : 11.1")
if (fuelType == "1") {
    document.write("Seçilen yakıt: Dizel <br>")
} else if (fuelType == "2") {
    document.write("Seçilen yakıt: Benzin <br>")
} else if (fuelType == 3) {
    document.write("Seçilen yakıt: LPG <br>")
} else {
    document.write("Geçersiz seçim.")
}


let fuelLitre = Number(prompt("Almak istediğiniz yakıt litresi: "))
document.write("Almak istediğiniz  yakıt litresi: " + fuelLitre + "<br>")

let haveMoney = Number(prompt("Elinizdeki para miktarını girin: "))
document.write("Sahip olduğunuz toplam para: " + haveMoney + "<br>")

let leftMoney = Number(haveMoney - fuelType.price * fuelLitre)
document.write("Kalan paranız: " + leftMoney)



