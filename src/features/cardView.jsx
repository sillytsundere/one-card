import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { drawCard } from "./cardSlice";

export const CardView = () => {
    const dispatch = useDispatch();
    const card = useSelector((state) => state.card);

    const handleDraw = () => {
        dispatch(drawCard());

        const randomNumber = Math.floor(Math.random() * 23);

        if (randomNumber) {
            dispatch(drawCardSuccess(randomNumber));
        } else {
            dispatch(drawCardFailure("Failed to draw a number."))
        }
    };

    return (
        <div>
            <h1>Pick Your Card! It's gonna be a random number first</h1>
            <p>the number!{card && `The number is: ${card}`}</p>
            <button onClick={handleDraw}>Draw</button>
        </div>
    )
}