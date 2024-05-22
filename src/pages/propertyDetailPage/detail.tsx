// import React from "react";
// import { useLocation } from "react-router-dom";
// import photo from "../../assets/home.jpg"
// const Detail: React.FC = () => {
//   const location = useLocation();
//   const home = location.state;
  
//   if (!home) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className=" ml-4">
//       <h1 className=" flex justify-center items-center font-medium text-2xl p-2">Your Dream House</h1>
//       <div>
//         <div className=" flex">
//             <div className=" flex justify-start items-center w-full"><img className=" rounded-l-xl h-[80vh]" src={photo} alt="property" /></div>
//             <div className=" grid place-items-start w-full ml-2">
//             <img className=" h-40 rounded-tr-lg" src={photo} alt="property" />
//             <img className=" h-40" src={photo} alt="property" />
//             <img className=" h-40 rounded-br-lg" src={photo} alt="property" />
//             </div>
//         </div>
//         <h2 className=" text-xl font-medium p-2">{home.name}</h2>
//         <p className=" p-2 text-3xl font-bold">${home.price}</p>
//         <div className=" flex gap-4 pl-2">
//         <p>Bed: {home.bedrooms}</p>
//         <p>Bath: {home.bathrooms}</p>
//         </div>
//         <p className=" pl-2">{home.squareFeetArea} sqft</p>
//         <p className="  pl-2 text-xl font-medium">Address: {home.address}, {home.state}</p>
//       </div>
//     </div>
//   );
// };

// export default Detail;
     

import React from "react";
import { useLocation } from "react-router-dom";
import photo from "../../assets/home.jpg";

const Detail: React.FC = () => {
  const location = useLocation();
  const { source, data } = location.state || {};

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className=" m-4">
      <div>
        <div className=" flex">
          <div className=" flex justify-start items-center w-full">
            <img className=" rounded-l-xl h-[80vh]" src={photo} alt="property" />
          </div>
          <div className=" grid place-items-start w-full ml-2">
            <img className=" h-40 rounded-tr-lg" src={photo} alt="property" />
            <img className=" h-40" src={photo} alt="property" />
            <img className=" h-40 rounded-br-lg" src={photo} alt="property" />
          </div>
        </div>
        {source === 'ComponentA' && (
          <div>
            <h2 className=" text-xl font-medium p-2">{data.name}</h2>
            <p className=" p-2 text-3xl font-bold">${data.price}</p>
            <div className=" flex gap-4 pl-2">
              <p>Bed: {data.bedrooms}</p>
              <p>Bath: {data.bathrooms}</p>
            </div>
            <p className=" pl-2">{data.squareFeetArea} sqft</p>
            <p className="  pl-2 text-xl font-medium">Address: {data.address}, {data.state}</p>
          </div>
        )}
        {source === 'ComponentB' && (
          <div>
            <h2 className=" text-xl font-medium p-2">{data.name}</h2>
            <p className=" p-2 text-3xl font-bold">${data.price}</p>
            <div className=" flex gap-4 pl-2">
              <p>Rooms: {data.bedroom_number}</p>
              <p>Baths: {data.bathroom_number}</p>
            </div>
            <p className=" pl-2">{data.area_square_feet} sqft</p>
            <p className="  pl-2 text-xl font-medium">Location: {data.location}</p>
          </div>
        )}
        {source === 'ComponentC' && (
          <div>
            <h2 className=" text-xl font-medium p-2">{data.name}</h2>
            <p className=" p-2 text-3xl font-bold">${data.price}</p>
            <div className=" flex gap-4 pl-2">
              <p>Rooms: {data.bedrooms}</p>
              <p>Baths: {data.bathrooms}</p>
            </div>
            <p className=" pl-2">{data.squareFeetArea} sqft</p>
            <p className="  pl-2 text-xl font-medium">Location: {data.streetAddress}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
