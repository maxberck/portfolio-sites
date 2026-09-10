# Restaurant 01 — Maison Silex Visual Redesign Spec

**Date:** 2026-09-10  
**Branch:** `feat/restaurant-01-silex-redesign`  
**Base:** `feat/portfolio-commercial-redesign`  
**Status:** Proposed for implementation after written-spec approval

## 1. Goal

Refondre complètement l'identité visuelle et la composition de Maison Silex sans modifier Kuro et sans reconstruire inutilement les données métier déjà présentes.

La version actuellement mergée de Maison Silex est fonctionnelle mais rejetée visuellement parce qu'elle reste trop proche de Kuro dans son vocabulaire : hero éditorial texte/photo, grande serif, lignes fines, espaces généreux et sections organisées de manière similaire.

La refonte doit donner l'impression que Maison Silex et Kuro ont été conçus par deux studios différents pour deux restaurants différents.

Maison Silex reste une démo fictive `noindex, follow`.

## 2. What stays stable

Conserver :

- les cinq routes existantes ;
- le contenu métier centralisé dans `site.ts` ;
- le menu structuré dans `menu.ts` ;
- les coordonnées de démonstration sûres ;
- les metadata et la règle `noindex, follow` ;
- `next/image` ;
- Server Components par défaut ;
- l'isolation sous `src/templates/restaurant-01/` ;
- l'absence de réservation, paiement, compte, CMS et backend.

Les données peuvent être enrichies uniquement si la nouvelle composition nécessite un champ éditable réel. Ne pas inventer un nouveau mega-schema.

## 3. What is explicitly replaced

La refonte peut supprimer ou remplacer les composants visuels actuels de Maison Silex, notamment :

- `SectionLabel` si son langage de micro-label éditorial maintient la ressemblance avec Kuro ;
- l'ancien hero split ;
- l'ancien header sticky classique ;
- l'ancienne grille de signatures ;
- l'ancien `VisitPanel` si sa présentation ressemble à une grille d'informations générique ;
- les anciennes proportions typographiques ;
- la majorité du CSS Maison Silex.

La refonte n'est pas un patch CSS incrémental. Le markup des pages peut être recomposé autour des mêmes données.

## 4. Creative direction — Dramatic Gastronomy / Fashion Editorial

Maison Silex devient un restaurant gastronomique à l'identité plus dramatique, sensuelle et photographique.

Références de langage, sans copie :

- magazine de mode haut de gamme ;
- livre de cuisine photographique ;
- campagne de parfum ;
- menu imprimé d'un restaurant gastronomique contemporain.

Le site doit privilégier :

- photographie plein cadre ;
- cadrages très rapprochés ;
- texte superposé de façon contrôlée ;
- changements francs de fond ;
- grands chapitres plutôt qu'une succession de sections identiques ;
- contrastes d'échelle ;
- surfaces bord à bord ;
- espaces parfois très denses, parfois très calmes.

## 5. Palette — clearly distinct from Kuro

Kuro conserve ivoire / charbon / rouge laqué.

Maison Silex utilise une famille vin / prune / rose minéral :

- `--silex-ink: #1f1415` — prune presque noir ;
- `--silex-wine: #761f2c` — bordeaux profond ;
- `--silex-paper: #f1e7e1` — rose minéral très pâle ;
- `--silex-surface: #fff9f5` — surface claire ;
- `--silex-butter: #e5c76f` — accent chaud très ponctuel ;
- `--silex-muted: #9b817e` — texte secondaire ;
- `--silex-white: #fffdf9`.

La homepage ne doit pas être majoritairement crème. Le hero est sombre/photographique et au moins une grande section utilise le bordeaux comme surface pleine.

Pas de noir + or classique. Pas de rouge laqué Kuro.

Les valeurs client-editables continuent d'être exposées via `site.ts` puis traduites en variables CSS au boundary du template.

## 6. Typography — guaranteed distinct from Kuro

Kuro utilise Georgia / Times pour ses grands titres et Arial pour l'utility text. Maison Silex ne doit donc pas dépendre d'une pile système qui peut retomber sur les mêmes fontes selon l'OS.

Utiliser `next/font/google`, scoped uniquement au layout Maison Silex :

- display : `Bodoni_Moda` ;
- body / navigation : `DM_Sans`.

Aucune de ces fontes ne doit être appliquée globalement au portfolio ou à Kuro.

Exposer les deux fontes via variables CSS locales, par exemple :

