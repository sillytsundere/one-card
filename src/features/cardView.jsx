import React, { useState } from "react"

export const CardView = () => {
    const cards = ["0 - The Fool", "1 - The Magician", "2 - The High Priestess", "3 - The Empress", "4 - The Emperor", "5 - The Hierophant", "6 - The Lovers", "7 - The Chariot", "8 - Justice", "9 - The Hermit", "10 - The Wheel of Fortune", "11 - Strength", "12 - The Hanged Man", "13 - Death", "14 - Temperance", "15 - The Devil", "16 - The Tower", "17 - The Star", "18 - The Moon", "19 - The Sun", "20 - Judgement", "21 - The World"]

    const [randomCard, setRandomCard] = useState(null); //initializing the state with null as the initial value
    // use state is a react hook that allows functional components to have 'state'
    // it returns an array of which its two elements are the current state value and a function that lets you update the state
    // 'CardView' is my functional component in this case

    const handleDraw = () => {
        // const newRandomNumber = Math.floor(Math.random() * 23);
        // setRandomNumber(newRandomNumber); //updates the state by calling setRandomNumber with the newRandomNumber 

        const newRandomIndex = Math.floor(Math.random() * cards.length);
        const newRandomCard = cards[newRandomIndex];
        setRandomCard(newRandomCard);
    };

    return (
        <div>
            <h1>Pick Your Card!</h1>
            <p>{randomCard !== null && `${randomCard}`}</p>
            <button onClick={handleDraw}>Draw</button>
        </div>
    )
}