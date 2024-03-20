/* 
    1-Bakiye görüntüleme
    2-Para çekme
    3-Para yatırma
    4-Çıkış


*/
let choice = prompt("Yapmak istediğiniz işlemi seçiniz: \n1-Bakiye görüntüle \n2-Para Çek\n3-Para Yatır\n4-Çıkış")
let money = 1000;



switch (choice) {
    case "1":
        console.log("Mevcut bakiyeniz: " + money)
        break;
    case "2":
        let withdraw = Number(prompt("Çekilecek para miktarı: "))
        if (withdraw > money) {
            console.log("Bu kadar para bulunmamaktadır.")
        } else (
            console.log("Kalan para: " + (money - withdraw))
        )
        break;
    case "3":
        let deposited = Number(prompt("Yatırılacak para miktarı: "))
        console.log("Kalan para: " + (money + deposited))
        break;
    case "4":
        console.log("Çıkış yapılıyor..")
        break;
    default:
        console.log("Geçersiz seçim")
        break;
}

