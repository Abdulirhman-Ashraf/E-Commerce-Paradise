import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { productsReducers } from "./slices/Products/productsSlice";
import { categoriesReducer } from "./slices/categories/categoriesSlice";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./slices/Cart/cartSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducers,
  cart: cartReducer,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),

});
const persistor = persistStore(store);
export { store, persistor };
