import type { KuroMenuItem } from "../types";

type DishListProps = {
  items: KuroMenuItem[];
};

export function DishList({ items }: DishListProps) {
  return (
    <div className="kuro-dish-list">
      {items.map((item) => (
        <article className="kuro-dish" key={item.name}>
          <div className="kuro-dish__copy">
            <div className="kuro-dish__title-row">
              <h3>{item.name}</h3>
              {item.note ? <span>{item.note}</span> : null}
            </div>
            <p>{item.description}</p>
          </div>
          <p className="kuro-dish__price">{item.price}</p>
        </article>
      ))}
    </div>
  );
}
