# District 88 — Poster Riot Design Spec

**Date:** 2026-09-10  
**Template:** `restaurant-02`  
**Branch:** `feat/restaurant-02-district-88`  
**Status:** Proposed for implementation after written-spec approval

## 1. Purpose

District 88 est la deuxième direction restaurant du portfolio à construire après Maison Silex et Kuro. Le site doit ressembler à une vraie identité de street-food urbaine, pas à une variante colorée d’un restaurant existant.

Le travail principal du design est de communiquer en moins d’une seconde : **rapide, bruyant, direct, nocturne, gourmand**.

La homepage doit pouvoir être reconnue à petite taille grâce à trois éléments :

1. le mot d’ordre `EAT LOUD.` ;
2. une masse jaune acide très identifiable ;
3. une photographie food au flash avec un cadrage agressif.

## 2. Non-goals

District 88 n’est pas :

- un restaurant gastronomique ;
- un clone de Maison Silex ;
- un dérivé de Kuro ;
- un template SaaS ;
- un système de commande en ligne ;
- une application de livraison ;
- une réservation avec backend ;
- un dashboard ;
- un site rempli de cartes arrondies ;
- un collage aléatoire sans hiérarchie.

Les CTA peuvent mener au menu, au concept, à la galerie, au téléphone ou à l’email fictifs. Aucun paiement, panier ou authentification.

## 3. Primary communication job

**Message primaire :** District 88 est une cantine street-food qui assume une identité graphique forte et immédiate.

**Message secondaire :** le menu reste lisible malgré l’énergie visuelle.

**Message tertiaire :** lieu, horaires et informations pratiques doivent être disponibles rapidement.

Le design doit privilégier la sensation de poster imprimé et de menu mural plutôt qu’une succession de composants web conventionnels.

## 4. Differentiation gate — target 7/7

District 88 doit être différent de Kuro et Maison Silex sur les sept axes suivants.

| Axe | District 88 | Kuro / Silex à éviter |
| --- | --- | --- |
| Navigation | masthead graphique non-sticky + liens numérotés | header calme sticky Kuro / overlay photo Silex |
| Hero | collage affiche, titre court massif | split minimal Kuro / phrase serif plein écran Silex |
| Grid | blocs poster irréguliers et densité élevée | grille disciplinée Kuro / spreads luxueux Silex |
| Typography | condensed sans très lourde + sans fonctionnelle | serif éditoriale |
| Sections | menu board, ticket strip, manifesto, contact-sheet | chapitres gastronomiques ou séquences minimalistes |
| Photography | flash frontal, crops serrés, food en gros plan | photo calme / lumière naturelle luxe |
| Interactions | inversion brutale, ticker court, labels mécaniques | transitions discrètes élégantes |

L’acceptation visuelle exige au minimum 5/7 ; l’objectif est 7/7.

## 5. Brand identity

### 5.1 Name

**District 88**

Descriptor : `Street kitchen / Bruxelles`

Le nom est fictif et doit être présenté comme une marque complète, sans inventer d’existence réelle.

### 5.2 Palette

Palette verrouillée via `site.ts` et CSS custom properties :

- `--d88-ink`: `#090909`
- `--d88-paper`: `#F1EFE6`
- `--d88-acid`: `#EFFF00`
- `--d88-red`: `#FF3B30`
- `--d88-white`: `#FFFFFF`
- `--d88-muted`: `#77736B`

Le jaune acide est la couleur dominante de signal. Le rouge sert uniquement aux prix, numéros, alertes graphiques et petites ruptures.

Pas de bleu portfolio, pas de bordeaux Silex, pas d’ivoire minimal Kuro comme univers principal.

### 5.3 Typography

Utiliser `next/font/google`, scoped uniquement à District 88 :

- display : `Barlow Condensed`, poids 800/900 ;
- body / navigation / prix : `Barlow`, poids 400/600/700.

Le display peut atteindre des tailles très importantes mais doit conserver des coupures de ligne intentionnelles.

Pas de Bodoni, Georgia, Times, serif décorative ou typo manuscrite.

