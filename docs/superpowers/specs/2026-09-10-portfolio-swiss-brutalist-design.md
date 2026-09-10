# Portfolio Swiss × Brutalist — Design Spec

**Date:** 2026-09-10  
**Branch:** `feat/portfolio-swiss-brutalist`  
**Status:** Proposed for implementation after written-spec approval

## 1. Purpose

Cette spec devient la référence active pour le design du portfolio principal. Elle complète la spec `portfolio-vitrine-refresh` et remplace sa direction visuelle générique par une direction précise : **65% Swiss-style / 35% Brutalist**.

Le portfolio reste strictement un **site vitrine de projets**. Il ne vend pas directement une prestation, ne comporte aucun tunnel commercial et ne contient aucune zone `Créer mon site`.

Son rôle est de présenter les 16 projets, rendre les quatre catégories immédiatement accessibles, montrer les vraies previews des démos disponibles, faire sentir que chaque démo possède une identité distincte et ouvrir facilement une démo sans faire perdre le portfolio au visiteur.

## 2. Hard rules

### 2.1 No commercial funnel

Il ne doit exister dans la homepage ou les pages catégories : aucun `Créer mon site`, aucun `Faire créer mon site`, aucun bloc `Comment ça marche` commercial, aucun formulaire de brief, aucune page `/creer-mon-site`, aucun bouton de commande, aucun texte de type `On adapte ce modèle à votre activité` et aucune promesse commerciale générique.

Les interactions principales sont uniquement : `Voir la démo ↗`, `Explorer`, `Voir la catégorie`, `Tous les projets` et `Retour aux projets`.

### 2.2 No SaaS-card language

Le portfolio ne doit pas ressembler à une dashboard ou à une marketplace de templates : pas de grille uniforme de petites cartes, pas de pills répétées, pas de glassmorphism, pas de coins arrondis systématiques, pas de gradients décoratifs, pas de shadow cards flottantes et pas de badges marketing type `Premium` ou `Best seller`.

### 2.3 Demo integrity

Kuro et Maison Silex ne sont pas des templates visuels pour les futurs sites. Les futurs projets doivent continuer à différer sur au moins 5 axes sur 7 : navigation, hero, grille, typographie, structure des sections, traitement photo et interactions/CTA.

## 3. Creative direction — 65% Swiss / 35% Brutalist

### 3.1 Swiss foundation

La structure suit une grille 12 colonnes stricte, des alignements visibles, une hiérarchie typographique nette, des informations courtes, de l’espace vide actif, une numérotation claire, des labels de catégorie précis et des compositions asymétriques mais rationnelles.

### 3.2 Brutalist disruption

Le côté brutaliste intervient comme rupture contrôlée : traits noirs francs de 1 à 3px, grands aplats noirs ou bleu signal, blocs rectangulaires bord à bord, grandes différences d’échelle typographique, previews parfois surdimensionnées, rapports 8/4, 4/8 et pleine largeur, labels techniques affichés directement et hover mécanique court.

Le brutalism ne doit jamais créer de collision volontaire ni dégrader l’accessibilité.

### 3.3 Palette

Palette verrouillée : fond papier froid `#f3f3ef`, texte noir `#0a0a0a`, blanc `#ffffff`, gris technique `#d8d8d2`, accent bleu signal `#2447ff`.

Le bleu sert aux états actifs, numéros importants et quelques surfaces de rupture. Il ne devient pas un fond généralisé. Aucune palette crème/ivoire proche de Kuro ou bordeaux/prune proche de Maison Silex.

## 4. Typography

Le portfolio utilise une identité typographique indépendante des démos et sans nouvelle fonte distante :

- display et texte : `Arial, "Helvetica Neue", Helvetica, sans-serif` ;
- metadata / numéros / catégories : `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` ;
- aucune serif dominante.

La personnalité vient de l’échelle, du poids, du tracking, des alignements et de la grille, pas d’une police décorative.

Les titres sont courts et factuels. Wording attendu : `16 projets. 4 catégories.`, `Restaurants / 04 projets`, `Kuro — Japonais minimaliste`, `Maison Silex — Gastronomique éditorial`.

Pas de wording abstrait comme `Digital experiences crafted with intention`.

## 5. Header

Le header est **sticky** sur desktop et mobile, avec une hauteur compacte et un trait noir net en séparation.

Desktop : marque `Sites vitrines` à gauche ; navigation `Tous`, `Garage`, `Restaurant`, `Coiffure`, `Tattoo` ; metadata discrète `16 projets / 4 catégories` ; aucun CTA commercial. L’état actif utilise le bleu signal ou une inversion rectangulaire, jamais une pill.

