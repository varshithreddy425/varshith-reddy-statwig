/*The Details of the animals*/
import React from "react";
import { useState, useEffect } from "react";
import "../css/Details.css";
import ProductCard from "./ProductCard";

function Details() {
  const [data, setData] = useState([]); // This will store the data fetched from the API
  const [activeButton, setActiveButton] = useState("all"); // This will store the name of active button

  useEffect(() => {
    fetchData(activeButton);
  }, [activeButton]); // When there is any change in the active button, the data is fetched again according to it

  const fetchData = (activeButton) => {
    fetch(`https://takehome.statledger.io/api/v1/${activeButton}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: " + error));
  }; // This will set the data retreived from the API according to the active button inside "data" variale as an array

  const handleButtonClick = (endpoint) => {
    setActiveButton(endpoint);
  }; // When the user clicks a particular button, it is set as active button 

  const getButtonClass = (buttonName) => {
    return activeButton === buttonName ? "active" : "";
  }; // This will add "active" class to the button which is currently active to style it accordingly

  return (
    <div className="detailsFrame">
      <div className="detailsTop">
        <div className="detailsTopLeft">
          <div className="whatsNew">What's new?</div>
          <div className="takeALook">Take a look at some of our pets</div>
        </div>

        <div className="detailsTopRight">
          <button className={`animalButton ${getButtonClass("all")}`}  onClick={() => handleButtonClick("all")}>All</button>
          <button className={`animalButton ${getButtonClass("dogs")}`} onClick={() => handleButtonClick("dogs")}>Dogs</button>
          <button className={`animalButton ${getButtonClass("cats")}`} onClick={() => handleButtonClick("cats")}>Cats</button>
        </div>
      </div>

      <div className="products">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            breed={item.breed}
            ageMonths={item.ageMonths}
            gender={item.gender}
            price={item.price}
            image={item.image}
          /> // This will loop through the data of all pets and pass the information regarding each pet as props to the ProductCard Component
        ))} 
      </div>
    </div>
  );
}
export default Details;