## 6. Composition principles

### 6.1 Poster logic

Les pages utilisent des blocs rectangulaires à bords francs :

- traits noirs 2–4px ;
- aplats jaune/noir/rouge ;
- labels imprimés ;
- grandes différences d’échelle ;
- texte vertical occasionnel sur desktop ;
- crops photo assumés ;
- aucune ombre de carte douce.

### 6.2 Controlled chaos

L’énergie ne doit jamais devenir une excuse pour l’illisibilité.

Règles :

- un seul focal point principal par viewport ;
- maximum deux accents colorés concurrents dans une même zone ;
- les stickers servent l’information, ils ne sont pas décoratifs par défaut ;
- éviter plus de trois rotations/inclinaisons visibles simultanément ;
- pas de texte posé sur une zone photo illisible sans fond solide ;
- les prix restent alignés et scannables.

### 6.3 No AI-slop markers

Interdits :

- glassmorphism ;
- gradients néon ;
- blobs abstraits génériques ;
- glow omniprésent ;
- cartes avec radius uniforme ;
- faux badges `Premium` / `Trending` ;
- accumulation de stickers sans fonction ;
- textes marketing génériques.

## 7. Navigation and shell

### Desktop

Header **non-sticky** d’environ 86–104px, composé comme le haut d’une affiche :

- bloc `DISTRICT 88` très gras à gauche ;
- micro-label `STREET KITCHEN / BRUXELLES` ;
- navigation numérotée à droite : `01 Menu`, `02 Concept`, `03 Galerie`, `04 Contact` ;
- fond acid ou paper selon page ;
- bordure noire épaisse.

Le header ne flotte pas au-dessus du hero et ne suit pas le scroll.

### Mobile

- wordmark + bouton texte `MENU` ;
- panneau plein écran noir/acid ;
- grands liens numérotés ;
- fermeture accessible ;
- cibles tactiles >= 44px.

### Footer

Footer noir très dense :

- grand `D88` ;
- navigation ;
- adresse fictive ;
- horaires ;
- Instagram générique ;
- disclosure de démonstration ;
- petit lien retour portfolio.

Pas de footer Silex monumental en serif et pas de footer minimal Kuro.

## 8. Routes

Routes explicites :

- `/sites/restaurant-02`
- `/sites/restaurant-02/menu`
- `/sites/restaurant-02/concept`
- `/sites/restaurant-02/galerie`
- `/sites/restaurant-02/contact`

Pas de catch-all.

Chaque route garde un seul `h1`.

## 9. Homepage

### 9.1 Hero — `EAT LOUD.`

Le hero est une affiche plutôt qu’une image élégante plein écran.

Desktop :

- environ 80–90svh ;
- fond acid dominant ;
- `EAT LOUD.` sur plusieurs lignes, Barlow Condensed 900 ;
- grande photo food flash découpée dans un bloc rectangulaire décentré ;
- petit ticket rouge avec horaires/adresse ;
- lien `MENU ↗` très direct ;
- numéro `88` surdimensionné partiellement hors cadre, mais sans couper le texte principal.

Aucun paragraphe long dans le hero.

### 9.2 Hot list

Section menu rapide immédiatement après le hero :

- 4 produits signatures ;
- noms très grands ;
- prix alignés ;
- descriptifs courts ;
- une photographie en rupture entre les lignes ;
- aucun composant card répété.

### 9.3 Manifesto strip

Bande noire avec texte blanc/acid :

`HOT. FAST. MESSY. GOOD.`

Puis trois phrases courtes sur la cuisine fictive : feu, texture, sauce.

### 9.4 Flash sequence

Séquence de 3–4 images au flash avec formats alternés, captions techniques et crops serrés.

### 9.5 Utility end

Bloc final utilitaire avant footer : horaires, adresse fictive, lien contact. Fond paper, grille simple, aucun argumentaire commercial.

## 10. Menu page

La page menu doit ressembler à un **grand panneau take-away / menu mural**, pas à un menu dégustation.

Structure :

