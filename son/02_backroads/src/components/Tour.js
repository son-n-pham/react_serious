import React from "react";

const Tour = ({
  id,
  img,
  tourDate,
  tourTitle,
  location,
  text,
  duration,
  cost,
}) => {
  return (
    <article key={id} className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourTitle}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
          <p>{duration}</p>
          <p>{cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
