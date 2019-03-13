var i = 0;
var txt = 'LOTO ROTO LUTRIJA KONCEPT IGRE Ideja ove  web aplikacije je da se korisnici stimulišu za donacije u humanitarne svrhe kroz igru LOTO ROTO. Slogan igre je:  „KAD STE VI NA DOBITKU SVI SU NA DOBITKU!“. Igra se oslanja na pravila igre LOTO Državne Lutrije Srbije, ali uz nekoliko izmena . Svaki  igrač ima mogućnost da uplati minimum jednu  kombinaciju od 14 brojeva , koje bira na tiketu sa 39 brojeva. Premija se ostvaruje  u slučaju pogođenih sedam  brojeva, dok su:  druga nagrada - kombinacija sa šest  pogodaka; treća nagrada - kombinacija sa pet  pogodaka; sa četiri  pogotka se dobija  zamena tiketa. Sa 14 kombinacija veće su šanse za dobitak. Zašto je to važno? Zato što se isplata, osim dobitniku, procentualno odvaja na ime fonda za humanitarnu pomoć, dok  manji procenat ide organizatoru(2%), ali samo u slučaju ostvarenog dobitka.  Ukoliko  nema sedmice  fond koji je bio namenjan  za tu nagradu se prebacuje u sledeće kolo. Dakle, veći broj uplata - veće nagrade - više pogodaka - više novca za humanitarni fond! NAGRADE Broj dobitnika sa četvorkom ( zamenom tiketa) ne možemo predvideti , tako da se od ukupnog fonda jednog kola odmah odvajaju sredstva koja će pokriti  trošak zamene tiketa, čija cena je fiksna.Ostatak novca je fond za ostale tri nagrade. Pogodak od sedam brojeva - 60% od ukupnog fonda tekućeg kola;Pogodak od šest brojeva - 30% od ukupnog fonda tekućeg kola;Pogodak od pet brojeva - 10% od ukupnog fonda tekućeg kola;Pogodak od četiri broja je zamena tiketa.Svaki dobitnik (sa sedam, šest i pet pogodaka), odvaja deo svoje nagrade-20% kao donaciju u humanitarne svrhe, kao i 2% namenjenih organizatoru igre.Sredstva se automatski prebacuju u humanitarni fond.Ostatak novca se isplaćuje dobitniku.';
var speed = 5;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}