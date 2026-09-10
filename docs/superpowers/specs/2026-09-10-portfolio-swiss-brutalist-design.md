# Portfolio Swiss × Brutalist — Design Spec

**Date:** 2026-09-10  
**Branch:** `feat/portfolio-swiss-brutalist`  
**Status:** Proposed for implementation after written-spec approval

## 1. Purpose

Cette spec devient la référence active pour le design du portfolio principal. Elle complète la spec `portfolio-vitrine-refresh` et remplace sa direction visuelle générique par une direction plus précise : **65% Swiss-style / 35% Brutalist**.

Le portfolio reste strictement un **site vitrine de projets**. Il ne vend pas directement une prestation, ne comporte aucun tunnel commercial et ne contient aucune zone `Créer mon site`.

Son rôle est de :

1. présenter les 16 projets ;
2. rendre les quatre catégories immédiatement accessibles ;
3. montrer les vraies previews des démos disponibles ;
4. faire sentir que chaque démo possède une identité distincte ;
5. ouvrir facilement une démo sans faire perdre le portfolio au visiteur.

## 2. Hard rules

### 2.1 No commercial funnel

Il ne doit exister dans la homepage ou les pages catégories :

- aucun `Créer mon site` ;
- aucun `Faire créer mon site` ;
- aucun bloc `Comment ça marche` commercial ;
- aucun formulaire de brief ;
- aucune page `/creer-mon-site` ;
- aucun bouton de commande ;
- aucun texte de type `On adapte ce modèle à votre activité` ;
- aucune promesse commerciale générique.

Les interactions principales sont uniquement :

- `Voir la démo ↗` ;
- `Explorer` ;
- `Voir la catégorie` ;
- `Tous les projets` ;
- `Retour aux projets`.

### 2.2 No SaaS-card language

Le portfolio ne doit pas ressembler à une dashboard ou à une marketplace de templates :

- pas de grille uniforme de petites cartes ;
- pas de pills/capsules répétées ;
- pas de glassmorphism ;
- pas de coins arrondis systématiques ;
- pas de gradients décoratifs ;
- pas de shadow cards flottantes ;
- pas de badges marketing type `Premium`, `Best seller`, `Popular`.

### 2.3 Demo integrity

Kuro et Maison Silex ne sont pas des templates visuels pour les futurs sites. Leur design reste propre à leur identité.

Les futurs projets doivent continuer à différer sur au moins 5 axes sur 7 :

1. navigation ;
2. hero ;
3. grille ;
4. typographie ;
5. structure des sections ;
6. traitement photo ;
7. interactions / CTA.

## 3. Creative direction — 65% Swiss / 35% Brutalist

### 3.1 Swiss foundation

La structure principale suit une logique Swiss-style :

- grille 12 colonnes stricte ;
- alignements visibles ;
- hiérarchie typographique nette ;
- informations courtes ;
- usage raisonné de l’espace vide ;
- numérotation claire ;
- labels de catégorie précis ;
- forte lisibilité ;
- compositions asymétriques mais rationnelles.

### 3.2 Brutalist disruption

Le côté brutaliste intervient comme rupture, sans rendre le site chaotique :

- traits noirs francs de 1 à 3px ;
- grands aplats noir ou couleur signal ;
- blocs rectangulaires bord à bord ;
- grandes différences d’échelle typographique ;
- previews parfois volontairement surdimensionnées ;
- quelques compositions 8/4, 4/8 ou pleine largeur ;
- labels techniques affichés directement plutôt que décorés ;
- hover direct et mécanique, sans animation douce excessive.

Le brutalism ne doit pas dégrader l’accessibilité ni créer des collisions volontaires.

### 3.3 Palette

Palette principale :

- fond : blanc cassé / papier froid ;
- texte : noir profond ;
- surfaces secondaires : blanc ;
- lignes : noir ou gris très clair selon importance ;
- accent unique : **bleu signal saturé**.

Le bleu ne doit pas recouvrir toute l’interface. Il sert aux états actifs, numéros importants et quelques grandes surfaces de rupture.

Aucune palette crème/ivoire proche de Kuro ou bordeaux/prune proche de Maison Silex.

## 4. Typography

Le portfolio doit utiliser une identité typographique indépendante des démos.

Direction :

- display / titres : sans-serif grotesque compacte ;
- texte : sans-serif neutre très lisible ;
- metadata, numéros et catégories : monospace ou grotesque technique ;
- pas de serif dominante.

