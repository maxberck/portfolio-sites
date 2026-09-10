# Portfolio Commercial Redesign — Design Spec

**Date:** 2026-09-10  
**Branch:** `feat/portfolio-commercial-redesign`  
**Status:** Proposed for implementation after written-spec approval

## 1. Goal

Refondre le portfolio principal pour qu'il ressemble à un vrai site commercial de studio web, et non à une variation visuelle de Kuro ou à un portfolio générique généré par IA.

Le portfolio doit permettre à un prospect de comprendre rapidement le parcours suivant :

1. choisir son métier ;
2. voir des exemples de vrais sites ;
3. ouvrir une démo complète ;
4. comprendre que cette direction peut être adaptée à son activité ;
5. contacter le créateur pour demander un site.

Le portfolio reste un catalogue de 16 démos réparties en quatre catégories : Garage, Restaurant, Coiffure et Tatoueur.

## 2. Design references and transferable principles

Les références approuvées sont `hashtagpaid.com` et `filmbot.com`.

Le projet ne copie ni leur marque, ni leur mise en page exacte, ni leurs composants. Il reprend uniquement les principes transférables suivants :

- promesse commerciale très lisible ;
- navigation courte et évidente ;
- CTA visible sans être agressif ;
- montrer le travail rapidement au lieu de commencer par une longue introduction abstraite ;
- grands visuels de projets ;
- alternance de rythmes plutôt qu'une grille répétitive de cartes identiques ;
- textes concrets et orientés client ;
- identité forte mais suffisamment neutre pour laisser les démos conserver leur propre univers.

## 3. Anti-AI design rules

Le redesign doit éviter les signes désormais trop associés aux templates IA ou aux portfolios génériques :

- pas de fond beige/crème comme langage principal ;
- pas de grande serif monumentale répétée sur chaque section ;
- pas de hero occupant presque tout le viewport uniquement avec une phrase abstraite ;
- pas de glassmorphism ;
- pas de gradients décoratifs génériques ;
- pas de rangées de cartes toutes identiques avec même ratio et même composition ;
- pas de pills omniprésentes ;
- pas de texte vague du type « crafted digital experiences » ;
- pas de blobs ou formes décoratives gratuites ;
- pas de fausses captures de sites ;
- pas d'iframe de démo dans le catalogue.

Le portfolio doit rester crédible en niveaux de gris : sa hiérarchie ne doit pas dépendre uniquement de l'accent bleu.

## 4. Visual direction — Commercial Studio Directory

### 4.1 Palette

Base :

- background : blanc froid / gris très clair ;
- text : noir presque pur ;
- muted : gris neutre ;
- line : gris clair ;
- accent : bleu électrique utilisé pour les états actifs, liens clés et petits signaux d'action ;
- dark section : noir possible pour un seul bloc CTA final.

La palette du portfolio ne doit pas ressembler à Kuro et ne doit pas reprendre la palette Maison Silex.

### 4.2 Typography

Le portfolio abandonne son système serif dominant.

Direction typographique :

- display/headlines : sans-serif moderne, nette et dense ;
- body : sans-serif lisible ;
- metadata, numéros, catégories : monospace ou sans-serif à métrique technique ;
- aucune serif requise dans le portfolio principal.

Le contraste doit venir de l'échelle, de la graisse, de la casse et de la grille, pas du duo « grosse serif + petite grotesque » utilisé par beaucoup de portfolios éditoriaux.

### 4.3 Composition

Le portfolio utilise une grille 12 colonnes mais ne rend pas toutes les cartes identiques.

Principes :

- hero compact ;
- projets visibles très tôt ;
- une seule ancre focale principale par zone ;
- alternance de projets larges, moyens et duos ;
- metadata discrète ;
- previews dominantes ;
- espaces généreux entre groupes, mais pas de vide décoratif excessif ;
- alignements nets et utilitaires.

## 5. Information architecture

Les routes actuelles sont conservées :

- `/`
- `/categories/garage`
- `/categories/restaurant`
- `/categories/coiffure`
- `/categories/tatoueur`

Les routes des démos restent sous `/sites/<template-id>`.

Aucun changement d'URL inutile n'est introduit.

## 6. Header

Le header doit devenir plus commercial et plus utile.

Structure desktop :

- marque / nom du portfolio à gauche ;
- navigation catégories directement visible ;
- lien `Tous` ;
- `Garage` ;
- `Restaurant` ;
- `Coiffure` ;
- `Tattoo` ;
- CTA `Créer mon site` ou `Me contacter` à droite.

Le header peut devenir sticky si le comportement reste stable et ne masque pas le contenu.

Sur mobile :

- marque ;
- bouton de navigation accessible ;
- catégories dans un panneau simple ;
- CTA toujours accessible ;
- pas de navigation horizontale coupée.

## 7. Homepage hero

Le hero actuel est supprimé.

Le nouveau hero est compact et doit faire comprendre immédiatement l'offre.

Message principal recommandé :

