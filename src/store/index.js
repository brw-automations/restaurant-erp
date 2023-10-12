import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
  categories: [
    {
      name: "main",
      icon: "public/images/Josephine BBQ-9.JPG",
    },
    {
      name: "alcoholic drinks",
      icon: "public/images/Josephine BBQ-2.JPG",
    },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.categories.push(action.payload);
    },
      remove(state, action) {
       state.categories.splice(
          state.categories.indexOf(action.payload),
          1
        );
    },
  },
});


const store = configureStore({
    reducer: {
        categories: categoriesSlice.reducer
    }
})


export const categoriesActions = categoriesSlice.actions;
export default store