```css
.silex-site {
  --silex-display-font: var(--font-silex-display);
  --silex-body-font: var(--font-silex-body);
}
```

Comportement display :

- contraste fort entre roman et italic ;
- mots très grands pouvant dépasser 10vw sur desktop ;
- titres parfois en italic pur ;
- line-height serré autour de 0.86–0.98 pour les grandes compositions ;
- aucune répétition systématique du même couple eyebrow + title.

Le body reste compact et lisible en `DM Sans`.

Les petits marqueurs de chapitres utilisent des chiffres grands ou des libellés latéraux, pas les mêmes uppercase micro-labels que Kuro.

## 7. Differentiation gate versus Kuro — 7/7 targeted

### 1. Header / navigation

**Kuro:** header sticky clair, ligne fine, wordmark et navigation horizontale disciplinée.

**Silex:** header transparent positionné sur le hero, texte clair sur l'image, non sticky sur desktop. Wordmark plus large et navigation alignée en haut à droite. Après le hero, la page vit sans barre collée.

Mobile : bouton `Menu` explicite ouvrant un panneau plein écran bordeaux ou prune.

### 2. Hero

**Kuro:** split 5/7 texte + image avec beaucoup de vide.

**Silex:** photographie plein viewport, bord à bord, avec titre monumental superposé près du bas. Aucun split grid hero.

### 3. Grid system

**Kuro:** grille 12 colonnes régulière dans un shell centré.

**Silex:** alternance de full-bleed, spreads 60/40, textes qui mordent légèrement sur une image, bandes de couleur et blocs décalés. Pas de shell identique appliqué à toutes les sections.

### 4. Typography

**Kuro:** Georgia/Times régulière, titres calmes et structurés.

**Silex:** Bodoni Moda expressive, italic fréquent, tailles extrêmes et compositions typographiques comme dans un magazine.

### 5. Section order and form

**Kuro:** sections verticales régulières séparées par des règles.

**Silex:** chapitres de formes différentes : manifesto color block, photographic spread, vertical chef portrait, menu folio, oversized visit poster.

### 6. Photography

**Kuro:** images calmes, rectangulaires, contenues dans la grille.

**Silex:** images plein cadre, macro, crop agressif, portrait vertical, débordements contrôlés et changement fréquent de ratio.

### 7. Interactions / CTA

**Kuro:** liens soulignés très retenus.

**Silex:** CTA textuels plus larges, numérotation de chapitres, hover d'image léger, menu mobile plein écran et grands liens de navigation/footer.

Target : différence 7/7, minimum accepté 5/7.

## 8. Header behavior

### Desktop

Le header se trouve visuellement dans le hero :

- `Maison Silex` à gauche ;
- navigation à droite ;
- texte blanc ou surface claire ;
- pas de fond blur ;
- pas de ligne horizontale sous le header ;
- pas de sticky.

Le contraste doit rester lisible sur la photo grâce au choix de la zone d'image et, si nécessaire, à un voile uni semi-transparent localisé. Éviter un gradient décoratif générique.

### Mobile

- wordmark ;
- bouton `Menu` >= 44px ;
- panneau plein écran ;
- cinq liens verticaux très grands ;
- bouton fermer accessible ;
- bloc contact court en bas du panneau ;
- focus clavier visible ;
- fermeture via bouton explicite ;
- pas de scroll horizontal.

Le menu mobile est le principal Client Component de la refonte.

## 9. Homepage composition

### Chapter 01 — Full-bleed hero

Viewport desktop proche de 100svh.

Composition :

- image hero pleine largeur/hauteur ;
- wordmark/navigation en overlay en haut ;
- petit contexte `Bruxelles — Cuisine gastronomique` près d'un bord ;
- headline `Une cuisine de saison, précise et sensible.` monumental en bas, sur 2–3 lignes maximum ;
- lien `Voir le menu` intégré au bas du hero ;
- aucun container split.

Le titre est le focal typographique ; la photographie est le focal visuel. Ils doivent fonctionner comme une seule composition, pas deux colonnes concurrentes.

### Chapter 02 — Manifesto wine block

Grande section bordeaux pleine largeur.

Contenu :

- numéro `02` très grand ;
- phrase éditoriale issue de la philosophie de la saison ;
- liste d'ingrédients traitée comme une composition typographique et non comme des chips ;
- texte clair ;
- petit accent beurre possible sur un seul détail.

### Chapter 03 — Signature photographic spread

Au lieu de trois cartes :

