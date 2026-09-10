# Portfolio Vitrine Refresh — Design Spec

**Date:** 2026-09-10  
**Branch:** `feat/portfolio-vitrine-refresh`  
**Status:** Proposed for implementation after written-spec approval

## 1. Purpose

Cette spec remplace comme référence active la direction `portfolio-commercial-redesign` pour l'interface du portfolio principal.

Le portfolio doit être un **site vitrine de projets**, pas un tunnel de vente et pas un configurateur de site. Son rôle est de montrer clairement les catégories, les directions créatives et les vraies démos disponibles.

Le visiteur doit pouvoir :

1. comprendre immédiatement qu'il regarde une collection de sites vitrines ;
2. parcourir les quatre catégories ;
3. comparer visuellement des directions différentes ;
4. ouvrir les vraies démos complètes ;
5. revenir facilement au portfolio.

Le portfolio conserve 16 projets : 4 Garage, 4 Restaurant, 4 Coiffure et 4 Tatoueur.

## 2. Hard rule — no "Créer mon site"

Cette règle est non négociable pour le portfolio principal et les pages catégories.

Il ne doit exister :

- aucun bouton `Créer mon site` ;
- aucune section `Votre prochain site` ;
- aucun formulaire de brief ;
- aucun tunnel de conversion ;
- aucun bloc `Comment ça marche` expliquant comment acheter ou adapter un site ;
- aucun CTA demandant de commander, réserver ou acheter une prestation ;
- aucune page `/creer-mon-site` ;
- aucun lien de navigation présenté comme une action commerciale.

Les seules actions principales sont des actions de navigation ou d'exploration :

- `Voir la démo` ;
- `Explorer` ;
- `Voir les restaurants` ;
- `Voir les garages` ;
- `Voir la catégorie` ;
- `Retour aux projets`.

Un lien GitHub peut rester discret dans le footer, mais il n'est jamais présenté comme un CTA de commande.

## 3. References and inspiration boundary

Références validées :

- `hashtagpaid.com` pour le rythme visuel, les grands blocs, les séquences de contenu et la capacité à rendre une page vivante sans multiplier les effets décoratifs ;
- `filmbot.com` pour la manière de mettre les réalisations au premier plan et de faire respirer des captures de projets comme de vrais objets visuels.

Le portfolio ne copie ni leur branding, ni leurs composants, ni leur palette exacte, ni leur mise en page exacte.

On reprend uniquement :

- navigation courte ;
- gros visuels très tôt ;
- sections clairement différenciées ;
- changements de rythme entre les projets ;
- utilisation de la typographie comme structure ;
- grandes zones colorées ou neutres servant de support aux captures ;
- contenu court ;
- aucun empilement de petites cartes SaaS.

## 4. Primary communication job

Message à comprendre en moins de cinq secondes :

> Une collection de sites vitrines aux directions créatives très différentes.

Le portfolio ne doit pas expliquer une offre commerciale. Il doit surtout donner envie d'ouvrir les démos.

## 5. Visual direction — Project Showcase

### 5.1 General feel

Le portfolio doit ressembler à un site de studio qui expose son travail, pas à une marketplace de templates.

Caractéristiques :

- fond principal clair et net ;
- texte noir / charbon ;
- un accent vif unique pour les états actifs et quelques surfaces ;
- typographie sans-serif forte ;
- metadata plus petite et technique ;
- grandes captures de sites ;
- très peu de bordures de cartes ;
- peu ou pas de coins arrondis ;
- pas de glassmorphism ;
- pas de gradients décoratifs ;
- pas de grosse serif éditoriale utilisée comme identité principale ;
- pas de capsules/pills répétées partout.

Le portfolio doit être distinct visuellement de Kuro et de Maison Silex.

### 5.2 Typography

- display : sans-serif contemporaine, forte, compacte ;
- texte : sans-serif simple et lisible ;
- metadata / numéros / statuts : monospace ou petite grotesque technique ;
- pas de serif dominante.

Les titres doivent être courts. L'échelle crée la hiérarchie, pas une accumulation de styles.

## 6. Header

Le header reste simple et visible.

Desktop :

- marque `Sites vitrines` à gauche ;
- navigation `Tous`, `Garage`, `Restaurant`, `Coiffure`, `Tattoo` ;
- aucun CTA commercial à droite.

La zone droite peut contenir seulement une metadata discrète, par exemple `16 projets / 4 catégories`, ou rester vide.

