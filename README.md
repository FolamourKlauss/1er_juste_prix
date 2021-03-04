# Le juste prix

Un programme pour demander à l'utilisateur d'identifier un nombre aléatoire, tant qu'il n'a pas trouvé on lui redemandera. Pour l'aider on lui dira si c'est plus ou si c'est moins.

## On doit déjà générer le nombre

- On utilise `Math.random()` + `Math.round()`
- Utilisation de prompt pour récupérer une entrée utilisateur




## Comparaison du nombre généré avec la réponse récupérée auprès de l'utilisateur

- On demande à l'utilisateur de saisir un nombre
- On transforme sa saisie en nombre
- Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
- Si la saisie est trop petite on pourrait l'indiquer
- Sinon on pourrait dire que c'est trop grand


## C'est gagné

Dès que l'utilisateur trouve, on affiche un message de victoire :tada:

## On compte les essais

On pourrait imaginer d'initialiser un compteur au début du programme  
Ensuite à chaque essai on l'incrémente  
Dans le message de victoire, on pourrait afficher le nombre d'essais.

