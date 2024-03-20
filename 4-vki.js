
let kilo = Number(prompt("Kilonuzu giriniz "))
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz: "))

function vki(kilo, boy) {
    let boyKare = boy ** 2

    let vki = kilo / boyKare
    
    if(vki < 18.5) {
        document.write("İdeal kilonun altında." + vki)
    } else if(vki > 18.5 && vki < 24.9) {
        document.write("İdeal kiloda." + vki)
    } else if(vki > 25 && vki < 29.9) {
        document.write("İdeal kilonun üstünde." + vki)
    } else if(vki > 30 && vki < 39.9) {
        document.write("İdeal kilonun çok üstünde (obez)" + vki)
    } else if(vki > 40) {
        document.write("İdeal kilonun çok üstünde (morbid obez)." + vki)
    } else {
        document.write("geçersiz.")
    }
}

vki(kilo, boy)