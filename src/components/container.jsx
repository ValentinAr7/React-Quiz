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
    }

    function handlePrevious() {
        if (hasPrev) {
            setIndex(index - 1)
        } else {
            setIndex(info.length - 1)
        }
    }



    return (
        <div className="container">

            <div className="question-section">
                <h2 className="qstn">Question</h2>
                <p className="question">{data.question}</p>

                <div className="buttons-section">
                    <button onClick={handleNext} className="btnNext">Next</button>
                    <button onClick={handlePrevious} className="btnPrev">Previous</button>
                </div>
            </div>

            <div className="answer-section">

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