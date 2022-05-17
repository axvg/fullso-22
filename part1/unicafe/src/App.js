import { useState } from 'react';

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
    if (text === 'positive') {
        return (
            <tr>
                <td>{text}</td>
                <td>{value} %</td>
            </tr>
        );
    }
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    if (good + neutral + bad !== 0) {
        return (
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />

                    <StatisticLine text='neutral' value={neutral} />

                    <StatisticLine text='bad' value={bad} />

                    <StatisticLine text='all' value={good + neutral + bad} />

                    <StatisticLine
                        text='average'
                        value={(good - bad) / (good + neutral + bad)}
                    />

                    <StatisticLine
                        text='positive'
                        value={(good * 100) / (good + neutral + bad)}
                    />
                </tbody>
            </table>
        );
    } else {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        );
    }
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button
                handleClick={() => setNeutral(neutral + 1)}
                text='neutral'
            />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