> Des sites qui ressemblent à de vraies marques.

Message de soutien :

> Choisissez une direction, explorez la démo, adaptez-la à votre activité.

Le hero peut contenir :

- le positionnement ;
- un court texte ;
- un compteur de démos disponibles ;
- un CTA vers le catalogue ;
- un CTA contact secondaire.

Il ne doit pas repousser la première preview hors de l'écran sur un desktop standard.

## 8. Category navigation and tabs

Les catégories restent une fonction centrale du produit.

Le catalogue affiche un rail ou groupe d'onglets :

- `Tous`
- `Garages`
- `Restaurants`
- `Coiffure`
- `Tattoo`

Sur la homepage, les onglets servent de navigation claire vers les collections. Ils peuvent filtrer côté client uniquement si cela apporte une vraie amélioration ; sinon les routes de catégories restent le comportement principal afin de conserver une architecture simple et robuste.

Sur une page catégorie :

- la catégorie active est évidente ;
- le prospect voit immédiatement les quatre directions prévues pour son métier ;
- la page rappelle qu'une direction peut être adaptée à son entreprise.

## 9. Project previews

### 9.1 Product rule

Toute démo avec `status: "available"` doit disposer d'une preview visuelle réelle dans le portfolio.

Une preview réelle signifie une capture statique du rendu de la homepage de la démo, et non :

- une simple photo hero ;
- une illustration générée ;
- une mini-maquette CSS approximative ;
- une iframe ;
- un screenshot d'un autre site.

### 9.2 Storage

Les captures sont des assets statiques versionnés :

`public/previews/<site-id>-home.webp`

Exemples :

- `public/previews/restaurant-04-home.webp`
- `public/previews/restaurant-01-home.webp`
- `public/previews/restaurant-02-home.webp`

Les captures doivent être optimisées pour le web et ne doivent pas charger les 16 démos en arrière-plan.

### 9.3 Data contract

Le contrat `PortfolioSite` évolue vers une preview structurée :

```ts
export type PortfolioPreview = {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPosition?: string;
};

export type PortfolioSite = {
  id: string;
  name: string;
  category: SiteCategory;
  direction: string;
  summary: string;
  href: `/sites/${string}`;
  status: SiteStatus;
  preview?: PortfolioPreview;
};
```

Invariant :

- `available` => `preview` obligatoire avant publication ;
- `planned` => preview absente autorisée.

La CI doit vérifier cet invariant au minimum pour les démos disponibles connues.

### 9.4 Planned state

Une démo `planned` ne reçoit jamais une fausse preview.

Elle utilise un placeholder graphique clairement neutre comprenant :

- catégorie ;
- numéro ;
- direction ;
- état `En préparation`.

Le placeholder doit rester secondaire face aux vraies captures disponibles.

## 10. Catalogue composition

Le catalogue n'utilise plus une simple grille uniforme `repeat(2, 1fr)` pour toutes les cartes.

La composition doit varier de façon déterministe, sans randomisation client :

- projet disponible majeur : grand format ;
- autres projets disponibles : alternance grand/moyen ;
- projets planned : formats plus compacts ;
- certains couples peuvent être affichés côte à côte ;
- la hiérarchie doit rester stable entre rendus.

La variation ne doit pas empêcher de scanner rapidement les 16 projets.

Chaque projet conserve sous la preview :

- nom ;
- catégorie ;
- direction ;
- état ou CTA ;
- résumé court.

La preview et le titre d'une démo disponible ouvrent la vraie démo.

## 11. Category pages

Les pages catégorie gardent la même identité de portfolio mais ne doivent pas être des copies exactes de la homepage avec quatre cartes.

Structure :

1. intro métier courte ;
2. quatre directions visibles très rapidement ;
3. previews disponibles en grand format ;
4. planned states clairement identifiés ;
5. bloc commercial final : « Vous aimez une direction ? Elle peut être adaptée à votre activité. » ;
6. CTA contact.

Le nombre de démos par catégorie reste quatre.

## 12. Commercial copy

Le ton doit être concret, court et orienté vers un prospect local ou une petite entreprise.

Exemples de formulations autorisées :

- `Voir la démo`
- `Voir les sites restaurant`
- `Cette direction peut être adaptée à votre activité.`
- `Besoin d'un site similaire ?`
- `Créer mon site`
- `4 directions pour votre restaurant`

Éviter le jargon de design ou d'agence lorsque le prospect n'en a pas besoin.

## 13. Commercial conversion section

La homepage termine par une section dédiée à la vente du service.

Elle explique simplement :

1. choisir une base ;
2. adapter identité, contenus, images et pages ;
3. publier le site final pour le client.

Un CTA contact est présent.

Il n'y a pas :

- de checkout ;
- de prix fictifs obligatoires ;
- de paiement ;
- de compte ;
- de formulaire prétendant envoyer des données sans backend.

## 14. Relationship with demo websites

Le portfolio possède sa propre identité et ne doit servir de template à aucune démo.

