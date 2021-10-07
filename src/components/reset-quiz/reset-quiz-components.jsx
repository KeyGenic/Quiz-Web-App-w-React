import React from "react";
import './reset-quiz.styles.scss';

export function ResetQuiz({props}){
    return(
        <button className = "reset-quiz" onClick = {props}>
            Reset Quiz
        </button>
    )
}