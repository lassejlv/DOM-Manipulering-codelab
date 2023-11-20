/* DOM-elementer */

/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det.
*/

const redFigure = document.getElementById("redFigure");
const yellowFigure = document.getElementById("yellowFigure");

console.log(redFigure);
console.log(yellowFigure);

/* Opgave 1.2
Du skal ændre baggrundsfarve på de to elementer, du har fundet i opgave 1.1
Farven på elementerne skal være blå. Brug evt. elelement.style.backgroundColor
*/

redFigure.style.backgroundColor = "blue";
yellowFigure.style.backgroundColor = "blue";

/* Opgave 2.1
Du skal oprette følgende HTML-elementer i elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

const opgaveTwoContainer = document.getElementById("opgaveTwo");

const h2Element = document.createElement("h2");
h2Element.textContent = "Opgave 2.1 løsning";

const pElement = document.createElement("p");
pElement.textContent = "Jeg har løst opgave 2.1";

opgaveTwoContainer.appendChild(h2Element);
opgaveTwoContainer.appendChild(pElement);

/* Opgave 3 liveHTML lists
   Opgave 3.1
   Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

const purpleFigures = document.getElementsByClassName("purpleFigures");
console.log(purpleFigures);

/* Opgave 3.2
   Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
   til et array, hvor du kan bruge map-funktionen til at ændre baggrundsfarven til rød.
*/

const purpleFiguresArray = Array.from(purpleFigures);
purpleFiguresArray.map((element) => (element.style.backgroundColor = "red"));

/* Opgave 3.3
   Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED.
   Du kan bruge myElement.children[0].innerHTML til at ændre 1. child elements innerHTML.
*/

purpleFiguresArray.map((element) => (element.children[0].innerHTML = "RED"));

/* Opgave 4
   Opret DOM-elementer i elementet med id opgaveFour, ud fra dataobjektet myData.
   Du skal vælge element tags, der giver mening i forbindelse med HTML5 semantisk tagging.
   Fyld dine elementers innerHTML eller andre attributter med dine data.
*/

const opgaveFourContainer = document.getElementById("opgaveFour");

const nameElement = document.createElement("h2");
nameElement.textContent = myData.name;

const imageElement = document.createElement("img");
imageElement.src = myData.image;
imageElement.alt = myData.name;

const descriptionElement = document.createElement("p");
descriptionElement.textContent = myData.description;

opgaveFourContainer.appendChild(nameElement);
opgaveFourContainer.appendChild(imageElement);
opgaveFourContainer.appendChild(descriptionElement);
