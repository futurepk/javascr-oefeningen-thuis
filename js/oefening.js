// for (let aantal = 1; aantal <= 20; aantal += 2) {
//   console.log(aantal);
// }

// console.log("----------------------");

// for (let aantal = 10; aantal >= 1; aantal -= 3) {
//   console.log(aantal);
// }

// console.log("----------------------");

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i -= 3;
// }

//1
// const voorraad = 7;

// if (voorraad > 0) {
//   console.log("Product beschikbaar");
// } else {
//   console.log("Product uitverkocht");
// }

//2
// const bestelnummer = 36;
// if (bestelnummer % 2 === 0) {
//   console.log(`Bestelling ${bestelnummer} gaat naar tafel A`);
// } else {
//   console.log(`Bestelling ${bestelnummer} gaat naar tafel B`);
// }

//3
// const bedrag = 42.5;
// let verzendkosten;
// if (bedrag >= 50) {
//   verzendkosten = 0;
// } else {
//   verzendkosten = 4.95;
// }
// console.log(verzendkosten);

//4
// const leeftijd = 16;
// if (leeftijd >= 18) {
//   console.log("Welkom op de workshop!");
// } else {
//   let verschil = 18 - leeftijd;
//   console.log(`Sorry, je moet nog ${verschil} jaar wachten`);
// }

//5
// const ingegeven = Number("25");
// const code = 25;

// if (ingegeven === code) {
//   console.log("Code correct");
// } else {
//   console.log("Code fout");
// }
//bij == zegt hij code correct bij === fout omdat met === ook naar het type wordt gekeken
//met number zal hij al in beide gevallen correct zeggen

//6
// const gebruikersnaam = "barista";
// const wachtwoord = "bonen123";

// if (gebruikersnaam === "barista" && wachtwoord === "bonen123") {
//   console.log("Welkom, kassa geopend");
// } else {
//   console.log("Foute gebruikersnaam of wachtwoord");
// }

//7
// const voorraad = -2;
// switch (true) {
//   case voorraad > 20:
//     console.log("Ruim voorradig");
//     break;
//   case voorraad >= 6 && voorraad <= 20:
//     console.log("Voldoende voorraad");
//     break;
//   case voorraad > 1 && voorraad <= 5:
//     console.log("Bijna op - bijbestellen!");
//     break;
//   case voorraad === 0:
//     console.log("Uitverkocht");
//     break;
//   case voorraad < 0:
//     console.log("Fout: voorraad kan niet negatief zijn");
// }

//8
// const score = 17;
// const maximum = 20;

// switch (true) {
//   case score / maximum >= 0.85:
//     console.log("Uitsktekend");
//     break;
//   case score / maximum >= 0.7:
//     console.log("Goed");
//     break;
//   case score / maximum >= 0.5:
//     console.log("Geslaagd");
//     break;
//   default:
//     console.log("Niet geslaagd");
// }

//9
// const temperatuur = 87;
// switch (true) {
//   case temperatuur < 88:
//     console.log("Te koud - de koffie wordt zuur");
//     break;
//   case temperatuur >= 88 && temperatuur <= 96:
//     console.log("Ideale temperatuur");
//     break;
//   case temperatuur > 96:
//     console.log("Te heet - de koffie wordt bitter");
//     break;
// }

//10
// const prijs = 12.5;
// const aantal = 20;
// let korting;
// let tussentotaal = aantal * prijs;

// if (aantal <= 4) {
//   korting = 0;
//   console.log("tussentotaal: " + tussentotaal);
//   let kortingsbedrag = tussentotaal * korting;
//   console.log("korting is: " + korting);
//   console.log("kortingsbedrag: " + kortingsbedrag);
//   let teBetalen = tussentotaal - kortingsbedrag;
//   console.log("te betalen: " + teBetalen);
// } else if (aantal <= 9) {
//   korting = 0.05;
//   console.log("tussentotaal: " + tussentotaal);
//   console.log("korting is: " + korting);
//   let kortingsbedrag = tussentotaal * korting;
//   console.log("kortingsbedrag: " + kortingsbedrag);
//   let teBetalen = tussentotaal - kortingsbedrag;
//   console.log("te betalen: " + teBetalen);
// } else if (aantal <= 19) {
//   korting = 0.1;
//   console.log("tussentotaal: " + tussentotaal);
//   let kortingsbedrag = tussentotaal * korting;
//   console.log("korting is: " + korting);
//   console.log("kortingsbedrag: " + kortingsbedrag);
//   let teBetalen = tussentotaal - kortingsbedrag;
//   console.log("te betalen: " + teBetalen);
// } else {
//   korting = 0.15;
//   console.log("tussentotaal: " + tussentotaal);
//   let kortingsbedrag = tussentotaal * korting;
//   console.log("korting is: " + korting);
//   console.log("kortingsbedrag: " + kortingsbedrag);
//   let teBetalen = tussentotaal - kortingsbedrag;
//   console.log("te betalen: " + teBetalen);
// }

