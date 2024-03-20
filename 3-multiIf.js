// ÇOKLU IF YAPISI

/*

ad ve tckn

ad: boş geçilemez
tckn: 11 karakterden uzun olamaz

*/

const fullName = prompt("Lütfen isminizi yazınız: ");
const tckn = prompt("Lütfen tc kimlik numaranızı giriniz: ");

// if (fullName) {
//     document.write("İsminiz: " + fullName + "<br>");
// }

// if (tckn.length === 11) {
//     document.write("Tc kimlik numaranız: " + tckn);
// } else {
//     alert("Tc kimlik numaranız hatalı. " + tckn.length + " hane uzunluğundadır.");
// }

checkIt(fullName, tckn)

function checkIt(fullName, tckn) {
    if(fullName!="") {
        if(tckn.length == 11) {
            document.write(`İsim: ${fullName} <br> Tc Kimlik No: ${tckn} `)
        } else {
            alert(`Tc Kimlik numaranız 11 haneli değil, ${tckn.length} hanelidir.`)
        }
    } else {
        alert("Lütfen kullanıcı adınızı giriniz.")
    }
}

function checkIt2(fullName, tckn) {
    if(fullName == "") {
        alert("Kullanıcı adınızı giriniz.")
    }
    if(tckn.length !== 11 ) {
        alert("Tc kimlik numaranız 11 haneli olmalıdır.")
    }
    document.write(`İsim: ${fullName} <br> Tc Kimlik No: ${tckn} `)
}