1. header `MENU / 88` ;
2. catégories horizontales non interactives comme labels visuels ;
3. `SMASH`, `FRIED`, `SIDES`, `SAUCES`, `DRINKS` ;
4. chaque ligne affiche nom, description courte, prix ;
5. produits signatures marqués par un petit carré rouge ou `★` textuel ;
6. bloc allergènes/démo en fin de page.

Le menu doit rester lisible en mobile sans tableau horizontal.

## 11. Concept page

La page Concept fonctionne comme un manifeste imprimé :

- h1 court `NO QUIET FOOD.` ;
- grande phrase sur fond noir ;
- trois principes numérotés ;
- une photo cuisine/service au flash ;
- bloc `THE 88 RULE` fictif qui explique une règle interne simple de préparation ;
- aucun storytelling gastronomique long.

## 12. Gallery page

La galerie adopte un **contact-sheet / wall-poster** :

- hero court ;
- 8–10 visuels maximum ;
- alternance 1:1, paysage et portrait ;
- bordures noires ;
- petites légendes monospace-like obtenues avec Barlow ;
- une bande acid traversant une partie de la page ;
- aucune masonry aléatoire au runtime.

Les images sont toutes définies dans `site.ts` ou un fichier data dédié, jamais hardcodées dans les pages.

## 13. Contact page

La page Contact est volontairement utilitaire et graphique :

- grand `FIND US.` ;
- adresse fictive ;
- horaires ;
- téléphone/email `.example` ;
- accès fictif ;
- Instagram générique ;
- aucun formulaire ;
- aucun système de réservation ;
- aucun plan Google embarqué ;
- aucune iframe.

Une grande surface rouge peut occuper environ un tiers de la page pour casser le rythme sans nuire à la lecture.

## 14. Data architecture

Créer :

- `src/templates/restaurant-02/types.ts`
- `src/templates/restaurant-02/src/data/site.ts`
- `src/templates/restaurant-02/src/data/menu.ts`
- `src/templates/restaurant-02/lib/theme.ts`
- `src/templates/restaurant-02/lib/metadata.ts`

`site.ts` centralise au minimum :

- business ;
- colors ;
- contact ;
- hours ;
- social ;
- SEO ;
- hero ;
- navigation ;
- manifesto ;
- gallery ;
- concept ;
- demo disclosure.

`menu.ts` centralise catégories, plats, descriptions, prix et indicateurs signature.

Aucun contenu métier important ne doit être enterré dans les composants.

## 15. Components

Composants propres à District 88, sans réutiliser les composants visuels Kuro/Silex :

- `D88Header.tsx`
- `D88Footer.tsx`
- `PosterImage.tsx`
- `MenuBoard.tsx`
- `TickerStrip.tsx`
- `UtilityPanel.tsx`
- `PortfolioReturnLink.tsx`

Créer seulement les composants réellement nécessaires ; ne pas inventer une bibliothèque générique restaurant.

## 16. CSS and theme

Fichier principal :

`src/templates/restaurant-02/styles/district88.css`

Le thème passe par des CSS variables construites depuis `site.ts`.

Aucune génération dynamique de classes Tailwind à partir des données.

Animations autorisées :

- ticker horizontal lent ;
- inversion de couleur au hover ;
- translation 2–5px ;
- apparition mécanique de labels.

Toutes les animations doivent être neutralisées ou simplifiées avec `prefers-reduced-motion`.

## 17. Photography

Direction photo :

- flash frontal ou lumière dure ;
- aliments en très gros plan ;
- mains / préparation possibles sans visage identifiable nécessaire ;
- textures de papier, acier, plateau, sauce ;
- recadrages francs ;
- pas de photographie fine-dining sombre et élégante ;
- pas de stock photo corporate souriant.

Utiliser `next/image` pour les images de contenu.

Les URLs externes éventuelles doivent respecter les domaines déjà autorisés dans `next.config.ts`; ne pas élargir les remote patterns sans nécessité concrète.

## 18. SEO and indexation

Le layout District 88 définit :

```ts
robots: { index: false, follow: true }
```

Metadata fictive mais professionnelle : title et description issus de `site.ts`.