//11
// const dag = "maandag";
// const uur = 19;

// switch (true) {
//   case dag === "maandag" && uur >= 7 && uur <= 18:
//     console.log("Roast & Co. is open");
//     break;
//   case dag === "dinsdag" && uur >= 7 && uur <= 18:
//     console.log("Roast & Co. is open");
//     break;
//   case dag === "woensdag" && uur >= 7 && uur <= 18:
//     console.log("Roast & Co. is open");
//     break;
//   case dag === "donderdag" && uur >= 7 && uur <= 18:
//     console.log("Roast & Co. is open");
//     break;
//   case dag === "vrijdag" && uur >= 7 && uur <= 18:
//     console.log("Roast & Co. is open");
//     break;
//   case dag === "zaterdag" && uur >= 8 && uur <= 14:
//     console.log("Roast & Co. is open");
//     break;
//   default:
//     console.log("Roast & Co. is gesloten");
// }

//12
// const aantal = 1;
// let woord = aantal > 1 ? "zakken" : "zak";
// console.log(aantal + " " + woord);

//13
// const dagnummer = 8;
// let dagnaam;

// switch (true) {
//   case dagnummer === 1:
//     dagnaam = "maandag";
//     console.log(dagnaam);
//     break;
//   case dagnummer === 2:
//     dagnaam = "dinsdag";
//     console.log(dagnaam);
//     break;
//   case dagnummer === 3:
//     dagnaam = "woensdag";
//     console.log(dagnaam);
//     break;
//   case dagnummer === 4:
//     dagnaam = "donderdag";
//     console.log(dagnaam);
//     break;
//   case dagnummer === 5:
//     dagnaam = "vrijdag";
//     console.log(dagnaam);
//     break;
//   case dagnummer === 6:
//     dagnaam = "zaterdag";
//     console.log(dagnaam);
//     break;
//   case dagnummer === 7:
//     dagnaam = "zondag";
//     console.log(dagnaam);
//     break;
//   default:
//     console.log("ongeldig dagnummer");
// }

//14
// const zak = "huisblend";
// const basisprijs = 24.5;
// const aantal = 2;
// const klanttype = "abonnee";
// const voorraad = 8;

// let korting;

// switch (klanttype) {
//   case "abonnee":
//     korting = 0.15;
//     break;
//   case "vaste klant":
//     korting = 0.1;
//     break;
//   case "nieuwt":
//     korting = 0.05;
//     break;
//   case "personeel":
//     korting = 0.25;
//     break;
//   default:
//     korting = 0;
// }

// const tussentotaal = basisprijs * aantal;
// const kortingBedrag = tussentotaal * korting;
// const teBetalen = tussentotaal - kortingBedrag;

// console.log(`Klanttype ${klanttype} koopt ${aantal} zakken`);
// console.log(
//   `Tussentotaal: ${tussentotaal}. Korting: ${korting}. Te betalen: ${teBetalen}`,
// );

//15
// const formaat = "L";
// let inhoud;
// let toeslag;
// const prijs = 3.2;

// switch (true) {
//   case formaat === "S":
//     inhoud = "150ml";
//     toeslag = 0;
//     console.log(`Latte S (${inhoud}): ${prijs + toeslag}`);
//     break;
//   case formaat === "M":
//     inhoud = "250ml";
//     toeslag = 0.5;
//     console.log(`Latte M (${inhoud}): ${prijs + toeslag}`);
//     break;
//   case formaat === "L":
//     inhoud = "350ml";
//     toeslag = 1;
//     console.log(`Latte L (${inhoud}): ${prijs + toeslag}`);
//     break;
//   default:
//     console.log("Onbekend formaat");
// }

//16
// const maand = 7;
// switch (true) {
//   case maand === 1 || maand === 2 || maand === 12:
//     console.log(`Maand ${maand} - Warme chai latte`);
//     break;
//   case maand >= 3 && maand <= 5:
//     console.log(`Maand ${maand} - Honing-lavandel latte`);
//     break;
//   case maand >= 6 && maand <= 8:
//     console.log(`Maand ${maand} - Cold brew met vanille latte`);
//     break;
//   case maand >= 9 && maand <= 11:
//     console.log(`Maand ${maand} - Pumpkin spice latte`);
//     break;
//   default:
//     console.log("Ongeldige maand");
// }

