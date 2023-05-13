import logo from './logo.svg';
import './App.css';
import { Container } from './components/container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container/>
      </header>
    </div>
  );
}

export default App;

// import React from "react"
// import { useState } from "react"
// import { info } from "../data"

// export function Container() {

//     const [index, setIndex] = useState(0)
//     let data = info[index]
//     const [selectedAnswer, setSelectedAnswer] = useState(null);


//     function handleCorrectAnswers(){
//         const isCorrect = selectedAnswer === 'answerCorrect';
//                 if (isCorrect) {
//                     const nextIndex = index + 1;
//                     setIndex(nextIndex >= info.length ? 0 : nextIndex);
//                   } else {
//                       console.log('Wrong Answer')
//                   }
//     }

//     let hasPrev = index > 0
//     function handleNextButton() {
//           const nextIndex = index + 1;
//           setIndex(nextIndex >= info.length ? 0 : nextIndex);
//           setSelectedAnswer(null);

//     }

//     function handlePreviousButton() {
//         if (hasPrev) {
//             setIndex(index - 1)
//         } else {
//             setIndex(info.length - 1)
//         }
//         setSelectedAnswer(null)

//     }

//     return (
//         <div className="container">

//             <div className="question-section">
//                 <h2 className="qstn">{
//                 `Question ${index + 1} of ${info.length}`
                 
//                 }</h2>

//                 <p className="question">{data.question}</p>

//                 <div className="buttons-section">
//                 <button onClick={handlePreviousButton} className="btnPrev">Previous</button>
//                 <span className="span">|</span>
//                 <button onClick={handleNextButton} className="btnNext">Next</button>
//                 </div>
//             </div>

//             <div className="answer-section">


//                 {/* This code takes the object keys from the data and filters through all of them to find the keys which start with 'answer' so they can be displayed on the screen
//                 then the button tag appliess the quiz-buttton css and checks if the key is = 'answerCorrect' apply  ( answer-button correct no-hover CSS) if not 
//                 apply (incorrect no-hover CSS) */}
//                 {Object.keys(data)
//                     .filter(key => key.startsWith("answer"))
//                     .map(key => (
//                         <button
//                             key={key}
//                             className={`quiz-button${key === selectedAnswer ? (key === 'answerCorrect' ? ' answer-button correct no-hover'  : ' incorrect no-hover') : ''}`}
//                             onClick={() => {handleCorrectAnswers(); setSelectedAnswer(key); }}
                            
//                             >
//                             {data[key]}
//                         </button>
//                     ))

//                 }
//             </div>

//         </div>



//     )
// }
