import React, { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import { useParams } from "react-router-dom";

function Pizza() {
  const [pizza, setPizza] = useState({});
  const {pizza_id} = useParams();
  
  const getPizza = async () => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${pizza_id}`);
    const pizza = await res.json();
    setPizza(pizza);
  };

  useEffect(() => {
    getPizza();
  }, []);


  return(
    <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={pizza.price}
    />
  )
  
  
}

export default Pizza;
