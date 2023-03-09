import React, { useState } from "react"
import answers from './Answers'
import "./EightBall.css"

console.log(answers)

const EightBall = () => {
    const [color, setColor] = useState("black")
    const [message, setMessage] = useState("Think of a Question")
    const pickAnswer = () => {
        const answerIdx = Math.floor(Math.random() * answers.length)
        const {color, msg} = answers[answerIdx]
        setColor(color)
        setMessage(msg)
    }
    const reset = () => {
        setColor("black")
        setMessage("Think of a Question")
    }

    const backgroundColor = {
        backgroundColor: color
    }
    return (
        <>
            <div onClick={() => pickAnswer()} className="EightBallCircle" style={backgroundColor}>
                <h3 className="EightBallText">{message}</h3>
            </div>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default EightBall