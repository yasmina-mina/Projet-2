// je vais chercher mes données dans le fichier 'data.json'
fetch("data.json")
.then((response) => response.json())
.then((data) => {
// La fonction fetch me renvoie dans la variable data l'ensemble des données du fichier
// Je mets mon code ici



let maison = document.querySelector("#maison");
maison.innerHTML = data.Horlogerie.maison;
console.log(maison);

let slogan = document.querySelector("#slogan");
slogan.innerHTML = data.Horlogerie.slogan;

let phraseAccroche = document.querySelector(".phraseAccroche");
phraseAccroche.innerHTML = data.Horlogerie.phraseAccroche;



let divJs = document.querySelector(".divHtml");

for(let parcourir of data.Horlogerie.collections){
let maDiv = document.createElement("div");
maDiv.className=("carteCollection");
divJs.appendChild(maDiv);

maDiv.style.backgroundImage = `url('${parcourir.imageCarte}')`;     
maDiv.style.backgroundSize = "cover";
maDiv.style.backgroundPosition = "center";


/*
let monImage = document.createElement("img");
monImage.className=("imgCarte");
maDiv.appendChild(monImage);
monImage.src=parcourir.imageCarte
monImage.alt=parcourir.titreImage;
*/

let nomCarte = document.createElement("h4");
maDiv.appendChild(nomCarte);
nomCarte.innerHTML= parcourir.nom;

let maDescription = document.createElement("p");
maDescription.className=("descriptif");
maDiv.appendChild(maDescription);
maDescription.innerHTML=parcourir.description;
}






})
.catch((error) => console.error(error));




