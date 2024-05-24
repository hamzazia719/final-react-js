import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../usecase/store/main-root/root";
import { api } from "../../../usecase/store/slicer/slice";
import imaag from "../../../uiframe/assets/housee.jpg"
import { useNavigate } from "react-router-dom";
import Card from "../../../interface/components/commonComponents/Card"

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error } = useSelector((state: RootState) => state.api);
  console.log(data);
  

  useEffect(() => {
    dispatch(api());
  }, [dispatch]);

  const navigate = useNavigate()
  const detail = (homeItem: any) => {
    navigate("/detail", { state: { source: 'ComponentB', data: homeItem }  });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className="container mx-auto mb-8">
          <h1 className="text-2xl font-bold ml-10 mb-4">Newest listings</h1>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {data.map(item => (
              <Card
                key={item.id}
                title={item.name}
                price={item.price}
                bedrooms={item.bedroom}
                bathrooms={item.bathroom}
                area={item.squarefeet}
                address={`${item.location}, CA`}
                imageUrl={imaag}
                onClick={() => detail(item)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
