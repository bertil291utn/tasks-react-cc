// src/screens/ListadoScreen.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lists from '../components/Lists';
import { isLoadingListSelector } from '../redux/selectors';
import { fetchElements } from '../redux/listReducer';
import LoadingSpinner from '../components/LoadingSpinner';

const ListadoScreen: React.FC = () => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(isLoadingListSelector);
  
  useEffect(() => {
    /* hacer el fetch de datos sin importar si ya tiene los datos alamcenados en memoria */ 
    dispatch(fetchElements() as any);
  }, [dispatch]);

  return (
    <div>
      {IsLoading === 'pending' ? <LoadingSpinner /> : <Lists />}
    </div>
  );
};

export default ListadoScreen;
