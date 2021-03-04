
// Génération du nombre entier aléatoire de 0 à 500
var randomNumber;

//Génération partie

var party = 0;

//Nombre d'essai de départ fixé à 1

var userTry = 1;
// console.log(randomNumber);


//Création de L'objet game

var game = {
    random: randomNumber,
    attempt: userTry,
    score: [] //Création du tableau des scores
};

//Génération nombre aléatoire
function createNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    game.random = randomNumber;
};



//fonction Play Juste prix
function play(min, max) {
    createNumber(min,max);

    //Récupération de la propostion utilisateur, converti en integer
    var userNumber = parseInt(prompt("Trouvez le Juste Prix !"), 10);
        //Boucle Juste Prix
    while (game.random !== userNumber) {
        
        // Si proposition Vide
        if (isNaN(userNumber)) {
            userNumber = parseInt(prompt("Veuillez renseigner une valeur SVP, réessayez vous y êtes presque!"), 10);
        };
        // Si proposition plus petite que le nombre aléatoire
        if (userNumber < randomNumber) {
            userNumber = parseInt(prompt("Et non c'est plus grand réessayez vous y êtes presque!"), 10);
            game.attempt++;
            console.log(game.attempt);
        };
        // Si proposition plus grande que le nombre aléatoire
        if (userNumber > randomNumber) {
            userNumber = parseInt(prompt("Et non c'est plus petit réessayez vous y êtes presque!"), 10);
            game.attempt++;
            console.log(game.attempt);
        };
        
        
    };
    

    //L'utilisateur a trouvé le nombre aléatoire
    party++;
    alert(`Bien joué le Juste prix est : ${randomNumber} ! Vous l'avez trouvé au bout de ${game.attempt} essais !`);

    //stockage score dans un tableau
    game.score.push(`Partie ${party}: ${game.attempt}`);
    
};


//Demande de confirmation

var result = window.confirm("Voulez-vous jouer ?");


//Proposer de rejouer
do {
    play(10, 20);
    result = window.confirm("Voulez-vous rejouer ?");
    if (!result) {
        console.log("voici le tableau des scores",game.score);
    }
    //réinitialisation tentative
    game.attempt = 1;
} while (result);



