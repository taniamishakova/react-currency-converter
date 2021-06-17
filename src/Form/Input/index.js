const Input = ({amount, setNewAmount}) => {
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
        onChange={({ target }) => setNewAmount(target.value)}
    />
    );
};

export default Input;