Les titres doivent être courts et factuels. Pas de wording abstrait de type `Digital experiences crafted with intention`.

Exemples de wording acceptable :

- `16 projets. 4 catégories.`
- `Restaurants / 04 projets`
- `Kuro — Japonais minimaliste`
- `Maison Silex — Gastronomique éditorial`

Le code peut utiliser une fonte sans-serif via `next/font` si cela améliore la constance du rendu, sans ajouter de package npm.

## 5. Header

Le header doit être plus graphique que le header actuel, tout en restant simple.

Desktop :

- marque `Sites vitrines` à gauche ;
- navigation centrale ou droite : `Tous`, `Garage`, `Restaurant`, `Coiffure`, `Tattoo` ;
- metadata discrète `16 projets / 4 catégories` ;
- aucun CTA commercial ;
- séparation par un trait noir net ;
- état actif très visible par couleur ou inversion, pas par pill.

Mobile :

- marque à gauche ;
- bouton `Menu` rectangulaire ou texte simple ;
- panneau de navigation plein écran ou quasi plein écran, composé comme une liste typographique ;
- uniquement les catégories et `Tous` ;
- aucun CTA de vente.

Le header peut être sticky si la QA confirme qu’il ne prend pas trop de hauteur.

## 6. Homepage

### 6.1 Hero

Le hero est court et fonctionnel.

Contenu :

- kicker : `PORTFOLIO / SITES VITRINES` ;
- h1 : `16 projets. 4 catégories.` ;
- phrase courte : `Garage, restaurant, coiffure et tattoo — des directions visuelles volontairement différentes.` ;
- compteur des démos disponibles ;
- lien facultatif `Explorer ↓` vers les projets.

Le hero ne doit pas occuper un écran entier. Une vraie preview doit être visible rapidement sur desktop.

Composition recommandée :

- h1 sur 7 à 8 colonnes ;
- metadata / compteur sur 4 à 5 colonnes ;
- grande règle horizontale noire ;
- aucun gros bouton rempli.

### 6.2 Featured demos

Les démos `available` arrivent immédiatement après le hero.

Kuro et Maison Silex, lorsqu’ils sont tous deux présents sur `main`, servent de premier contraste visuel :

- une preview peut occuper 8 colonnes et l’autre 4 ;
- la section suivante inverse ou modifie le rapport ;
- les captures restent entières et lisibles ;
- le texte accompagne la preview sans la dominer.

Aucun composant ne doit forcer toutes les démos disponibles dans le même ratio.

### 6.3 Category index

Les catégories apparaissent sous forme de grandes lignes ou blocs typographiques :

- `01 — GARAGE` ;
- `02 — RESTAURANT` ;
- `03 — COIFFURE` ;
- `04 — TATTOO`.

Chaque entrée affiche le nombre de projets et mène vers sa page catégorie.

Le traitement doit ressembler à un index éditorial ou une affiche de programmation, pas à quatre cards.

### 6.4 Remaining projects

Le reste du catalogue conserve les 16 projets visibles.

Pattern déterministe recommandé :

- projet A : 8 colonnes ;
- projet B : 4 colonnes ;
- projet C : 6 colonnes ;
- projet D : 6 colonnes ;
- projet E : 4 colonnes ;
- projet F : 8 colonnes ;
- puis répétition contrôlée avec inversion.

Pas de randomisation au runtime.

Les projets planned restent visibles sous forme de surfaces graphiques simples, avec numéro, nom, catégorie, direction prévue et `En préparation`.

## 7. Project tile design

### 7.1 Available project

Une démo disponible affiche :

- vraie preview browser-rendered ;
- numéro ;
- nom ;
- catégorie ;
- direction courte et précise ;
- `Voir la démo ↗` ;
- éventuellement une description d’une phrase maximum.

La preview et le nom sont cliquables.

### 7.2 New-tab behavior

Toute démo `available` doit s’ouvrir dans un **nouvel onglet / nouveau contexte de navigation** depuis le portfolio et les pages catégories :

```tsx
target="_blank"
rel="noreferrer"
```

Le portfolio reste donc ouvert dans l’onglet d’origine.

Une fois dans la démo, les liens internes de la démo continuent à naviguer normalement dans ce nouvel onglet. On ne force pas un nouvel onglet à chaque page interne.

