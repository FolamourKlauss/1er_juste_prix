
// Génération du nombre entier aléatoire de 0 à 500
var randomNumber = Math.round(Math.random()*500);

//Récupération de la propostion utilisateur, converti en integer
var userNumber = parseInt(prompt("Trouvez le Juste Prix !"), 10);

//Nombre d'essai de départ fixé à 1

var userTry = 1;
console.log(randomNumber);

//Boucle Juste Prix
while (randomNumber !== userNumber) {
    
    // Si proposition Vide
    if (isNaN(userNumber)) {
        userNumber = parseInt(prompt("Veuillez renseigner une valeur SVP, réessayez vous y êtes presque!"), 10);
    };
    // Si proposition plus petite que le nombre aléatoire
    if (userNumber < randomNumber) {
        userNumber = parseInt(prompt("Et non c'est plus grand réessayez vous y êtes presque!"), 10);
        userTry++;  
    };
    // Si proposition plus grande que le nombre aléatoire
    if (userNumber > randomNumber) {
        userNumber = parseInt(prompt("Et non c'est plus petit réessayez vous y êtes presque!"), 10);
        userTry++; 
    };
    
       
};

//L'utilisateur a trouvé le nombre aléatoire
alert(`Bien joué le Juste prix est : ${randomNumber} ! Vous l'avez trouvé au bout de ${userTry} essais !`);