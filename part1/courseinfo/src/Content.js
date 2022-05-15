const Content = ({ body }) => {
    return (
        <div>
            <p>
                {body[0].part} - {body[0].exercises}
            </p>
            <p>
                {body[1].part} - {body[1].exercises}
            </p>
            <p>
                {body[2].part} - {body[2].exercises}
            </p>
        </div>
    );
};

export default Content;