Mobile : marque à gauche ; bouton texte `Menu` ; panneau plein écran composé comme une liste typographique ; uniquement `Tous` et les quatre catégories ; aucun CTA de vente.

## 6. Homepage

### 6.1 Hero

Le hero reste court. Contenu verrouillé : kicker `PORTFOLIO / SITES VITRINES`, h1 `16 projets. 4 catégories.`, phrase `Garage, restaurant, coiffure et tattoo — des directions visuelles volontairement différentes.`, compteur de démos disponibles et lien texte `Explorer ↓` vers le catalogue.

Composition desktop : h1 sur 8 colonnes, metadata/compteur sur 4 colonnes, règle horizontale noire pleine largeur. Le hero ne dépasse pas environ 55svh afin qu’une vraie preview apparaisse rapidement.

### 6.2 Featured demos

Les démos `available` arrivent immédiatement après le hero.

Premier duo desktop verrouillé : **Kuro occupe 8 colonnes et Maison Silex 4 colonnes**. Le bloc suivant inverse le rythme avec une composition 4/8 ou 6/6 selon les projets disponibles suivants. Les captures restent entières et lisibles ; le texte accompagne la preview sans la dominer.

Aucun composant ne force toutes les démos disponibles dans le même ratio.

### 6.3 Category index

Les catégories sont de grandes lignes typographiques : `01 — GARAGE`, `02 — RESTAURANT`, `03 — COIFFURE`, `04 — TATTOO`. Chaque entrée affiche `04 projets` et mène vers sa page catégorie. Le rendu doit évoquer un index éditorial ou une affiche de programmation, jamais quatre petites cards.

### 6.4 Remaining projects

Pattern déterministe desktop : 8 colonnes, 4 colonnes, 6/6, puis 4/8, et répétition contrôlée avec inversion. Pas de randomisation.

Les projets `planned` restent visibles sous forme de surfaces graphiques simples avec numéro, nom, catégorie, direction prévue et `En préparation`.

## 7. Project tile design

### 7.1 Available project

Une démo disponible affiche vraie preview browser-rendered, numéro, nom, catégorie, direction courte précise, `Voir la démo ↗` et au maximum une description d’une phrase. La preview et le nom sont cliquables.

### 7.2 New-tab behavior

Toute démo `available` s’ouvre dans un **nouvel onglet / nouveau contexte de navigation** depuis la homepage et les pages catégories : `target="_blank"` et `rel="noreferrer"`.

Le portfolio reste ouvert dans l’onglet d’origine. Une fois dans la démo, les liens internes naviguent normalement dans ce nouvel onglet ; on ne force pas de nouvel onglet pour chaque page interne.

Le lien comporte une indication accessible que la démo s’ouvre dans un nouvel onglet, via texte visible ou `aria-label`. Les projets `planned` ne pointent jamais vers une route inexistante.

### 7.3 Hover

Hover desktop : translation de l’image de 2 à 4px ou inversion du label `Voir la démo ↗`, transition 120–180ms, aucun zoom spectaculaire. `prefers-reduced-motion` désactive les translations.

## 8. Description contract

Les descriptions décrivent ce qui existe réellement et bannissent le marketing vague.

### 8.1 Available demos

Une description disponible mentionne 2 à 4 caractéristiques concrètes visibles.

- **Kuro** : `Minimal japonais — ivoire et charbon, lignes fines, rythme calme et mise en page disciplinée.`
- **Maison Silex** : `Gastronomique éditorial — photographie plein écran, Bodoni expressive, bordeaux profond et compositions en chapitres.`

### 8.2 Planned demos

Une description planned est clairement prospective et commence par `Direction prévue :` ou utilise une formulation équivalente sans prétendre que le design est déjà réalisé.

Exemple : `Direction prévue : grille industrielle, typographie utilitaire et données atelier très structurées.`

### 8.3 Forbidden description patterns

Interdits : `Une expérience unique`, `Un design premium`, `Pensé pour convertir`, `Adapté à votre activité`, `Une présence digitale impactante`, ou toute phrase réutilisable telle quelle sur les 16 projets.

## 9. Category pages

Routes conservées : `/categories/garage`, `/categories/restaurant`, `/categories/coiffure`, `/categories/tatoueur`.

Chaque page catégorie utilise : grand numéro de catégorie, titre, phrase factuelle courte, compteur `04 projets`, quatre projets, grandes previews pour les disponibles, surfaces graphiques simples pour les planned et lien `← Tous les projets`. Aucun argumentaire commercial.

## 10. Footer

