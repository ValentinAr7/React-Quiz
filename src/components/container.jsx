import React from "react"
import { useState } from "react"
import { info } from "../data"

export function Container() {



    let data = info[0]
    console.log(data);

    return (
        <div className="container">

            <div className="question-section">
                <h2 className="qstn">Question</h2>
                <p className="question">{data.question}</p>

                <div className="buttons-section">
                    <button className="btnNext">Next</button>
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