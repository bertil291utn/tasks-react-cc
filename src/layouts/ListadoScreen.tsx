// src/screens/ListadoScreen.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lists from '../components/Lists';
import { isLoadingListSelector } from '../redux/selectors';
import { fetchElements } from '../redux/listReducer';

const ListadoScreen: React.FC = () => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(isLoadingListSelector);

  useEffect(() => {
    dispatch(fetchElements() as any);
  }, [dispatch]);

  return (
    <div>
      {IsLoading === 'pending'  ? <div>Cargando...</div> : <Lists />}
    </div>
  );
};

export default ListadoScreen;
