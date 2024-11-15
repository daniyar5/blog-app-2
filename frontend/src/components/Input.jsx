import React, {useState} from 'react'

function Input(props){
    return (
        <input 
        type={props.text} 
        className={props.className} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={props.onChange} />
    )
}

export default Input;