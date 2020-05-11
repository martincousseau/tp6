function separation(){

    

        console.log("==================================================================");
    
}
function premier(){
    console.log("Titre de la page : " + document.title);
    console.log("Type de contenu de la page  : " + document.body);
    console.log("La troisième bande annonce est  : " + document.getElementById("troisLink"));
}

function deux(){

    let t  = document.getElementsByTagName("h2");

    console.log("Le titre GONE GIRL est de type : " + t[0]);
}


function trois() {

    let para = document.getElementsByTagName("p");
    let img = document.getElementsByTagName("img");

    console.log("Notre page contient " + para.length  + " paragraphes et " + img.length + " images");
}


function quatre(){
        let syno = document.getElementsByClassName("syno");
        console.log("Notre page contient " + syno.length + " synopsis de film");
}

function cinq(){
    let rub = document.getElementsByClassName("annee");
    console.log("La première rubrique des films date de l'année " + rub[0].innerHTML);

    let nb = document.querySelectorAll(".coucou");

    console.log("il existe " + nb.length + " films sous la rubrique " + rub[0].innerHTML);
}

function six(){

    let imi = document.getElementsByClassName("imi");
    console.log("Synopsis du film : " + imi[0].innerHTML);
    let imit = document.getElementById('imit');
    console.log(imit.innerHTML);

}

function main(){

    separation();
    premier();
    separation();
    deux();
    separation();
    trois();
    separation();
    quatre();
    separation();
    cinq();
    separation();
    six();
}

main();