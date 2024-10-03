import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { Row, Col } from "react-bootstrap";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const getPizzas = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    const pizzas = await respuesta.json();
    setPizzas(pizzas);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center gap-8 mt-3 mb-3">
        <Row className="mx-4">
          {pizzas.map((e) => (
            <Col md={4} key={e.id}>
              <CardPizza
                id={e.id}
                img={e.img}
                name={e.name}
                desc={e.desc}
                price={e.price}
                ingredients={e.ingredients}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
