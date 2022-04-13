# 📝 Étapes

## Tests et structure
<br>
<br>

1. Aborder la structure globale de l'API
2. Parler du **README.md** et de l'extension associée
3. Donner le fichier postman_collection.json
4. Importer le fichier *postman_collection.json* dans **Postman**
   1. Créer un workspace dans postman
   2. Route : Create User
      1. Body avec variable (email, password, ...)
   3. Route : Create Session
      1. Utiliser pour log l'utilisateur
      2. Body
      3. Test, une fois la route run, on obtiendra ses 2 tokens que l'on doit mettre dans les variables d'env
   4. Route : Get Session
      1. Les token spécifié en 3 vont nous servir dans les routes suivantes, Authorization : AccesssToken, Header : refreshToken
      2. Un autre test cette fois pour refresh notre AccessToken si ce dernier à expirer
   5. Route : Delete Session
      1. Déconnexion de l'utilisateur
   6. Route : produit
   
## Construire

1. ```npm init ```
2. À la racine créer le dossier src
3. À la racine créer le dossier config
   1. C'est notre .env avec toutes les informations liées à l'environnement de développement.
4. Créer un fichier default.ts et default.example.ts
   1. **remplir les informations du default.ts**
      1. Utiliser un site pour générer vos clés
5. Créer vos dossiers en accord avec le modèle avancé ou tout autre modèle de votre choix
    1.  **Créer le dossier open et restricted dans routes**. Ce dossier va exporter une fonction unique qui va traiter toutes les routes
    2.  **Créer le dossier controller** Dans lequel on aura un fichier par ressource
    3.  **Créer le dossier middleware** 
    4.  **Créer le dossier model** Qui nous servira à structurer nos ressources
    5.  **Créer le dossier validation** Qui nous servira a valider nos inputs
    6.  **Créer le dossier service** Qui seront appeler par nos controlleurs
    7.  **Créer le dossier utils** Qui regroupera notre logger, notre jwt et toute autre fonctions utiles dans toute notre app
6. **Créer le app.ts**
7. **Chercher les commandes dans le README.md et exécuter les commandes**
8. **Retourner dans la app.ts**
   1. Console.log du text
   2. Écrire un nouveau script pour lancer une commande dev "ts-node-dev --respawn --transpile-only src/app.ts"
   3. Lancer npm dev
   4. Commenter le résultat
   5. Changer le contenu du console.log
   6. Commenter le résultat
   7. **Express**
      1. Importer express et lancer un serveur sur le port de votre choix.
         1. Si vous avez une erreur à ce stade, c'est parce que vous n'avez pas de fichier tsconfig, créer en un avec la commande : ```npx tsc --init```
      2.  Ajouter la ligne suivante au tsconfig.json "outDir":"build". Ici, on spécifie juste le dossier qui va contenir notre app une fois buildé.
      3.  **A ce stade, votre app doit run**
9. **Aller dans le default.ts** 
   1.  Nous allons utiliser le package config que nous avons installer plus tot.
   2.  Déclarer un port, une url vers une base de donnée mongo déclarer au préalable.
10. **Retourner dans le app.ts et remplacer l'url par la variable du config**
11. **Créer un dossier db_mongo dans helpers**
    1.  **Créer un fichier connect.ts et connecter la bdd avec le package mongoose**
    2.  importer la fonction de connection et l'utiliser
12. On utilise pas mal de console log et ce n'est pas bon.
    1.  **Créer un fichier logger.ts dans helpers en utilisant pino et dayjs (optionnel)**
    2.  remplacer tout les console.log par des logger.infos ou logger.error 
13. **Créer les fichiers dans routes/open et routes/restricted**
    1.  ```import {Express} from 'express';```
        ```    function OpenRoutes(app:Express){   ```
        ```    }```
        ```export default OpenRoutes;```
    2. Mettre ceci dans les deux fichiers et les exporter dans app.ts
    3. Appeler vos deux entités routes avec votre app déclarer précédemment dans app.ts
14. Il est temps de créer la première routes :
    1.  Dans le fichier routes/open/OpenRoutes.ts ou routes/restricted/RestrictedRoutes.ts, dans la fonction associé, créer une route avec le modèle suivant : ```app.get('/', (req, res) => {
    2.  })```
    3.  Il est important de typer vos variables, importer du module express, Request et Response et typer vos variables
    4.  Renvoyer une réponse avec le status correspondant : res.sendStatus(____);
15.   Avant de créer encore plus de routes, on doit créer un middleware qui va etre utiliser dans beaucoup de endpoint.
16. **Aller dans le dossier middleware** et créer un fichier validateRessource.ts
    1.  Nous allons le faire ensemble
17. La prochaine étape, nous devons créer notre modèle utilisateur
    1.  Dans le dossier models, créer le fichier user.models.ts
    2.  import mongoose
    3.  import bcrypt
    4.  import config
    5.  Créer la constante schéma avec le nom userSchema
    6.  Cette constante sera une instance de mongoose.Schema 
    7.  Inspirer vous de la [doc](https://mongoosejs.com/docs/guide.html) pour créer votre Schema et appeler votre prof
    8.  exporter le model de la facon suivante : ```const UserModel = mongoose.model("User", userSchema);
   export default UserModel;```
18. Créer une interface typescript correspondant au schema ```export interface UserDocument extends mongoose.Document {
    email: string,
    ___ : ___
}```

19. Retourner dans user.models.ts
    1.  Le mot de passe ne doit pas être stocker en clair dans la bdd, ainsi, nous allons faire une fonction permettant de le crypter des lors qu'il est sauvegardé en base.
    2.  