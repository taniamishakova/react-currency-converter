import { useEffect, useState } from 'react';
import "./style.css";

export const ShowCurrentDate = () => {
    const [date, setDate] = useState(new Date());
    const formattedDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="date">
            {formattedDate}
        </p>
    );
};
