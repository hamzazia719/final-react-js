import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/main-root/root";
import { fetchRent } from "../../store/slicer/rent";
import imag from "../../assets/home.jpg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { rent, error } = useSelector((state: RootState) => state.rent);
  console.log(rent);

  useEffect(() => {
    dispatch(fetchRent());
  }, [dispatch]);

  const navigate = useNavigate()
  const details = (homeItem: any) => {
    navigate("/detail", { state: { source: 'ComponentC', data: homeItem }  });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {!rent ? (
        <div>Loading...</div>
      ) : (
        <div className="container mx-auto mb-8">
          <h1 className="text-2xl font-bold ml-10 mb-4">Newest listings</h1>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {rent.map((item) => (
              <div key={item.id}>
                <div className="flex w-72 rounded-lg h-80 shadow-md flex-wrap" onClick={()=>details(item)}>
                  <div className="w-full h-60">
                    <div
                      style={{ backgroundImage: `url(${imag})` }}
                      className=" w-full h-48 rounded-t-lg object-cover bg-no-repeat bg-cover"
                    >
                      <p className=" text-blue-500 font-medium p-2">
                        {item.name}
                      </p>
                    </div>
                    <div className="p-2">
                      <h1 className="text-blue-500 font-medium">
                        ${item.price}
                      </h1>
                    </div>
                    <div className="flex opacity-80">
                      <div className="ml-2">
                        <p>{item.bedrooms}-Bed</p>
                      </div>
                      <div className="ml-2">
                        <p>{item.bathrooms}-Bath</p>
                      </div>
                    </div>
                    <div className="ml-2 opacity-80">
                      Area {item.squareFeetArea}sqft
                    </div>
                    <div className="text-blue-500 ml-2">
                      {item.streetAddress},CA
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
