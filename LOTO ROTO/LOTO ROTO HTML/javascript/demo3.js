var i = 0;
var txt = 'Humanitarne fondacije u Beogradu, svojim okupljanjem, skreću pažnju na podsticanje društveno odgovornog delovanja i humanosti, koja za cilj ima buđenje svesti kod građana i shvatanje koliko je humanitarni rad značajan i koliko svako od nas može da da doprinos u toj oblasti. Zaboravljamo da su svakog dana pune bolnice,a da često nema sredstava za lečenje. Takođe, mnogi ljudi nemaju krov nad glavom, niti mogućnost da se školuju i tu je naša i vaša glavna uloga.  Zato postoje fondacije kao što su Podrži život, Budi human i fondacija Novaka Đokovića, koje uz vašu pomoć, svakodnevno pomažu da se navedeni problemi reše. Neka nas ova igra podstakne da mislimo na druge i da zapamtimo da naše malo nekome znači mnogo.';
var speed = 5;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}