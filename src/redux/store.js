import { configureStore } from "@reduxjs/toolkit";

// Example reducer (you can replace this with your actual reducers)
const exampleReducer = (state = {}, action) => {
    switch (action.type) {
        case "example/action":
            return { ...state, value: action.payload };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: {
        example: exampleReducer, // This is how you define a slice in your store
    },
});

export default store;
