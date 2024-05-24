import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../usecase/store/main-root/root";
import { fetchRent } from "../../../usecase/store/slicer/rent";
import imag from "../../../uiframe/assets/home.jpg";
import { useNavigate } from "react-router-dom";
import Card from "../../../interface/components/commonComponents/Card"

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { rent, error } = useSelector((state: RootState) => state.rent);
  console.log(rent);

  useEffect(() => {
    dispatch(fetchRent());
  }, [dispatch]);

  const navigate = useNavigate()
  const details = (homeItem: any) => {
    navigate("/detail", { state: { source: 'ComponentC', data: homeItem } });
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
            {rent.map(item => (
              <Card
                key={item.id}
                title={item.name}
                price={item.price}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                area={item.squareFeetArea}
                address={`${item.streetAddress}, CA`}
                imageUrl={imag}
                onClick={() => details(item)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
