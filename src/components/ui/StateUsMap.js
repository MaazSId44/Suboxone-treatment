import React from "react";
import USAMap from "react-usa-map";

const MyMap = () => {
  const mapHandler = (event) => {
    alert(`You clicked on ${event.target.dataset.name}`);
  };

  return (
    <div className="w-full flex justify-center">
      <USAMap onClick={mapHandler} />
    </div>
  );
};

export default MyMap;