Mobile :

- marque ;
- bouton `Menu` ;
- panneau contenant uniquement les catégories ;
- aucun bouton de création, commande ou contact commercial.

## 7. Homepage structure

La homepage est volontairement courte avant les projets.

### 7.1 Hero

Le hero remplace le discours commercial actuel.

Structure :

- petit kicker `Portfolio / Sites vitrines` ;
- h1 court : `16 sites. 4 univers.` ;
- phrase secondaire : `Restaurants, garages, coiffure et tattoo — chaque démo possède sa propre direction.` ;
- compteur de démos disponibles ;
- aucune action `Créer mon site` ;
- un seul lien éventuel `Explorer les projets ↓` vers le catalogue.

Le hero ne doit pas occuper tout le viewport. Une vraie preview doit apparaître rapidement sur desktop.

### 7.2 Featured projects

Les démos disponibles sont montrées avant les projets planned.

Les deux premières disponibles — Kuro et Maison Silex lorsque Silex est mergé — doivent être présentées comme deux **featured projects** très différents :

- une grande preview dominante ;
- nom et direction en dessous ou à côté selon la composition ;
- aucun cadre de carte générique obligatoire ;
- clic sur la preview et le titre vers la vraie démo ;
- `Voir la démo ↗` comme seule action.

### 7.3 Category index

Après les featured projects, afficher les quatre catégories comme un index visuel :

- `01 Garage` ;
- `02 Restaurant` ;
- `03 Coiffure` ;
- `04 Tattoo`.

Chaque ligne ou bloc mène vers sa route catégorie. Le design doit être large et typographique, pas une grille de quatre petites cards identiques.

### 7.4 Remaining catalogue

Le reste des 16 projets apparaît ensuite avec une composition variable et déterministe.

Les projets `planned` restent visibles mais secondaires. Ils utilisent un placeholder graphique neutre, jamais une fausse capture.

## 8. Project card / project tile redesign

`SiteCard` ne doit plus donner l'impression d'une carte UI répétée.

Pour une démo disponible :

- preview réelle comme élément principal ;
- ratio visuel généreux ;
- titre, catégorie, direction et numéro en metadata ;
- résumé court facultatif selon la taille du tile ;
- aucune bordure de card lourde ;
- aucun bouton rempli ;
- hover discret : légère translation de l'image ou apparition du texte `Voir la démo ↗` ;
- respecter `prefers-reduced-motion`.

Pour un projet planned :

- surface graphique plate ;
- catégorie + numéro + direction ;
- mention `En préparation` ;
- pas de pseudo-screenshot ;
- pas de CTA actif vers une route inexistante.

La grille peut alterner :

- pleine largeur ;
- 2/3 + 1/3 ;
- duo 1/2 + 1/2 ;
- grand visuel puis bloc plus compact.

La variation reste stable entre les rendus : aucune randomisation client.

## 9. Category pages

Routes conservées :

- `/categories/garage` ;
- `/categories/restaurant` ;
- `/categories/coiffure` ;
- `/categories/tatoueur`.

Chaque page catégorie devient une mini collection éditoriale, pas une page commerciale.

Structure :

1. kicker + nom de catégorie ;
2. phrase courte décrivant les quatre directions ;
3. les quatre projets de la catégorie ;
4. previews disponibles en grand ;
5. planned states neutres ;
6. lien `← Toutes les catégories` ou `← Tous les projets`.

À supprimer :

- `Chaque démo peut servir de base puis être adaptée...` ;
- `Vous aimez une direction ?` ;
- `Créer mon site` ;
- tout bloc `Adaptation` ou équivalent.

## 10. Footer

Le footer devient un simple footer de portfolio.

Il contient :

- `Sites vitrines · Portfolio 2026` ;
- liens vers les quatre catégories ;
- éventuellement le lien GitHub discret ;
- copyright.

À supprimer :

- `Choisissez une direction. On l'adapte à votre activité.` ;
- toute promesse de prestation ;
- tout CTA commercial.

## 11. Preview contract

Le contrat de preview existant est conservé.

Toute démo `available` doit posséder une vraie capture browser-rendered stockée dans :

`public/previews/<site-id>-home.webp`

Invariant :

- `available` => preview réelle obligatoire ;
- `planned` => aucune fausse preview.

