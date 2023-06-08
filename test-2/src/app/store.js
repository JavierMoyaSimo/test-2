import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "../containers/Detail/detailSlice.js";

export default configureStore({
  reducer: {
    detail: detailSlice,
  },
});