//17

//18
// const koffiesoorten = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Supremo",
//   "Brazil Santos",
//   "Kenya AA",
// ];

// console.log(koffiesoorten.length);
// console.log(koffiesoorten[0]);
// console.log(koffiesoorten[3]);
// console.log(koffiesoorten[5 - 1]);

//19
// const prijzen = [24.5, 32.0, 27.9, 22.0];
// console.log(prijzen);
// prijzen[2] += 1.5;
// prijzen[0] = 25;
// prijzen.push(30);
// console.log(prijzen);
//omdat 'prijzen' de constant is maar het is een arrat die gevuld is met variabelen

//20
// const origines = ["Brazilië", "Ethiopië", "Colombia", "Venezuele"];
// const index = 3;

// if (index <= origines.length) {
//   console.log(`Op plaats ${index} staat ${origines[index]}`);
// } else {
//   console.log(`Index ${index} bestaat niet. Kies een getal van 0 tot 3`);
// }

//21
// const namen = ["Huisblend", "Ethiopia Sidamo", "Colombia Supremo"];
// const prijzen = [24.5, 32.0, 27.9];

// console.log(`${namen[0]} kost ${prijzen[0]} euro`);
// console.log(`${namen[2]} kost ${prijzen[2]} euro`);

// namen.push("Kenya AA");
// prijzen.push(29.95);

// console.log(
//   `${namen[namen.length - 1]} kost ${prijzen[prijzen.length - 1]} euro`,
// );

//22
// const namen = ["Huisblend", "Ethiopia Sidamo", "Colombia Supremo", "Kenya AA"];
// const prijzen = [24.5, 32.0, 27.9, 29.95];

// for (let i = 0; i < namen.length; i++) {
//   console.log(`${i + 1}. ${namen[i]} - €${prijzen[i]}`);
// }
// let gemiddelde = 0;
// n = 0;
// while (n < prijzen.length) {
//   gemiddelde += prijzen[n];
//   console.log(n);
//   console.log(gemiddelde.toFixed(2));
//   n++;
// }
// console.log("Het gemiddelde is: " + (gemiddelde / prijzen.length).toFixed(2));

// for (const naam of namen) {
//   console.log(naam.toUpperCase());
// }

//23
// let minuten = 5;

// while (minuten >= 0) {
//   if (minuten !== 0) {
//     console.log(`Nog ${minuten} minuten`);
//   } else {
//     console.log(`Koffie is klaar`);
//   }
//   minuten--;
// }

//24
// let prijs = 12.5;
// for (let i = 1; i <= 10; i++) {
//   const woord = i != 1 ? "zakken" : "zak";
//   console.log(`${i} ${woord}: ${prijs * i}`);
// }

//25
// const producten = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Supremo",
//   "Brazil Santos",
//   "KenyaAA",
// ];
// const voorraden = [12, 0, 4, 25, 2];

// for (i = 0; i < producten.length; i++) {
//   if (voorraden[i] > 5) {
//     console.log(`${producten[i]} voorraad: ${voorraden[i]} status: "OK"`);
//   } else if (voorraden[i] > 1 && voorraden[i] < 5) {
//     console.log(`${producten[i]} voorraad: ${voorraden[i]} status: "Bijna op"`);
//   } else {
//     console.log(
//       `${producten[i]} voorraad: ${voorraden[i]} status: "Uitverkocht"`,
//     );
//   }
// }

//26
// const producten = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Supremo",
//   "Brazil Santos",
//   "KenyaAA",
// ];
// const prijzen = [24.5, 32.0, 27.9, 22.0, 29.95];
// let duurste = prijzen[0];
// let duurstePos;
// let goedkoopste = prijzen[0];
// let goedkoopstePos;

// for (i = 0; i <= producten.length; i++) {
//   if (duurste < prijzen[i]) {
//     duurste = prijzen[i];
//     duurstePos = i;
//   } else if (goedkoopste > prijzen[i]) {
//     goedkoopste = prijzen[i];
//     goedkoopstePos = i;
//   }
// }
// console.log(`duurste ${producten[duurstePos]} ${duurste}`);
// console.log(`goedkoopste ${producten[goedkoopstePos]} ${goedkoopste}`);
// console.log("Prijsverschil is " + (duurste - goedkoopste));

//27
// const bestellingen = [
//   "abonnee",
//   "nieuw",
//   "vaste klant",
//   "abonnee",
//   "onbekend",
//   "abonnee",
// ];
// const bedrag = 30;
// let korting;
// let prijs;

