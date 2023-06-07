import { configureStore } from '@reduxjs/toolkit';
import detailSlice from '../containers/Detail/detailSlice';


export default configureStore({
    reducer: {
        detail: detailSlice,
       

    }

});
