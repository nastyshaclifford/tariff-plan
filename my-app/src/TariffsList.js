import React, { useState } from "react";
import "./Tariffs.css"; 

const TariffsList = () => {
    const [selectedTariff, setSelectedTariff] = useState(null);

    const tariffs = [
        { name: "Безлимитный 300", price: "300", speed: "до 10 Мбит/сек", color: "blue" },
        { name: "Безлимитный 450", price: "450", speed: "до 50 Мбит/сек", color: "green" },
        { name: "Безлимитный 550", price: "550", speed: "до 100 Мбит/сек", color: "red" },
        { name: "Безлимитный 1000", price: "1000", speed: "до 200 Мбит/сек", color: "black" },
    ];

    const handleSelectTariff = (tariffName) => {
        setSelectedTariff(tariffName === selectedTariff ? null : tariffName);
    };

    return (
        <div className="tariffs-container">
            {tariffs.map((tariff) => (
                <div 
                    key={tariff.name}
                    className={`tariff ${tariff.color} ${selectedTariff === tariff.name ? "selected" : ""}`}
                    onClick={() => handleSelectTariff(tariff.name)}
                >
                    <h3>{tariff.name}</h3>
                    <div className="price">{tariff.price} ₽</div>
                    <div className="monthly">{tariff.price} /мес</div>
                    <div className="speed">{tariff.speed}</div>
                    <div className="traffic">Объем включенного трафика не ограничен</div>
                </div>
            ))}
        </div>
    );
};

export default TariffsList;
