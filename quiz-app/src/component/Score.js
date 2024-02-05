import QuestionsData from "../data/QuestionData";
import { useContext } from 'react';
import { DataContext } from "../App";

const Score = () => {
    const { score, setScore, setAppState } = useContext(DataContext);

    const restartApp = () => {
        setScore(0);
        setAppState('menu');
    }

    return (
        <div className="score">
            <h1>Your score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score;