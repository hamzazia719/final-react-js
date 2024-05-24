import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRealtor } from '../../../usecase/store/slicer/realtor';
import { RootState, AppDispatch } from '../../../usecase/store/main-root/root';

const RealtorList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { realtor, error } = useSelector((state: RootState) => state.realtor);

  useEffect(() => {
    dispatch(fetchRealtor());
  }, [dispatch]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!realtor) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Realtor All Over The USA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(realtor) && realtor.map((agent) => (
          <div key={agent.id} className="border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{agent.name}</h2>
            <p className="text-gray-700">{agent.title}</p>
            <p className="text-gray-700">For Sale: {agent.for_sale}</p>
            <p className="text-gray-700">Sold: {agent.sold}</p>
            <p className="text-gray-700">Experience: {agent.experience}</p>
            <p className="text-gray-700">Phone: {agent.phone_number}</p>
            <p className="text-gray-700">Address: {agent.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealtorList;

