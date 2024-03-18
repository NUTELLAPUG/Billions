import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa el almacenamiento local por defecto

const middleware = [thunk, createDebounce()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root', // Clave en la que se almacenarán los datos
  storage, // Almacenamiento local
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store);

export { store, persistor };
