import QuestionsData from "../data/QuestionData";
import { useContext, useEffect, useState } from 'react';
import { DataContext } from "../App";

const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState("");
    const { score, setScore, setAppState } = useContext(DataContext);

    useEffect(() => {
        checkAnswer()
    }, [selectedChoice])

    const checkAnswer = () => {
        if (selectedChoice !== "") {
            if (Object.values(QuestionsData[current]).indexOf(selectedChoice) > -1) {
                console.log('correct');
                setScore(score + 1);
            }

            nextQuestion();
        }
    }

    const nextQuestion = () => {
        setSelectedChoice("");
        if (current === QuestionsData.length - 1) {
            setAppState('score');
            return;
        }
        setCurrent(current + 1);
    }

    return (
        <div className="quiz">
            <h1> {QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={() => setSelectedChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={() => setSelectedChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={() => setSelectedChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={() => setSelectedChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current + 1} / ${QuestionsData.length}`}</p>
        </div >
    )
}

export default Quiz;