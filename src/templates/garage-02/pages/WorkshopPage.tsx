import { PageHero } from "../components/PageHero";
import { torqueWorksSite } from "../src/data/site";

export function WorkshopPage() {
  return (
    <div className="tw-page">
      <PageHero
        eyebrow="Méthode & environnement"
        title="L’ATELIER"
        intro="Un atelier indépendant fictif, présenté comme un lieu de travail : ponts, outils, pièces démontées, contrôles et comptes rendus — pas comme un showroom automobile."
        code="ATELIER"
      />
      <section className="tw-section">
        <div className="tw-shell tw-workshop-page__grid">
          <figure className="tw-photo tw-photo--wide">
            <img src={torqueWorksSite.images.workshop.src} alt={torqueWorksSite.images.workshop.alt} width={torqueWorksSite.images.workshop.width} height={torqueWorksSite.images.workshop.height} />
          </figure>
          <div className="tw-workshop-principles">
            <article><span>AVANT</span><h2>Constater</h2><p>Le symptôme et l’état du véhicule déterminent les contrôles utiles.</p></article>
            <article><span>PENDANT</span><h2>Documenter</h2><p>Les pièces déposées, jeux, fuites ou usures sont expliqués sans jargon inutile.</p></article>
            <article><span>APRÈS</span><h2>Recontrôler</h2><p>Le fonctionnement est vérifié après remontage selon la nature de l’intervention.</p></article>
          </div>
        </div>
      </section>
      <section className="tw-section tw-workshop-copy">
        <div className="tw-shell tw-workshop-copy__grid">
          <p className="tw-kicker">Positionnement</p>
          <h2>Réparer une voiture, pas fabriquer une image de marque automobile.</h2>
          <p>Torque Works est conçu comme la vitrine d’un garage de quartier sérieux : mécanique générale, recherche de panne et entretien des organes existants. Aucun discours de constructeur, de préparation de performance ou de création de véhicule.</p>
        </div>
      </section>
    </div>
  );
}
