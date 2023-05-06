import React from "react"
import { useState } from "react"
import { info } from "../data"

export function Container() {

    const [index, setIndex] = useState(0)
    let data = info[index]

    let hasNext = index < info.length - 1

    function handleNext(){
        const nextIndex = index + 1;
        setIndex(nextIndex >= info.length ? 0 : nextIndex);
    }

    



    return (
        <div className="container">

            <div className="question-section">
                <h2 className="qstn">Question</h2>
                <p className="question">{data.question}</p>

                <div className="buttons-section">
                    <button onClick={handleNext} className="btnNext">Next</button>
                    <button className="btnPrev">Previous</button>
                </div>
            </div>

            <div className="answer-section">
                {Object.keys(data)
                    .filter(key => key.startsWith("answer"))
                    .map(key => (
                        <button key={key} className="quiz-button">
                            {data[key]}
                        </button>
                    ))}
            </div>

        </div>



    )
}