import Content from './Content';
import Header from './Header';

const Course = ({ course }) => {
    const total = course.parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <div>
            <Header name={course.name} />
            <Content course={course} />
            <strong>Total of {total} exercises</strong>
        </div>
    );
};

export default Course;
