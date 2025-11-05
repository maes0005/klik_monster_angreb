console.log("loaded instruction...");

document.querySelector("#foerste").addEventListener("click", funk1);
function funk1() {
  console.log("1. måde er loaded...");
  document.querySelector("#oejenbryn").classList.add("my_scale");
  document.querySelector("#oejne").classList.add("my_scale");

  document.querySelector(".info-text h2").textContent = "Irritation";
  document.querySelector(
    ".placeholder"
  ).textContent = `Klikmonstrene ernærer sig af menneskers irritation. 
De udsender kontinuerlige kliklyde - som fra en kuglepen - for at fremprovokere vrede og frustration.
Jo mere man reagerer, jo stærkere bliver de. Når du mærker pulsen stige, når du tænker “hvem ER det, der sidder og klikker?!”, så er det allerede for sent: Klikmonsteret er i nærheden.

Forbliv rolig. Tag dybe vejrtrækninger. Undgå øjenkontakt og enhver form for udbrud. Ignorér lyden. Det er din bedste chance.`;
}

/*dette tekstfelt kommer i alle infobokse*/
/* document.querySelector(
  "#efficiency"
).textContent = `Forskning viser, at Klikmonstre trives i miljøer med høj irritation.
Studier fra Institut for Lydpsykologisk Adfærd påviser, at selv et enkelt klik kan udløse stress hos 9 ud af 10 testpersoner.
Jo mere vrede man føler, jo tydeligere bliver væsnet.
Tålmodighed og ro anbefales som bedste forsvar.`; */

document.querySelector("#anden").addEventListener("click", funk2);
function funk2() {
  console.log("2. måde er loaded...");
  document.querySelector("#Kuglepind").classList.add("my_scale");

  document.querySelector(".info-text h2").textContent = "Kuglepennen";

  document.querySelector(
    ".placeholder"
  ).textContent = `Hvert Klikmonster bærer sin egen klikmekanisme - typisk en almindelig kuglepen, men i sjældne tilfælde også trykpenne, markører eller fjernbetjeninger. Lyden er deres kald, deres våben og deres måde at kommunikere på.
Forskere mener, at klikket fungerer som både lokkemiddel og advarsel. Klik - jeg er her. Klik - jeg ser dig. Klik - bliver du vred endnu?

Forsøg aldrig at tage kuglepennen fra et Klikmonster. Det betragtes som en direkte trussel.`;
}

document.querySelector("#tredje").addEventListener("click", funk3);
function funk3() {
  console.log("3. måde er loaded...");
  document.querySelector("#mund").classList.add("my_scale");

  document.querySelector(".info-text h2").textContent = "Farlig?";
  document.querySelector(
    ".placeholder"
  ).textContent = `Hvis du bliver for ophidset og forsøger at slå ud efter et Klikmonster, risikerer du et klikbid - et hurtigt, skarpt nap, der føles som både smerte og skam.
Biddet efterlader et lille rødt mærke og en vedvarende trang til selv at klikke på kuglepenne.
Denne tilstand kaldes sekundær klikitis og kan vare i dagevis.`;
}
