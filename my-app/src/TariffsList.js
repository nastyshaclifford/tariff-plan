import React from "react";
import "./Tariffs.css"; 

const Tariff = ({ name, price, speed, isHighlighted, color }) => {
    return (
        <div className={`tariff ${color} ${isHighlighted ? "highlighted" : ""}`}>
        <h3>{name}</h3>
        <div className="price">{price} ₽</div>
        <div className="monthly">{price} /мес</div>
        <div className="speed">{speed}</div>
        <div className="traffic">Объем включенного трафика не ограничен</div>
    </div>
    );
};

const TariffsList = () => {
const tariffs = [
    { name: "Безлимитный 300", price: "300", speed: "до 10 Мбит/сек", color: "blue" },
    { name: "Безлимитный 450", price: "450", speed: "до 50 Мбит/сек", color: "green" },
    { name: "Безлимитный 550", price: "550", speed: "до 100 Мбит/сек", color: "red" },
    { name: "Безлимитный 1000", price: "1000", speed: "до 200 Мбит/сек", color: "black" },
];

return (
    <div className="tariffs-container">
    {tariffs.map((tariff) => (
        <Tariff
        key={tariff.name}
        name={tariff.name}
        price={tariff.price}
        speed={tariff.speed}
        color={tariff.color}
        isHighlighted={tariff.price === "550"}
        />
    ))}
    </div>
);
};

export default TariffsList;