// for (i = 0; i < bestellingen.length; i++) {
//   switch (true) {
//     case bestellingen[i] === "abonnee":
//       korting = 0.85;
//       prijs = bedrag * korting;
//       console.log(`${bestellingen[i]}: ${prijs}`);
//       console.log(i);
//       break;
//     case bestellingen[i] === "nieuw":
//       korting = 0.95;
//       prijs = bedrag * korting;
//       console.log(`${bestellingen[i]}: ${prijs}`);
//       console.log(i);
//       break;
//     case bestellingen[i] === "vaste klant":
//       korting = 0.9;
//       prijs = bedrag * korting;
//       console.log(`${bestellingen[i]}: ${prijs}`);
//       console.log(i);
//       break;
//     case bestellingen[i] === "onbekend":
//       korting = 1;
//       prijs = bedrag * korting;
//       console.log(`${bestellingen[i]}: ${prijs}`);
//       console.log(i);
//       break;
//   }
// }

//28
// let budget = 20;
// const koffiePrijs = 2.5;
// let aantalKoffies = 0;

// while (budget >= koffiePrijs) {
//   aantalKoffies++;
//   if (aantalKoffies % 5 != 0) {
//     budget = budget - koffiePrijs;
//     console.log(`Koffie ${aantalKoffies}: betaald. Nog ${budget} EURO`);
//   } else {
//     console.log(`Koffie ${aantalKoffies}: Gratis! Nog ${budget} EURO`);
//   }
// }

//29
// const soorten = ["Espresso", "Cappuccino", "Latte"];
// const basisprijzen = [2.2, 3.0, 3.4];
// const formaten = ["S", "M", "L"];

// for (let i = 0; i < soorten.length; i++) {
//   for (let j = 0; j < formaten.length; j++) {
//     let toeslag;
//     switch (true) {
//       case formaten[j] === "S":
//         toeslag = 0;
//         break;
//       case formaten[j] === "M":
//         toeslag = 0.5;
//         break;
//       case formaten[j] === "L":
//         toeslag = 1;
//         break;
//     }
//     if (soorten[i] === "Espresso" && formaten[j] === "L") {
//       console.log(`${soorten[i]} ${formaten[j]}: Niet beschikbaar`);
//     } else {
//       let prijs = basisprijzen[i] + toeslag;
//       console.log(`${soorten[i]} ${formaten[j]}: ${prijs}`);
//     }
//   }
//   console.log("----------------------------");
// }

//30
const producten = [
  "Huisblend",
  "Ethiopia Sidamo",
  "Colombia Supremo",
  "Kenya AA",
];
const prijzen = [24.5, 32.0, 27.9, 29.95];
const aantallen = [2, 0, 1, 3]; // wat de klant wil kopen
const voorraad = [10, 5, 1, 2]; // wat er in de winkel ligt
const klanttype = "vaste klant";
let subTotaal = 0; //moet op 0 staan anders werkt het niet

console.log("ROAST & CO. - KASSATICKET");
console.log("---------------------------");

for (let i = 0; i < producten.length; i++) {
  let aantal = aantallen[i];
  if (aantal > 0) {
    if (aantal > voorraad[i]) {
      console.log(
        `Let op: slechts ${voorraad[i]} x ${producten[i]} op voorraad`,
      );
      aantal = voorraad[i];
    }
    let subPrijs = aantal * prijzen[i];
    subTotaal += subPrijs;
    console.log(`${aantal} x ${producten[i]} à ${prijzen[i]} = ${subPrijs}`);
  }
}

let korting;
switch (true) {
  case klanttype === "abonnee":
    korting = 0.85;

    break;
  case klanttype === "nieuw":
    korting = 0.95;

    break;
  case klanttype === "vaste klant":
    korting = 0.9;

    break;
  default:
    korting = 1;
}

let bedragNaKorting = subTotaal * korting;

let verzendkosten = 4.95;
if (bedragNaKorting > 50) {
  verzendkosten = 0;
}

let volledigePrijs = bedragNaKorting + verzendkosten;

let btw = bedragNaKorting - bedragNaKorting / 1.21;
console.log("-----------------------------");
console.log("Subtotaal: " + subTotaal);
console.log("Korting: " + (subTotaal - bedragNaKorting).toFixed(2));
console.log("Verzendkosten: " + verzendkosten);
console.log("Totaal: " + volledigePrijs.toFixed(2));
console.log("Totaal: " + btw.toFixed(2));
