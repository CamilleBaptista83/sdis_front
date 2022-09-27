PROJECT REACT REDUX TS SCSS

## Pour React

npm start
npm run build

## Pour le SCSS

Le fichier variables est dans /src/style/variables
Il faut mettre dans ce fichiers les différentes choses redondantes dans le projet, comme les couleurs

## Pour le redux

Tout est dans le dossier REDUX /src/redux

-   actions : toutes les actions ainsi que le fichier actionsTypes qui sert à lister toutes les actions et éviter les erreurs de copier/coller
-   Interfaces : toutes les interfaces TS
-   reducers : tous les reducers ainsi que l'index à remplir à chaque fois qu'on rajoute un reducer
-   index.js : fichier ou l'on ajoute tous les actions pour les incorporer dans le store après
-   store.js : le store qui est dans le index.tsx

## Les Services

-   Interceptor :
    C'est le custom interceptor qui est là pour gérer le refresh token sans avoir besoin de se relogger
-   Traduction :
    Dossier dans lequel il faut mettre les différent json de traduction
-   LiensInternes.js : Tous les liens url du router
-   RoutesApi.js toutes les routes externe du webservice
