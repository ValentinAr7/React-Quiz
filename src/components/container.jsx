import React from "react"
import { useState } from "react"
import { info } from "../data"

export function Container() {

    const [index, setIndex] = useState(0)
    let data = info[index]
    const [selectedAnswer, setSelectedAnswer] = useState(null);



    let hasPrev = index > 0

    function handleNext() {
        const nextIndex = index + 1;
        setIndex(nextIndex >= info.length ? 0 : nextIndex);
        setSelectedAnswer(null)
    }

    function handlePrevious() {
        if (hasPrev) {
            setIndex(index - 1)
        } else {
            setIndex(info.length - 1)
        }
        setSelectedAnswer(null)

    }



    return (
        <div className="container">

            <div className="question-section">
                <h2 className="qstn">{
                `Question ${index + 1} of ${info.length}`
                 
                }</h2>

                <p className="question">{data.question}</p>

                <div className="buttons-section">
                <button onClick={handlePrevious} className="btnPrev">Previous</button>
                <span className="span">|</span>
                <button onClick={handleNext} className="btnNext">Next</button>
                </div>
            </div>

            <div className="answer-section">


                {/* This code takes the object keys from the data and filters through all of them to find the keys which start with 'answer' so they can be displayed on the screen
                then the button tag appliess the quiz-buttton css and checks if the key is = 'answerCorrect' apply  ( answer-button correct no-hover CSS) if not 
                apply (incorrect no-hover CSS) */}
                {Object.keys(data)
                    .filter(key => key.startsWith("answer"))
                    .map(key => (
                        <button
                            key={key}
                            className={`quiz-button${key === selectedAnswer ? (key === 'answerCorrect' ? ' answer-button correct no-hover'  : ' incorrect no-hover') : ''}`}
                            onClick={() => setSelectedAnswer(key)}
                        >
                            {data[key]}
                        </button>
                    ))

                }
            </div>

        </div>



    )
}