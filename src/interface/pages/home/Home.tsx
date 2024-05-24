import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../usecase/store/main-root/root";
import { fetchHome } from "../../../usecase/store/slicer/home";
import Input from '../../../interface/components/commonComponents/Input';
import imag from "../../../uiframe/assets/home.jpg";
import home1 from "../../../uiframe/assets/housee.jpg";
import Card from "../../../interface/components/commonComponents/Card"



const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { home, error } = useSelector((state: RootState) => state.home);
  const [filterText, setFilterText] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const gotoDetail = (homeItem: any) => {
    navigate("/detail", { state: { source: 'ComponentA', data: homeItem } });
  };

  const filteredHomes: any = home?.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase()) ||
    item.address.toLowerCase().includes(filterText.toLowerCase()) ||
    item.state.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleSearch = () => {
    navigate("/search-page", { state: filterText })
  }

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${home1})` }}
        className="bg-no-repeat bg-cover w-full h-[80vh]"
      >
        <h1 className="pt-10 text-7xl font-medium text-white flex justify-center items-center">
          Find your own house
        </h1>
        <h1 className="pt-10 text-6xl font-medium text-white flex justify-center items-center">
          professionals trust
        </h1>
        <div className="w-full flex justify-center items-center pt-5">
          <ul className="flex mt-4 font-medium text-xl lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/buy"
                className="block py-2 pr-4 pl-3 text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sell"
                className="block py-2 pr-4 pl-3 text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sell
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rent"
                className="block py-2 pr-4 pl-3 text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Rent
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center mt-2">
          <div className="w-11/12 md:w-2/3 lg:w-1/3 flex justify-center items-center border-2 bg-white rounded-full cursor-pointer">
            <Input
              className="flex justify-center h-16 w-[78%] border-0 outline-0 rounded-full pl-2 text-xl shadow-none"
              type="text"
              placeholder="Address, School, City, Zip or ...Neighborhood"
              value={filterText}
              onChange={(e: any) => setFilterText(e.target.value)}
            />
            <div className="ml-4 h-14 w-14 mr-1 bg-gray-800 rounded-full hover:bg-gray-700 flex justify-center items-center">
              <IoSearch className="text-white text-2xl" onClick={handleSearch} />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 text-3xl font-bold">
        Browse homes in U S A, States
      </h1>
      <div className="flex justify-center p-5 m-4 gap-6 flex-wrap">
        {!home ? (
          <div>Loading...</div>
        ) : filteredHomes?.length > 0 ? (
          <div className="container mx-auto mb-8">
            <div className="flex justify-center items-center flex-wrap gap-4">
              {filteredHomes.map(item => (
                <Card
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  bedrooms={item.bedroom}
                  bathrooms={item.bathroom}
                  area={item.squarefeet}
                  address={`${item.location}, CA`}
                  imageUrl={imag}
                  onClick={() => gotoDetail(item)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-xl font-bold">Data not found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
