import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactsApi } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import {authReducer} from "./auth/authSlice";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        auth: persistReducer(authPersistConfig, authReducer),
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }}), contactsApi.middleware]
});

export const persistor = persistStore(store);
