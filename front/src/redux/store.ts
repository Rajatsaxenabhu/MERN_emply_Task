import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './slice/authSlice';

const persistConfig = {
  key: 'root',  
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store= configureStore({
  reducer: persistedReducer
})
const persistor = persistStore(store);
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;