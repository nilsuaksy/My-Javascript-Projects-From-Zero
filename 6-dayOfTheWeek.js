let day = (prompt("Bugün haftanın kaçıncı günü: "))
switch (day) {
    case "1":
        document.write("Pazartesi")
        break;
    case "2":
        document.write("Salı")
        break;
    case "3":
        document.write("Çarşamba")
        break;
    case "4":
        document.write("Perşembe")
        break;
    case "5":
        document.write("Cuma")
        break;
    case "6":
        document.write("Cumartesi")
        break;
    case "7":
        document.write("Pazar")
        break;

    default:
    document.write("Geçersiz seçim")
        break;
}