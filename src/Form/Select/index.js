import currencies from "../../currencies";

const Select = ({ selectedCurrency, setSelectedCurrency }) => (
    <select
        className="form__select"
        name="currency"
        value={selectedCurrency}
        onChange={({ target }) => setSelectedCurrency(target.value)}
    >
        {currencies.map(currency => (
            <option
                key={currency.id}
                value={currency.id}
            >
                {currency.name}
            </option>
        ))}
    </select>
);
export default Select;