Le lien doit comporter une indication accessible que la démo s’ouvre dans un nouvel onglet, via texte visible ou `aria-label` approprié.

Les projets `planned` ne sont pas cliquables vers une route inexistante.

### 7.3 Hover

Hover desktop :

- translation très légère de l’image ou inversion d’un label ;
- `Voir la démo ↗` apparaît ou devient plus contrasté ;
- pas de zoom spectaculaire ;
- transition courte, 120–180ms.

Respect obligatoire de `prefers-reduced-motion`.

## 8. Description contract

Les descriptions du portfolio doivent décrire **ce qui existe réellement**, sans langage marketing vague.

### 8.1 Available demos

Une description disponible doit mentionner 2 à 4 caractéristiques concrètes visibles.

Exemples approuvés :

- **Kuro** : `Minimal japonais — ivoire et charbon, lignes fines, rythme calme et mise en page disciplinée.`
- **Maison Silex** : `Gastronomique éditorial — photographie plein écran, Bodoni expressive, bordeaux profond et compositions en chapitres.`

### 8.2 Planned demos

Une description planned doit être clairement prospective et courte.

Exemple :

- `Direction prévue : grille industrielle, typographie utilitaire et données atelier très structurées.`

Elle ne doit pas décrire comme déjà implémenté un comportement, une page ou une interaction qui n’existe pas encore.

### 8.3 Forbidden description patterns

Éviter :

- `Une expérience unique` ;
- `Un design premium` ;
- `Pensé pour convertir` ;
- `Adapté à votre activité` ;
- `Une présence digitale impactante` ;
- toute phrase qui pourrait être copiée telle quelle sur les 16 projets.

## 9. Category pages

Routes conservées :

- `/categories/garage` ;
- `/categories/restaurant` ;
- `/categories/coiffure` ;
- `/categories/tatoueur`.

Chaque catégorie conserve le même système Swiss × Brutalist mais avec une composition propre :

1. grand numéro de catégorie ;
2. titre ;
3. phrase factuelle courte ;
4. compteur `04 projets` ;
5. quatre projets ;
6. grandes previews pour les disponibles ;
7. surfaces graphiques simples pour les planned ;
8. retour vers `Tous les projets`.

Aucun argumentaire commercial.

## 10. Footer

Footer très simple :

- `Sites vitrines / Portfolio 2026` ;
- les quatre catégories ;
- lien GitHub discret si conservé ;
- copyright.

Pas de slogan commercial, pas de CTA rempli, pas de contact de commande.

## 11. Preview contract

Contrat existant conservé :

`available` => vraie preview obligatoire dans `public/previews/<site-id>-home.webp`.

`planned` => aucun faux screenshot.

Les previews sont rendues avec `next/image`. Aucun iframe, aucune reconstruction miniature du site en HTML/CSS.

## 12. Relationship with #paid / Filmbot references

L’inspiration vient uniquement de principes de composition :

- projets visuellement dominants ;
- grands changements de rythme ;
- alternance de blocs pleins et d’espace ;
- typographie structurante ;
- peu de texte ;
- navigation simple.

Ne pas copier :

- branding ;
- palette ;
- animations spécifiques ;
- structure exacte des sections ;
- wording ;
- composants propriétaires.

Le résultat final doit rester identifiable comme le portfolio `Sites vitrines`.

## 13. Accessibility

- un seul h1 par page ;
- landmarks sémantiques ;
- focus visible ;
- navigation clavier complète ;
- alt text descriptif pour chaque preview ;
- indication accessible pour les liens ouvrant un nouvel onglet ;
- contraste conforme ;
- statuts `available/planned` compréhensibles sans couleur ;
- cibles tactiles >= 44px sur mobile ;
- pas de scroll horizontal ;
- reduced motion respecté.

## 14. Responsive behavior

### Desktop — 1440×1000

- grille 12 colonnes pleinement visible ;
- asymétries 8/4 et 6/6 assumées ;
- au moins une preview visible rapidement ;
- metadata alignée précisément ;
- aucun espace vide accidentel.

### Tablet — 768×1024

- simplifier les asymétries extrêmes ;
- layouts principaux 8/4 deviennent 7/5 ou une colonne selon lisibilité ;
- header et catégories restent lisibles ;
- previews suffisamment grandes.

### Mobile — 375×812

