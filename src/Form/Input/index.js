const Input = ({ amount, setAmount }) => {
    return (
        <input
            className="form__input"
            type="number"
            name="pln"
            placeholder="Wpisz kwotę"
            required min="1"
            step="any"
            value={amount}
            autoFocus
            onChange={({ target }) => setAmount(target.value)}
        />
    );
};

export default Input;