Kuro reste inchangé.

Maison Silex sera refondu dans un sous-projet séparé après la refonte du portfolio.

District 88 et les autres démos suivront ensuite.

Le portfolio et les démos peuvent partager uniquement des primitives techniques globales nécessaires à Next.js, jamais une direction visuelle commune.

## 15. Demo differentiation gate

Avant de passer une nouvelle démo à `available`, elle doit être significativement différente des démos existantes.

Évaluation sur sept axes :

1. header/navigation ;
2. hero ;
3. système de grille ;
4. typographie ;
5. ordre et forme des sections ;
6. traitement photographique ;
7. interactions et CTA.

Une nouvelle démo doit différer des démos comparables sur au moins 5 axes sur 7.

Cette règle est une gate de revue design. Elle n'est pas réduite à un simple test automatisé de classes CSS.

## 16. Responsive behavior

Desktop :

- les previews peuvent varier de largeur ;
- la composition conserve une lecture claire ;
- le hero reste court ;
- le header et les filtres restent accessibles.

Tablet :

- la grille réduit les variations extrêmes ;
- aucun chevauchement de textes ;
- les previews restent suffisamment grandes pour comprendre le site.

Mobile :

- une colonne principale ;
- previews larges ;
- metadata compacte ;
- navigation catégories accessible ;
- CTA tactiles >= 44px lorsque pertinent ;
- aucune largeur horizontale forcée.

## 17. Accessibility

- HTML sémantique ;
- un `h1` par page ;
- focus visible ;
- contrastes WCAG lisibles ;
- alt text descriptif sur les previews réelles ;
- placeholders planned décoratifs ou décrits sans prétendre être une capture ;
- navigation clavier complète ;
- reduced motion respecté ;
- les previews ne doivent pas être la seule source de l'information nom/catégorie/statut.

## 18. Performance

Le portfolio ne monte jamais les 16 mini-sites simultanément.

Les previews sont de simples images statiques optimisées.

Utiliser `next/image` pour les previews locales avec `sizes` cohérents.

Les images hors viewport restent lazy-loadées.

Les routes des démos conservent le code splitting naturel de Next.js.

Aucun carrousel JS lourd n'est ajouté pour présenter les projets.

## 19. SEO

Le portfolio et les catégories restent indexables.

Les démos fictives restent `noindex, follow`.

Le sitemap principal continue de contenir uniquement les routes portfolio indexables.

Les previews n'altèrent pas ce comportement.

## 20. Testing and verification

La gate existante `npm ci`, `npm run lint`, `npm run build` et smoke tests HTTP reste obligatoire.

La CI du redesign doit vérifier :

- homepage accessible ;
- quatre pages catégorie accessibles ;
- 16 projets toujours présents ;
- quatre projets par catégorie ;
- Kuro toujours accessible ;
- les liens catégories présents ;
- le CTA commercial présent ;
- une démo `available` possède une preview ;
- aucun iframe n'est utilisé pour les previews ;
- Kuro n'est pas modifié par ce sous-projet.

Une QA visuelle navigateur reste obligatoire avant signoff Designly final :

- mobile ~375px ;
- tablet ~768px ;
- desktop ~1440px ;
- test miniature/thumbnail ;
- test niveaux de gris ;
- vérification des collisions/tangences ;
- cohérence des previews.

## 21. Scope

### In scope

- refonte visuelle complète du portfolio principal ;
- refonte des pages catégorie ;
- nouveau header/footer commercial ;
- navigation catégories visible ;
- système de previews ;
- contrat preview structuré ;
- vraie preview Kuro ;
- placeholders planned ;
- CTA commercial ;
- responsive/accessibilité/performance/SEO ;
- mise à jour CI correspondante.

### Out of scope

- refonte de Kuro ;
- refonte Maison Silex dans ce sous-projet ;
- implémentation District 88 ;
- implémentation des 13 autres démos ;
- backend ;
- authentification ;
- paiement ;
- CMS ;
- dashboard ;
- base de données ;
- génération runtime de screenshots.

## 22. Acceptance criteria

Le sous-projet est acceptable lorsque :

1. le portfolio ne ressemble plus visuellement à Kuro ;
2. le portfolio ne repose plus sur une grande serif et un fond crème ;
3. les catégories Garage, Restaurant, Coiffure et Tattoo restent immédiatement accessibles ;
4. les projets apparaissent rapidement après le hero ;
5. les cartes ne donnent plus l'impression de 16 variantes identiques ;
6. Kuro affiche une vraie preview statique de sa homepage ;
7. aucune démo planned ne présente une fausse capture ;
8. la fonction commerciale « choisir → explorer → adapter → contacter » est évidente ;
9. les 16 entrées et quatre catégories sont préservées ;
10. Kuro reste fonctionnel et visuellement inchangé ;
11. lint, build et smoke tests sont verts ;
12. aucune nouvelle dépendance runtime n'est nécessaire uniquement pour le catalogue.