Les captures sont rendues avec `next/image` et restent des assets statiques. Aucun iframe n'est utilisé.

## 12. Relationship with demo sites

Kuro reste inchangé.

Maison Silex reste inchangé visuellement par ce sous-projet ; sa nouvelle direction validée est considérée comme une référence de niveau de qualité, pas comme un template à reproduire.

Les futurs sites doivent continuer à différer sur au moins 5 axes sur 7 :

1. navigation ;
2. hero ;
3. grille ;
4. typographie ;
5. structure des sections ;
6. traitement photo ;
7. interactions / CTA.

## 13. Responsive behavior

Desktop :

- grandes previews ;
- variations de largeur visibles ;
- première démo visible rapidement ;
- navigation catégories claire.

Tablet :

- réduire les asymétries extrêmes ;
- garder les captures suffisamment grandes ;
- aucune collision de metadata.

Mobile :

- une colonne principale ;
- previews bord à bord ou presque ;
- metadata compacte ;
- navigation catégories accessible par menu ;
- pas de scroll horizontal ;
- cibles tactiles >= 44px.

## 14. Accessibility

- un `h1` par page ;
- landmarks sémantiques ;
- navigation clavier ;
- focus visible ;
- alt text descriptif pour les previews ;
- statuts disponibles/planned lisibles sans dépendre de la couleur ;
- contraste suffisant ;
- `prefers-reduced-motion` respecté.

## 15. Performance and SEO

- aucun mini-site monté dans le portfolio ;
- previews statiques uniquement ;
- `next/image` avec `sizes` adaptés ;
- images hors viewport lazy-loadées ;
- pas de carrousel JS lourd ;
- portfolio et catégories indexables ;
- démos fictives `noindex, follow` ;
- sitemap inchangé dans son principe.

## 16. Files expected to change during implementation

Principalement :

- `app/(portfolio)/page.tsx` ;
- `src/portfolio/components/PortfolioHeader.tsx` ;
- `src/portfolio/components/PortfolioFooter.tsx` ;
- `src/portfolio/components/SiteCard.tsx` ;
- `src/portfolio/components/CatalogueGrid.tsx` ;
- `src/portfolio/components/CategoryNavigation.tsx` si nécessaire ;
- `src/portfolio/components/CategoryPage.tsx` ;
- `src/portfolio/styles/portfolio.css` ;
- `.github/workflows/verify.yml` pour remplacer les anciennes assertions commerciales par des assertions vitrine.

Le sous-projet ne doit modifier aucun fichier sous :

- `src/templates/restaurant-04/**` ;
- `app/sites/restaurant-04/**` ;
- `src/templates/restaurant-01/**` ;
- `app/sites/restaurant-01/**`.

## 17. Testing and verification

La CI doit vérifier :

- homepage accessible ;
- quatre pages catégories accessibles ;
- 16 projets toujours présents ;
- quatre projets par catégorie ;
- navigation `Tous / Garage / Restaurant / Coiffure / Tattoo` présente ;
- previews réelles présentes pour toutes les démos `available` ;
- aucun iframe ;
- absence de la chaîne `Créer mon site` dans la homepage et les quatre pages catégories ;
- absence de `Votre prochain site` ;
- absence de `Comment ça marche` commercial ;
- Kuro inchangé ;
- Silex inchangé par ce sous-projet.

QA navigateur obligatoire :

- 1440×1000 ;
- 768×1024 ;
- 375×812.

Vérifier :

- première preview visible rapidement ;
- aucun chevauchement ;
- navigation mobile lisible ;
- rythme visuel non répétitif ;
- les cards ne ressemblent pas à une grille SaaS ;
- aucune zone visuelle ne ressemble à un CTA de commande.

## 18. Acceptance criteria

Le refresh est accepté lorsque :

1. le portfolio ressemble à une vitrine de projets et non à un tunnel commercial ;
2. aucune occurrence ou zone `Créer mon site` ne subsiste ;
3. les catégories restent immédiatement accessibles ;
4. les vraies previews sont le contenu principal ;
5. les project tiles varient de composition sans perdre en lisibilité ;
6. Kuro et Maison Silex restent visuellement et techniquement inchangés ;
7. les pages catégories n'ont plus de bloc de vente/adaptation ;
8. la CI complète est verte ;
9. la QA 1440/768/375 est propre ;
10. les futures démos continuent à utiliser le même contrat de preview réelle sans partager le design du portfolio.