Footer : `Sites vitrines / Portfolio 2026`, quatre catégories, GitHub discret et copyright. Aucun slogan commercial, CTA rempli ou contact de commande.

## 11. Preview contract

`available` => vraie preview obligatoire dans `public/previews/<site-id>-home.webp`.

`planned` => aucun faux screenshot.

Les previews utilisent `next/image`. Aucun iframe et aucune reconstruction miniature du site en HTML/CSS.

## 12. Reference boundary

L’inspiration de `hashtagpaid.com` et `filmbot.com` porte uniquement sur les principes : projets visuellement dominants, changements de rythme, alternance blocs pleins/espace, typographie structurante, contenu court et navigation simple.

Ne pas copier leur branding, palette, animations, structure exacte, wording ou composants propriétaires.

## 13. Accessibility

Un h1 par page, landmarks sémantiques, focus visible, navigation clavier complète, alt text descriptif, indication accessible pour les liens ouvrant un nouvel onglet, contraste suffisant, statuts compréhensibles sans couleur, cibles tactiles >= 44px, aucun scroll horizontal et reduced motion respecté.

## 14. Responsive behavior

Desktop 1440×1000 : grille 12 colonnes, asymétries 8/4 et 6/6, première preview rapidement visible, aucun vide accidentel.

Tablet 768×1024 : les rapports 8/4 deviennent 7/5 quand la preview reste lisible ; sinon passage à une colonne. Aucun overlap de metadata.

Mobile 375×812 : une colonne, previews presque bord à bord, metadata compacte, menu plein écran, aucun débordement typographique.

## 15. Technical boundaries

Fichiers principaux :

- `app/(portfolio)/page.tsx` ;
- `src/portfolio/components/PortfolioHeader.tsx` ;
- `src/portfolio/components/PortfolioFooter.tsx` ;
- `src/portfolio/components/SiteCard.tsx` ;
- `src/portfolio/components/CatalogueGrid.tsx` ;
- `src/portfolio/components/CategoryNavigation.tsx` ;
- `src/portfolio/components/CategoryPage.tsx` ;
- `src/portfolio/data/sites.ts` ;
- `src/portfolio/styles/portfolio.css` ;
- `.github/workflows/verify.yml`.

Ne pas modifier le design interne de Kuro, Maison Silex ou d’une autre démo. Le bugfix Maison Silex reste dans sa PR dédiée et n’est pas mélangé au redesign portfolio.

## 16. Testing strategy

### RED gate

Avant l’implémentation, étendre la CI pour exiger : absence de `Créer mon site`, hero `16 projets. 4 catégories.`, navigation `Tous / Garage / Restaurant / Coiffure / Tattoo`, 16 projets, quatre projets par catégorie, liens available avec `target="_blank"` et `rel="noreferrer"`, aucune route planned active, aucune iframe et vraies previews pour les available.

Ces assertions doivent échouer sur l’ancienne interface pour la raison attendue avant le code produit.

### GREEN gate

Après implémentation : `npm ci`, lint, build production, smoke routes, assertions catalogue, assertions new-tab, previews et absence de CTA commercial.

### Browser QA

Captures obligatoires : homepage 1440×1000, 768×1024, 375×812 ; une page catégorie aux mêmes largeurs.

Vérifier : hiérarchie claire au thumbnail test, aucun vide accidentel, pas de grille SaaS uniforme, asymétries intentionnelles, descriptions lisibles, previews non écrasées, navigation mobile fonctionnelle, aucun CTA commercial et lien démo clairement identifiable.

## 17. Acceptance criteria

Le redesign est accepté lorsque :

1. la direction se lit comme 65% Swiss / 35% Brutalist ;
2. la grille est rationnelle mais les projets ne forment pas 16 cartes identiques ;
3. les vraies previews dominent l’expérience ;
4. les descriptions available correspondent réellement aux designs visibles ;
5. les descriptions planned restent prospectives ;
6. chaque démo available s’ouvre dans un nouvel onglet ;
7. le portfolio reste ouvert dans l’onglet initial ;
8. aucun `Créer mon site` ou tunnel commercial ne subsiste ;
9. Kuro et Maison Silex ne sont pas modifiés par ce sous-projet ;
10. CI et QA navigateur sont vertes ;
11. le système peut accueillir les 14 autres templates sans leur imposer un design commun.

## 18. Next template sequence

Après ce portfolio : District 88 / Poster Riot, Terra / Mediterranean warmth, les quatre garages, les quatre coiffures puis les quatre tatoueurs.

Chaque template conserve son cycle propre : design spec → plan → implémentation → QA → vraie preview → publication.