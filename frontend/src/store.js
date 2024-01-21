import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {}
});

export default store;


// State is held at app level , 
// updated through actions
// dispatched through reducers
// updated state is sent down to any components needed
// ensuring that all parts of app have access to most up-to-date information