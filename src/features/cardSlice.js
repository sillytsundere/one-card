// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     loading: false,
//     card: null,
//     error: ""
// };

// export const fetchCard = () => {
//     Math.floor(Math.random() * 22)
// };


// const cardSlice = createSlice({
//     name: "card",
//     initialState,
//     reducers: {
//         drawCard: (state) => {
//             state.loading = true;
//         },
//         drawCardSuccess: (state, action) => {
//             state.loading = false;
//             state.card = action.payload;
//             state.error = '';
//         },
//         drawCardFailure: (state, action) => {
//             state.loading = false;
//             state.card = null;
//             state.error = action.payload;
//         }
//     }
// })

// export const { drawCard, drawCardSuccess, drawCardFailure } = cardSlice.actions;
// export default cardSlice.reducer;