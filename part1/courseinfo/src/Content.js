import Part from "./Part";

const Content = ({ body }) => {
    return (
        <div>
            <Part element={body[0]} />
            <Part element={body[1]} />
            <Part element={body[2]} />
        </div>
    );
};

export default Content;
