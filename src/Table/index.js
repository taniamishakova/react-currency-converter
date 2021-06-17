import "./style.css";
import TableHeader from "./TableHeader";
import currencies from "../currencies";
import Link from "../Link";

const Table = () => (
    <div className="table__container">
        <table className="table">
            <caption className="table__caption">Kursy walut</caption>
            <thead>
                <tr>
                    <TableHeader scope={"col"} title={"Waluta"} />
                    <TableHeader scope={"col"} title={"Kursy walut"} />
                </tr>
            </thead>
            <tbody>
                {currencies.map(currency => (
                    <tr key={currency.id}>
                        <TableHeader
                            scope={"row"}
                            title={currency.name}
                        />
                        <td className="table__cell">{currency.rate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link />
    </div>
);

export default Table;