import "./style.css";
import Select from "./Select";
import Input from "./Input";
import Result from "./Result";
import { ShowCurrentDate } from "./Clock";
import React, { useState } from 'react';


const Form = ({ currencies }) => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);
    const [result, setResult] = useState([]);

    const getCurrencyRate = () => {
        return (currencies.find(({ id }) => id === selectedCurrency).rate);
    };

    const calculateResult = () => {
        setResult([(amount / getCurrencyRate()).toFixed(2), (" "), selectedCurrency]);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getCurrencyRate();
        calculateResult();
    };

    const onFormReset = () => {
        setAmount("");
        setResult("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
            <ShowCurrentDate />
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>
                <p className="form__paragraph">
                    Pola wymagane *
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Kwota w PLN*:</span>
                        <Input
                            amount={amount}
                            setAmount={setAmount}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę</span>
                        <Select
                            setSelectedCurrency={setSelectedCurrency}
                            selectedCurrency={selectedCurrency}
                        />
                    </label>
                </p>
                <Result
                    result={result}
                />
            </fieldset>
            <button className="form__button">Przelicz</button>
            <button className="form__button" type="reset">Wyczyść formularz</button>
        </form>
    );
};

export default Form;