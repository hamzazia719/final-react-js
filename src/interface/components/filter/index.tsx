import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { fetchHome } from '../../store/slicer/Home';
import { RootState, AppDispatch } from "../../store/main-root/root";

const FilterComponent = () => {
    const location = useLocation()
    const { home, error } = useSelector((state: RootState) => state.home);
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchHome());
      }, [dispatch]);

    console.log(location.state)


    const filterData : any = home?.filter((item) => item?.name === location?.state || item?.address === location?.state)


    console.log(filterData)


  return (
    <div>
       {
        filterData?.length > 0 ?
        filterData?.map((item : any) => (
            <div>
                <div>{item?.address}</div>
                <div>{item?.name}</div>
                <div>{item?.price}</div>
            </div>
        ))
         : <div>No Data Found</div>
       }
    </div>
  )
}

export default FilterComponent