import React from 'react'
import './btn.style.scss';

export const NextQuestionBtn = ({props,id}) => {
    return(
    <button className = 'next-btn' onClick = {props} id = {id}>
        Next Question
    </button>
    )
}