- une image paysage très large ;
- une image portrait plus petite partiellement décalée ;
- deux ou trois plats légendés directement sur la composition ;
- descriptions courtes ;
- aucune bordure-card répétée.

### Chapter 04 — Chef portrait

Portrait vertical occupant environ 45–55% de la largeur desktop.

À côté ou légèrement superposé :

- nom du chef ;
- citation en grand italic ;
- paragraphe court ;
- lien vers `La Maison`.

Le layout doit évoquer une double-page de magazine.

### Chapter 05 — Menu folio

Fond clair.

Afficher un extrait du menu comme une feuille imprimée agrandie :

- grande numérotation ;
- plats alignés sans cards ;
- prix du menu très visible ;
- lien `Menu complet`.

Le folio peut être décalé horizontalement dans une grande zone vide, mais pas centré de la même manière que Kuro.

### Chapter 06 — Visit poster

La fin de page devient un poster typographique sombre ou bordeaux :

- `Bruxelles` très grand ;
- horaires ;
- adresse de démonstration ;
- téléphone ;
- email `.example` ;
- lien `Contact`.

Pas de petit panneau d'informations encadré.

## 10. Menu page — printed object, not Kuro list

Le menu est traité comme un objet imprimé monumental.

Desktop :

- intro très courte sur fond bordeaux ou prune ;
- titre `Menu` en display italic très grand ;
- contenu principal sur surface claire ;
- deux colonnes de menu lorsque l'espace le permet ;
- grandes respirations entre actes ;
- numéro d'acte très visible ;
- prix dans un bloc typographique séparé ;
- aucun système de rangées avec index identique à Kuro.

Mobile :

- une colonne ;
- actes clairement séparés ;
- prix lisible ;
- aucune table nécessitant scroll horizontal.

## 11. Maison page — long-form photographic story

Cette page est plus narrative que la homepage.

Structure :

1. photo d'intérieur plein écran avec titre superposé ;
2. histoire de la Maison dans une colonne étroite décalée ;
3. portrait chef et biographie ;
4. grand pull quote sur fond rose minéral ;
5. fournisseurs/produits sous forme de texte et une seule image macro ;
6. final très court vers le menu/contact.

Ne pas reprendre les mêmes six chapitres de la homepage.

## 12. Gallery page — contact sheet / fashion sequence

La galerie n'est pas un masonry générique.

Desktop :

- première image plein écran ou presque ;
- séquence de paires portrait/paysage ;
- une rangée contact-sheet de trois crops serrés ;
- une image verticale isolée avec beaucoup de vide ;
- captions minimales seulement quand utiles.

Mobile :

- ordre éditorial conservé ;
- ratios variés ;
- aucun chevauchement risqué ;
- pas de carrousel.

## 13. Contact page — oversized practical poster

Le contact doit être presque l'opposé du contact Kuro.

Composition :

- surface prune ou bordeaux dominante ;
- `Bruxelles` comme display principal ;
- coordonnées dans de grands blocs typographiques ;
- horaires comme liste simple ;
- label explicite `Adresse de démonstration` ;
- note portfolio discrète mais visible ;
- retour vers Menu/Maison en grands liens footer.

Pas de formulaire, map, iframe ou réservation.

## 14. Gallery and image data

Réutiliser en priorité les références d'images déjà centralisées dans `site.ts` afin que la refonte reste principalement visuelle.

Si une composition nécessite plus d'images, ajouter uniquement les références nécessaires dans `site.ts` avec :

- `src` ;
- `alt` ;
- `width` ;
- `height` ;
- position/crop éditable si nécessaire.

Pas d'URL d'image cachée dans les composants.

## 15. CSS architecture

Le CSS reste isolé à Maison Silex.

Principes :

- scope `.silex-site` ;
- variables de thème au boundary ;
- pas de classes Kuro ;
- pas d'abstraction visuelle partagée avec les autres restaurants ;
- `overflow-x` non utilisé pour masquer artificiellement des bugs de layout ;
- `clamp()` autorisé pour les titres et espacements ;
- positions absolues uniquement pour des overlays contrôlés dans des conteneurs explicites ;
- fallback mobile retire les superpositions risquées.

## 16. Motion

Motion minimale :

- zoom d'image très léger au hover sur certains liens photographiques ;
- transitions de couleur/opacity <= 250ms ;
- aucun scroll-jacking ;
- aucun parallax obligatoire ;
- aucun curseur custom ;
- `prefers-reduced-motion: reduce` désactive les transformations non essentielles.

## 17. Accessibility

