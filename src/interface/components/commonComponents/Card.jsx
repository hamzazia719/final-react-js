import React from 'react';

const Card = ({ title, price, bedrooms, bathrooms, area, address, imageUrl, onClick }) => {
  return (
    <div className="flex w-72 rounded-lg h-80 shadow-md flex-wrap cursor-pointer" onClick={onClick}>
      <div className="w-full h-60">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="w-full h-48 rounded-t-lg object-cover bg-no-repeat bg-cover"
        >
          <p className="text-blue-500 font-medium p-2">
            {title}
          </p>
        </div>
        <div className="p-2">
          <h1 className="text-blue-500 font-medium">
            ${price}
          </h1>
        </div>
        <div className="flex opacity-80">
          <div className="ml-2">
            <p>{bedrooms}-Bed</p>
          </div>
          <div className="ml-2">
            <p>{bathrooms}-Bath</p>
          </div>
        </div>
        <div className="ml-2 opacity-80">
          Area {area} sqft
        </div>
        <div className="text-blue-500 ml-2">
          {address}
        </div>
      </div>
    </div>
  );
};

export default Card;
