import axios from "axios";
import React, { useState, useEffect } from "react";

const Practice = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals)
      })
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section>
      <img src={strMealThumb} alt="" />
      <p>{strMeal}</p>
      <p>{idMeal}</p>
    </section>
  ));

  return (
    <div>
      {itemsList}
      {/* {items.map((strMeal, strMealThumb, idMeal) => (
        <section>
          <img src={strMealThumb} alt="" />
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      ))} */}
    </div>
  );
};

export default Practice;
