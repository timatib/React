import React from 'react'
import './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz = (props) => (
    <div className="ActiveQuiz">
        <p className="Question">
            <span>
                <strong>{props.answerNumber}.0</strong>&nbsp;
                {props.quastion}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswerList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
)

export default ActiveQuiz