import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer } from 'store/reducer';

const persistConfig = {
  key: 'debts',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {
    store,
    persistor
 };
