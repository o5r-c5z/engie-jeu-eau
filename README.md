# Le jeu de l'eau

Jeu éducatif en ligne destiné aux enfants. Le joueur découvre le cycle de l'eau,
les métiers autour de l'eau et des gestes simples pour éviter de gaspiller et de
polluer l'eau, en replaçant des vignettes sur une illustration. Trois thèmes
sont proposés (`cycle-eau`, `bons-gestes`, `metiers`) ; une fois les trois
terminés, le joueur télécharge un diplôme d'expert au format PDF.

Le jeu est prévu pour un écran d'au moins 768 px de large (ordinateur ou
tablette) ; les navigateurs antérieurs à Internet Explorer 9 et les petits
écrans reçoivent un message d'incompatibilité.

Réalisé pour **Engie**, avec l'agence **Sydo**.

**Année de réalisation / livraison : 2015.**

## Contenu

- `index.html` — page unique, contient tous les écrans (accueil, bienvenue,
  chargement, choix du thème, plateau de jeu, modales, félicitations).
- `config.rb` — configuration Compass (chemins, plugin `animation`).
- `css/sass/` — sources Sass : `screen.scss` (styles principaux), `print.scss`,
  `ie.scss`.
- `css/stylesheets/` — CSS compilé par Compass (`screen.css`, `print.css`,
  `ie.css`), servi par `index.html`.
- `js/` — scripts de l'application, un fichier par écran (`index.js`,
  `accueil.js`, `bienvenue.js`, `chargement.js`, `themes.js`, `jeu.js`), leurs
  versions `.min.js`, et `script.min.js` qui les concatène dans l'ordre
  `chargement`, `accueil`, `themes`, `jeu` (seul `script.min.js` est chargé par
  `index.html`).
- `lib/` — librairies tierces : `bootstrap/` (3.3.4), `jquery/` (1.11.2),
  `jquery-ui/` (1.11.4), `jquery-ui-touch-punch/`, `jquery-dragscrollable/`,
  `jcarousel/` (0.3.1), `createjs/` (PreloadJS 0.4.1, SoundJS 0.5.2),
  `modernizr/`.
- `img/` — visuels : `accueil/`, `ui/` et un dossier par thème
  (`cycle-eau/`, `bons-gestes/`, `metiers/`) contenant l'illustration et les
  vignettes.
- `sounds/` — bandes-son MP3 : consignes, messages de bonne réponse par thème,
  messages de mauvaise réponse, jingles.
- `fonts/` — polices `SansaPro` et `Vectora` (OTF), intégrées via `@font-face`.
- `pdf/diplome.pdf` — diplôme téléchargé en fin de partie.

## Stack technique

- Site statique, une seule page HTML, sans back-end.
- Sass compilé avec Compass (`config.rb`), plugin `compass-animation` pour les
  keyframes.
- Bootstrap 3 (grille et modales).
- jQuery, jQuery UI (drag & drop des vignettes), jquery-ui-touch-punch (drag &
  drop tactile), jquery-dragscrollable (déplacement du plateau zoomé), jCarousel
  (bande de vignettes).
- CreateJS : PreloadJS pour le préchargement des sons, SoundJS pour la lecture.
- Modernizr pour la détection des media queries et du tactile.
- Librairies tierces versionnées dans `lib/` (pas de gestionnaire de paquets).

## Développement

Prérequis : Ruby avec les gems `compass` et `compass-animation`.

```sh
gem install compass compass-animation
compass watch          # recompile css/sass/ vers css/stylesheets/
```

Servir le dossier à la racine avec n'importe quel serveur de fichiers statiques,
par exemple :

```sh
python3 -m http.server 8000
```

`config.rb` fixe `http_path = "/"` : le site est prévu pour être servi à la
racine d'un domaine. `line_comments = true` laisse les commentaires de
localisation des sélecteurs dans le CSS compilé.

Le dépôt ne contient pas de configuration de build JavaScript (`package.json`,
`Gruntfile`, `Rakefile`) : `js/*.min.js` et `js/script.min.js` sont générés hors
dépôt et doivent être régénérés après toute modification des sources.

## Crédits

- **Commanditaire** — Engie
- **Agence** — Sydo
- **Développement** — Olivier Charvoz

Copyright © 2015 Engie. Tous droits réservés.
