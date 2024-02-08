import React from "react";
import "./searchItem.css";

const SearchItem = ({ imageSrc, title, distance, taxiOp, subtitle, features, cancelOp, cancelOpSubtitle, rating, price }) => {
  return (
    <div className="searchItem">
      <img src={imageSrc} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siTaxiOp">{taxiOp}</span>
        <span className="siSubtitle">{subtitle}</span>
        <span className="siFeatures">{features}</span>
        <span className="siCancelOp">{cancelOp}</span>
        <span className="siCancelOpSubtitle">{cancelOpSubtitle}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
