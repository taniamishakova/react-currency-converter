import "./style.css";

const Result = ({ result }) => (
    <p className="form__paragraph">
        Otrzymasz: <strong className="result">{result}</strong>
    </p>
);

export default Result;