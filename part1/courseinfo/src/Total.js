const Total = ({ body }) => {
    return (
        <p>
            Number of exercises:{' '}
            {body[0].exercises + body[1].exercises + body[2].exercises}
        </p>
    );
};

export default Total;
