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
            <button className="quiz-button">{data.answer1}</button>
            <button className="quiz-button">{data.answer2}</button>
            <button className="quiz-button">{data.answer3}</button>
            <button className="quiz-button">{data.answer4}</button>

            </div>



        </div>
    )
}