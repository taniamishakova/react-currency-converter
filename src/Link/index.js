import "./style.css";

const Link = () => (
    <p className="table__paragraph">
        Wszystkie dane do tabeli zostały pobrane z strony
        <a
            className="link"
            href="https://mybank.pl/kursy-walut/"
            target="_blank"
            title="Oficjalna strona kursów walut"
            rel="noreferrer noopener"
        >
            Aktualny kurs walut
        </a> dnia 24.04.2021 r.
    </p>
);

export default Link;