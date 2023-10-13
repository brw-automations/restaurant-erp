import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCategoriesState = {
  categories: [
    {
      name: "main",
      icon: "/assets/images/Josephine BBQ-9.JPG",
    },
    {
      name: "alcoholic drinks",
      icon: "/assets/images/Josephine BBQ-2.JPG",
    },
  ],
};

const initialProductsState = {
  products: [
    {
      name: "Curry goat",
      icon: "/assets/images/Josephine BBQ-17.JPG",
      price: 1150,
    },
    {
      name: "Curry goat",
      icon: "/assets/images/Josephine BBQ-17.JPG",
      price: 1150,
    },
    {
      name: "Curry goat",
      icon: "/assets/images/Josephine BBQ-17.JPG",
      price: 1150,
    },
    {
      name: "Pork ribs",
      icon: "/assets/images/Josephine BBQ-16.JPG",
      price: 1150,
    },
    {
      name: "Pork ribs",
      icon: "/assets/images/Josephine BBQ-16.JPG",
      price: 1150,
    },
    {
      name: "Pork ribs",
      icon: "/assets/images/Josephine BBQ-16.JPG",
      price: 1150,
    },
  ],
};

const initialAuthState = { isAuthenticated: false };

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    add(state, action) {
      state.categories.push(action.payload);
    },
    remove(state, action) {
      state.categories.splice(state.categories.indexOf(action.payload), 1);
    },
  },
});

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    add(state, action) {
      state.products.push(action.payload);
    },
    remove(state, action) {
      state.products.splice(state.products.indexOf(action.payload), 1);
    }
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    auth: authSlice.reducer,
    products : productsSlice.reducer
  },
});

export const categoriesActions = categoriesSlice.actions;
export const authActions = authSlice.actions;
export const productsActions = productsSlice.actions;


export default store;
