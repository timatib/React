import React from 'react'
import  './AnswerItem.module.css'

const AnswerItem = (props) => {

    const cls = [AnswerItem]

    if(props.state){
        cls.push([props.state])
    }


    return (
        
        <li className="AnswerItem"
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
    
}

export default AnswerItem