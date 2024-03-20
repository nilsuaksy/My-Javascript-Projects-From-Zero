// Else if yapısı 

/*

-           -              -
 -          -            -
  -         -           -
   -        -         -
    -       -        -
     -      -      -
      -     -    -
   1.yol  2.yol  3.yol

*/

let choice = prompt("Hangi yolu seçmek istiyorsunuz?")

if(choice == 1) {
    console.log("Seçtiğiniz yol " + choice + ". yol");
} else if (choice == 2) {
    console.log(`Seçtiğiniz yol ${choice}. yol`);

} else if (choice == 3) {
    console.log("Seçtiğiniz yol 3. yol");

} else {
    console.log("Geçerli bir seçim yapmadınız.")
}