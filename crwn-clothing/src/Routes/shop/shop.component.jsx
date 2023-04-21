// for Routing
import {Routes, Route} from 'react-router-dom';

// import components
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

// import styles file
import './shop.styles.scss';

// import for Categories Redux
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;