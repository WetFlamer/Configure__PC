import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccesories } from '../../../features/accesoriesSlice';

const Accessories = () => {
    const accessories = useSelector((state) => state.accessories.accessories);
    const loading = useSelector((state) => state.accessories.loading);
    const error = useSelector((state) => state.accessories.error);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAccesories());
    }, [dispatch]);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
    
    return (
        <div>
            {accessories.map((accessory) => {
                return (
                    <div>{accessory.name}</div>
                )
            })} 
        </div>
    );
};

export default Accessories;