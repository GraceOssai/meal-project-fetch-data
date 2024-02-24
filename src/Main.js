// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Practice from "./Practice";

const Main = () => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  //     .then((res) => {
  //       console.log(res.data);
  //       setItems(res.data.meals)
  //     });
  // }, []);

  // const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
  //   return (
  //     <section>
  //       <img src={strMealThumb} alt="image"/>
  //       <section>{strMeal}</section>
  //       <section>#{idMeal}</section>
  //     </section>
  //   );
  // });
  return <div>
    {/* {itemsList} */}
    <Practice />
  </div>;
};

export default Main;