- landmarks sémantiques ;
- un `h1` par route ;
- ordre DOM cohérent même lorsque des éléments se superposent visuellement ;
- focus visible ;
- menu mobile keyboard-operable ;
- contrastes lisibles ;
- alt text existant conservé ou amélioré ;
- touch targets >= 44px pour contrôles interactifs ;
- aucune information essentielle uniquement dans une image ;
- aucun texte important illisible sur photo.

## 18. Responsive behavior

### Desktop >= 1100px

- hero plein viewport ;
- grands overlaps contrôlés ;
- double-page layouts ;
- images edge-to-edge ;
- display type très grand.

### Tablet 768–1099px

- réduire les overlaps ;
- conserver les backgrounds pleine largeur ;
- navigation passe au bouton menu lorsque les cinq liens ne tiennent plus confortablement ;
- spreads deviennent 55/45 ou une composition verticale alternée.

### Mobile <= 767px

- menu plein écran ;
- hero image plein écran avec titre plus compact ;
- une colonne principale ;
- aucune image absolute hors de son conteneur ;
- grandes sections colorées conservées ;
- ratios photo variés ;
- contact poster reste typographiquement fort ;
- aucune largeur horizontale forcée.

## 19. SEO and fictional-business safety

Conserver les metadata uniques existantes ou les ajuster uniquement pour refléter la même marque.

Chaque route reste :

```ts
robots: {
  index: false,
  follow: true,
}
```

Ne pas ajouter Maison Silex au sitemap indexable.

Les coordonnées restent explicitement fictives et l'adresse reste labellisée `Adresse de démonstration` dans la page Contact.

## 20. Portfolio integration and preview gate

Pendant la refonte :

- `restaurant-01` reste `planned` dans le portfolio ;
- aucune fausse preview n'est affichée ;
- Kuro reste l'unique démo `available`.

Après validation fonctionnelle ET visuelle de Maison Silex :

1. mettre `preview-target.json` sur `restaurant-01` / `/sites/restaurant-01` ;
2. utiliser le workflow browser capture pour générer une vraie capture 1440×1000 ;
3. vérifier visuellement la capture ;
4. versionner `public/previews/restaurant-01-home.webp` ;
5. enregistrer cette preview dans `portfolioSites` ;
6. seulement ensuite passer `restaurant-01` à `available` ;
7. la CI finale attend exactement 2 démos disponibles.

## 21. Visual QA gate

Avant publication, capturer au minimum :

- desktop 1440×1000 ;
- tablet 768×1024 ;
- mobile 375×812.

Vérifier :

- hero non similaire à Kuro ;
- header réellement différent ;
- pas de collision du titre overlay ;
- menu mobile utilisable ;
- sections bordeaux/rose correctement contrastées ;
- aucune grille de cards générique ;
- aucun débordement horizontal ;
- galerie stable ;
- contact lisible ;
- preview portfolio fidèle au vrai rendu.

## 22. CI verification

Conserver les gates :

- `npm ci` ;
- `npm run lint` ;
- `npm run build` ;
- smoke tests HTTP.

Adapter les assertions Maison Silex pour vérifier :

- les cinq routes existantes répondent ;
- `noindex, follow` reste présent ;
- nouveau hero contient toujours la promesse principale ;
- le menu contient `Menu dégustation` ;
- la page Maison contient `La Maison` ;
- Galerie et Contact restent accessibles ;
- Kuro reste accessible ;
- le portfolio conserve 16 cartes et 4 par catégorie ;
- après publication : fichier preview Silex non vide ;
- après publication : exactement 2 cartes `available` et 2 previews réelles.

## 23. Non-goals

Ne pas ajouter :

- backend ;
- formulaire fonctionnel ;
- réservation ;
- paiement ;
- authentification ;
- CMS ;
- dashboard ;
- maps API ;
- carrousel JS ;
- animation library ;
- nouvelle dépendance npm sans besoin démontré ;
- refonte de Kuro ;
- changement du nouveau portfolio commercial hors intégration de la preview Silex.

## 24. Completion definition

Maison Silex est considérée refondue uniquement lorsque :

- sa composition n'est plus un dérivé de Kuro ;
- elle atteint au moins 5/7 sur la gate de différenciation, avec objectif 7/7 ;
- les cinq routes restent fonctionnelles ;
- la CI est verte ;
- les trois captures de QA visuelle sont contrôlées ;
- une vraie preview homepage est générée ;
- `restaurant-01` passe `available` seulement après ces gates.
