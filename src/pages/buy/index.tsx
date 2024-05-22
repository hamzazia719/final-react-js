import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/main-root/root";
import { api } from "../../store/slicer/slice";
import imaag from "../../assets/housee.jpg"
import { useNavigate } from "react-router-dom";

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
            {data.map((item) => (
              <div key={item.id}>
                <div className="flex w-72 cursor-pointer rounded-lg h-80 shadow-md flex-wrap" onClick={()=>detail(item)}>
                  <div className="w-full h-60">
                    <img
                      className="w-full h-48 rounded-t-lg object-cover"
                      src={imaag}
                      alt="Property"
                    />
                    <div className="p-2">
                      <h1 className="text-blue-500 font-medium">
                        ${item.price}
                      </h1>
                    </div>
                    <div className="flex opacity-80">
                      <div className="ml-2">
                        <p>{item.bedroom_number}-Bed</p>
                      </div>
                      <div className="ml-2">
                        <p>{item.bathroom_number}-Bath</p>
                      </div>
                    </div>
                    <div className="ml-2 opacity-80">
                      Area {item.area_square_feet}sqft
                    </div>
                    <div className="text-blue-500 ml-2">{item.location}</div>
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