- une colonne principale ;
- ordre des projets conservé ;
- previews presque bord à bord ;
- métadonnées compactes ;
- menu accessible ;
- aucune collision ;
- aucun débordement typographique.

## 15. Technical boundaries

Le redesign doit principalement toucher :

- `app/(portfolio)/page.tsx` ;
- `src/portfolio/components/PortfolioHeader.tsx` ;
- `src/portfolio/components/PortfolioFooter.tsx` ;
- `src/portfolio/components/SiteCard.tsx` ;
- `src/portfolio/components/CatalogueGrid.tsx` ;
- `src/portfolio/components/CategoryNavigation.tsx` ;
- `src/portfolio/components/CategoryPage.tsx` ;
- `src/portfolio/data/sites.ts` pour descriptions précises ;
- `src/portfolio/styles/portfolio.css` ;
- `.github/workflows/verify.yml` pour les assertions de régression.

Ne pas modifier le design interne de :

- Kuro ;
- Maison Silex ;
- toute autre démo existante.

Le bugfix Maison Silex est traité séparément dans la PR dédiée et ne doit pas être mélangé à ce redesign.

## 16. Testing strategy

### RED gate

Avant le redesign, la CI doit être étendue pour vérifier au minimum :

- absence de `Créer mon site` ;
- hero `16 projets. 4 catégories.` ;
- navigation des cinq entrées `Tous / Garage / Restaurant / Coiffure / Tattoo` ;
- 16 projets ;
- quatre projets par catégorie ;
- liens de démos available avec `target="_blank"` ;
- `rel="noreferrer"` ;
- aucune route planned active ;
- aucune iframe ;
- vraies previews pour chaque available.

Les nouveaux tests doivent échouer sur l’ancienne interface pour la raison attendue avant l’implémentation.

### GREEN gate

Après implémentation :

- `npm ci` ;
- lint ;
- production build ;
- smoke routes ;
- assertions catalogue ;
- assertions new-tab ;
- vérification des previews ;
- vérification absence de CTA commercial.

### Browser QA

Captures obligatoires :

- homepage 1440×1000 ;
- homepage 768×1024 ;
- homepage 375×812 ;
- une page catégorie disponible aux trois largeurs.

Vérifier :

- hiérarchie claire au thumbnail test ;
- aucun vide accidentel ;
- pas d’effet grille SaaS uniforme ;
- asymétries visiblement intentionnelles ;
- descriptions lisibles ;
- previews non écrasées ;
- navigation mobile fonctionnelle ;
- aucun CTA commercial ;
- lien demo clairement identifiable ;
- ouverture de démo dans un nouvel onglet vérifiée par test DOM.

## 17. Acceptance criteria

Le redesign est accepté lorsque :

1. la direction se lit comme 65% Swiss / 35% Brutalist ;
2. la grille est rationnelle mais les projets ne forment pas 16 cartes identiques ;
3. les vraies previews dominent l’expérience ;
4. les descriptions available correspondent réellement aux designs visibles ;
5. les descriptions planned restent prospectives ;
6. chaque démo available s’ouvre dans un nouvel onglet depuis le portfolio ;
7. le portfolio reste ouvert dans l’onglet initial ;
8. aucun `Créer mon site` ou tunnel commercial ne subsiste ;
9. Kuro et Maison Silex ne sont pas modifiés par ce sous-projet ;
10. CI et QA navigateur sont vertes ;
11. le système reste prêt à accueillir les 14 autres templates sans les forcer à partager un design commun.

## 18. Next template sequence

Après validation et implémentation de ce portfolio :

1. `restaurant-02` — District 88 / Poster Riot ;
2. `restaurant-03` — Terra / Mediterranean warmth ;
3. `garage-01` — Atelier Noir ;
4. `garage-02` — Torque Works ;
5. `garage-03` — Apex Motorsport ;
6. `garage-04` — Studio Motor ;
7. `coiffure-01` — Maison Élise ;
8. `coiffure-02` — District Cut ;
9. `coiffure-03` — Form Studio ;
10. `coiffure-04` — Chromatic ;
11. `tatoueur-01` — Black Ritual ;
12. `tatoueur-02` — Line Gallery ;
13. `tatoueur-03` — Lucky XIII ;
14. `tatoueur-04` — Matière.

Chaque template conserve son cycle propre : design spec → plan → implémentation → QA → vraie preview → publication.