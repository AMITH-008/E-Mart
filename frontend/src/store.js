import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;


// State is held at app level , 
// updated through actions
// dispatched through reducers
// updated state is sent down to any components needed
// ensuring that all parts of app have access to most up-to-date information