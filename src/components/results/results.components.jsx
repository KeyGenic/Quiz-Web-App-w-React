import React from 'react';
import './results.styles.scss'

export const Results = ({score,questions}) => {
    return(
        <div className = "results-container">
            <i class="far fa-check-circle circle"></i>
            <h1>You Scored {score}/{questions} </h1>
        </div>
    )
}