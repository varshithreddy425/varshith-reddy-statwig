// This is the Product Card Component which displays the information regarding each pet according to the props passed.

import React from "react";
import "../css/ProductCard.css";

function ProductCard({id,name, breed, ageMonths, gender, price, image }) {
  return (
    <>
      <div className="productCard">
        <div className="imageFrame">
          {/* The URL of the image of the pet is given as the value to the src attribute using the props passed for each pet */}
          <img src={image} alt={image} className="image" /> 
        </div>

        <div className="descriptionFrame">
          <div className="description">
            {/* The name, breed, gender, age and price of the pet is displayed from the using the values of props passed for each pet*/}
            <div className="name">{name} : {breed} </div>

            <div className="gen-age">
              <div className="blocked">
                <div className="heading">Gene:</div>
                <div className="value">{gender}</div>
              </div>

              <div className="dot"></div>

              <div className="blocked">
                <div className="heading">Age:</div>
                <div className="value">{ageMonths} Months</div>
              </div>
            </div>

            <div className="price">{price} VND</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
