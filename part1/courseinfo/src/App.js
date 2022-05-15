import Content from './Content';
import Header from './Header';
import Total from './Total';

const App = () => {
    const desc = {
        title: 'Half Stack application development',
        body: [
            {
                part: 'Fundamentals of React',
                exercises: 10,
            },
            {
                part: 'Using props to pass data',
                exercises: 7,
            },
            {
                part: 'State of a component',
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header title={desc.title} />
            <Content body={desc.body} />
            <Total body={desc.body} />
        </div>
    );
};

export default App;