Aucun faux canonical vers une entreprise réelle.

## 19. Accessibility

- un `h1` par page ;
- landmarks sémantiques ;
- focus très visible ;
- contraste contrôlé acid/noir/rouge ;
- alt text descriptif ;
- menu mobile clavier accessible ;
- tap targets >= 44px ;
- pas de texte indispensable uniquement en rotation verticale sur mobile ;
- pas de scroll horizontal involontaire ;
- reduced motion ;
- prix et descriptions lisibles sans dépendre de la couleur.

## 20. Responsive behavior

### 1440×1000

- poster hero dense mais focal point unique ;
- `EAT LOUD.` lisible au premier regard ;
- photo et ticket ne créent aucune tangence accidentelle ;
- menu board scannable.

### 768×1024

- réduire les overlaps ;
- conserver les blocs acid/noir ;
- navigation mobile activée si la nav desktop devient serrée ;
- aucune typo coupée.

### 375×812

- une colonne structurée ;
- headline peut rester gigantesque mais doit rester dans le viewport ;
- contact/menu complètement lisibles ;
- galerie déterministe ;
- aucun débordement horizontal.

## 21. Portfolio integration

District 88 reste `planned` pendant toute l’implémentation.

Ordre de publication :

1. 5 routes implémentées ;
2. lint/build/smoke verts ;
3. browser QA 1440/768/375 ;
4. correction des défauts visuels ;
5. vraie capture homepage générée ;
6. fichier `public/previews/restaurant-02-home.webp` versionné ;
7. seulement ensuite `restaurant-02` passe `available` dans le registre ;
8. CI finale attend alors 3 démos disponibles si Kuro et Maison Silex restent les deux autres disponibles.

Le résumé portfolio final prévu est :

`Street-food Poster Riot — jaune acide, typographie condensée massive, photos au flash et composition inspirée des affiches imprimées.`

## 22. Testing strategy

### RED

Étendre la CI avant code produit pour exiger les routes District 88 et des marqueurs uniques, par exemple :

- `EAT LOUD.` ;
- `data-d88-page="home-poster"` ;
- `data-d88-page="menu-board"` ;
- `data-d88-page="concept-manifesto"` ;
- `data-d88-page="gallery-wall"` ;
- `data-d88-page="contact-utility"` ;
- `noindex, follow` sur les cinq routes.

Le test doit échouer parce que les routes n’existent pas encore, alors que lint/build restent verts.

### Intermediate GREEN

Après implémentation mais avant publication :

- npm install/ci ;
- ESLint ;
- production build ;
- cinq routes statiques ;
- smoke content ;
- `noindex, follow` ;
- District 88 toujours `planned`.

### Visual QA

Capturer au minimum la homepage et le menu :

- 1440×1000 ;
- 768×1024 ;
- 375×812.

Inspecter aussi une full-page homepage et une full-page gallery afin de détecter espaces morts, tangences, images cassées et collisions de blocs.

### Final GREEN

Après preview et publication :

- toutes les étapes techniques vertes ;
- vraie preview présente ;
- carte portfolio cliquable ;
- nouvel onglet si le redesign portfolio Swiss × Brutalist est déjà mergé ;
- 3 démos disponibles attendues ;
- aucune iframe.

## 23. Acceptance criteria

District 88 est accepté lorsque :

1. les cinq routes existent et sont entièrement navigables ;
2. l’identité Poster Riot est évidente en une seconde ;
3. `EAT LOUD.` est le focal point de la homepage ;
4. le site diffère d’au moins 5/7 axes de Kuro et Silex, objectif 7/7 ;
5. menu et contact restent fonctionnels malgré la densité visuelle ;
6. toutes les données métier sont centralisées ;
7. aucune dépendance backend/commande/réservation n’est ajoutée ;
8. `noindex, follow` est présent ;
9. mobile n’a ni collision ni overflow ;
10. QA navigateur réelle passe ;
11. vraie preview est générée depuis le rendu Next ;
12. le statut devient `available` uniquement après la QA ;
13. Kuro et Maison Silex ne sont pas modifiés par le template District 88.
