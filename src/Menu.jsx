import Pizza from "./Pizza";
import pizzaData from "./data";

function Menu() {
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzasLength > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

export default Menu;
