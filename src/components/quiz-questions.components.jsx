import React from 'react'
import './quiz-questions.styles.scss';

export const QuizQuestion = ({question}) => {
    return(
        <div className = 'quiz-questions'>
            <h4>{question}</h4>
        </div>
    )
}