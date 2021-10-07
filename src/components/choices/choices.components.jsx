import React from 'react';
import './choices.styles.scss'

export const Choices = ({choice,test}) => {
    return(
        <div className = "choices-container">
            <label>
            <input type="radio" value = '0' name = 'radio' onChange = {test} /> {choice[0]}
            <span className = "checkmark"></span>
            </label> 
            <label>
            <input type="radio" value = '1' name = 'radio' onChange = {test} /> {choice[1]}
            <span className = "checkmark"></span>
            </label> 
            <label>
            <input type="radio" value = '2' name = 'radio' onChange = {test} /> {choice[2]}
            <span className = "checkmark"></span>
            </label> 
            <label>
            <input type="radio" value = '3' name = 'radio' onChange = {test} /> {choice[3]}
            <span className = "checkmark"></span>
            </label> 
        </div>
    )
}