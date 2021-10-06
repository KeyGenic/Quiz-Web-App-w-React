import React from 'react';
import './choices.styles.scss'

export const Choices = ({choice,test}) => {
    return(
        <div className = "choices-container">
            <input type="radio" value = '0' name = 'radio' onChange = {test}  />
            <label>{choice[0]}</label>
            <input type="radio" value = '1' name = 'radio' onChange = {test} />
            <label>{choice[1]}</label>
            <input type="radio" value = '2' name = 'radio' onChange= {test}  />
            <label>{choice[2]}</label>
            <input type="radio" value = '3' name = 'radio' onChange = {test} />
            <label>{choice[3]}</label>
        </div>
    )
}