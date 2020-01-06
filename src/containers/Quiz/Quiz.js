import React, {Component} from 'react'
import './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{

    state = {
        activeQuastion: 0,
        answerState: null,
        quiz: [
            {
                quastion: 'Какого цвета небо?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Синий', id:1},
                    {text: 'Красный', id:2},
                    {text: 'Зеленый', id:3},
                    {text: 'Желтый', id:4}
                ]
            },
            {
                quastion: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id:1},
                    {text: '1705', id:2},
                    {text: '1703', id:3},
                    {text: '1803', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        const question = this.state.quiz[this.state.activeQuastion]

        if(question.rightAnswerId === answerId){

            this.setState({
                answerState: {[answerId]: 'succes'}
            })

            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuastion: this.state.activeQuastion +1
                    })
                }


                window.clearTimeout(timeout)
            }, 1000)

            
        } else{
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }

        
    }

    isQuizFinished () {
        return this.state.activeQuastion + 1 === this.state.quiz.length
    }


    render() {
        return(
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Ответте на все вопросы!</h1>
                    <ActiveQuiz 
                       answers={this.state.quiz[this.state.activeQuastion].answers}
                       quastion={this.state.quiz[this.state.activeQuastion].quastion}
                       onAnswerClick={this.onAnswerClickHandler}
                       quizLength={this.state.quiz.length}
                       answerNumber={this.state.activeQuastion + 1}
                       state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz