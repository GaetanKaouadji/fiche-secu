# Fiches de sécurité · Plongée Loisirs Chalon : mise en ligne

L'application fonctionne entièrement dans le téléphone. GitHub sert uniquement à la distribuer, et ce qui y est déposé est **chiffré** : sans le code d'accès du club, personne ne peut ni l'ouvrir ni la lire.

## Les deux éléments à ne pas confondre

| Élément | Où il va |
|---|---|
| **Dossier `a-deposer-sur-github`** (ce dossier) | Dans le dépôt GitHub du club. Public, mais sans valeur sans le code. |
| **`NE-PAS-PUBLIER_outil-publication-PLC71.html`** | **Uniquement** sur l'ordinateur du responsable, avec une copie sur clé USB. Jamais sur GitHub, jamais par e-mail. |

## 1. Créer le compte et le dépôt GitHub

1. Créez le compte du club sur github.com. Le nom de compte figurera dans l'adresse de l'app : `NOMDUCOMPTE.github.io`.
2. Cliquez sur **+**, puis sur **New repository**. Nom : **`NOMDUCOMPTE.github.io`** (exactement le nom du compte suivi de `.github.io`). Visibilité : **Public**. Cliquez sur **Create repository**.
   - Avec ce nom de dépôt, l'app sera à l'adresse `https://NOMDUCOMPTE.github.io/`, ce qui est indispensable pour le verrou d'adresse.

## 2. Fabriquer l'application chiffrée

1. Sur un **ordinateur**, ouvrez `NE-PAS-PUBLIER_outil-publication-PLC71.html` avec Chrome, Edge ou Firefox (double-clic).
2. Renseignez :
   - l'adresse e-mail d'archive des fiches ;
   - le nom du compte GitHub ;
   - le code d'accès du club, deux fois. Choisissez une courte phrase d'au moins 10 caractères.
3. Cliquez sur **Fabriquer app.bin.json**. Le fichier `app.bin.json` se télécharge.

## 3. Déposer sur GitHub

1. Dans le dépôt, cliquez sur le lien **uploading an existing file**.
2. Glissez **tout le contenu** de ce dossier (`index.html`, `sw.js`, `manifest.webmanifest`, `jspdf.umd.min.js`, le dossier `icons`) **ainsi que** le fichier `app.bin.json` de l'étape 2.
3. Cliquez sur **Commit changes**.
4. Ouvrez **Settings**, puis **Pages**. Source : **Deploy from a branch**. Branch : **main**, dossier **/ (root)**. Cliquez sur **Save**.
5. Après une ou deux minutes, l'app est en ligne à `https://NOMDUCOMPTE.github.io/`.

## 4. Installer sur le téléphone de chaque directeur de plongée (indispensable)

1. Ouvrez l'adresse et saisissez le code. Il n'est demandé qu'une fois par téléphone.
2. Installez l'app sur l'écran d'accueil :
   - **iPhone (Safari)** : bouton Partager, puis **Sur l'écran d'accueil** ;
   - **Android (Chrome)** : menu ⋮, puis **Installer l'application**.
3. Ouvrez ensuite **toujours** l'app depuis l'icône. Elle fonctionne alors sans réseau, et ses données ne sont pas effacées par le navigateur.

## Changer le code d'accès (par exemple au départ d'un directeur de plongée)

1. Ouvrez l'outil de publication et refaites l'étape 2 avec le **nouveau code**.
2. Sur GitHub, cliquez sur **Add file**, puis **Upload files**, déposez le nouveau `app.bin.json` et cliquez sur **Commit changes**.
3. Communiquez le nouveau code aux directeurs de plongée restants.

Dès qu'un téléphone se connecte au réseau, l'ancien code cesse de fonctionner et l'app demande le nouveau. Le directeur de plongée parti ne peut donc plus ouvrir l'app à jour.

## Fonctionnement au quotidien

1. **Le responsable** saisit les plongeurs : un par un, ou en collant trois colonnes (Nom, Prénom, Niveau) copiées depuis Excel. Il les envoie ensuite aux directeurs de plongée depuis Réglages, avec **Envoyer la liste des plongeurs**.
2. **Chaque directeur de plongée** importe ce fichier : écran Plongeurs, puis **Importer le fichier du club**.
3. **En sortie** : il crée la fiche, la remplit, touche **Clôturer et envoyer**, choisit Mail et envoie le PDF à l'adresse d'archive. **Cette boîte mail constitue l'archive légale** (conservation d'un an).
4. Tant qu'une fiche n'est pas envoyée, une pastille orange le rappelle.
5. Avant de changer de téléphone, faites une **sauvegarde complète** (Réglages), puis restaurez-la sur le nouveau téléphone.

## Ce qui protège l'application, et ses limites

- **Chiffrement (AES-256)** : sans le code, le contenu déposé sur GitHub est illisible. C'est une vraie protection, mais elle ne vaut que si le code reste secret.
- **Verrou d'adresse** : une copie remise en ligne ailleurs affiche « Application réservée ».
- **Code brouillé, nom et logo du club intégrés, mention de droits** : ils dissuadent la réutilisation et le maquillage de l'app.
- **Limite** : une personne qui connaît le code, sait programmer et y consacre du temps pourrait contourner ces protections. On ne peut pas l'empêcher totalement pour un programme qui tourne sur un téléphone.
- **Règles de contrôle** : elles suivent le Code du sport tel qu'il était rédigé avant l'arrêté du 17 octobre 2025. Elles doivent être validées par un moniteur du club, et les qualifications Nitrox ne sont pas contrôlées.
