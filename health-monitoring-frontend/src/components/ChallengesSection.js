import "../css/ChallengesSection.css"; // Asegúrate de tener esta hoja de estilos
import React, { useState } from 'react';

function ChallengesSection() {
    const [challenges, setChallenges] = useState([
        { text: 'Caminar 10,000 pasos al día durante una semana', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Beber 8 vasos de agua al día durante una semana', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Reducir el consumo de sal a menos de 2,300 mg por día', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Dormir al menos 7 horas por noche', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Practicar meditación diaria durante 10 minutos', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Incorporar 5 porciones de frutas y verduras al día', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Evitar el consumo de bebidas azucaradas por una semana', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Hacer ejercicio 30 minutos al día durante 5 días', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Leer un libro sobre salud mental durante una semana', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Limitar el consumo de cafeína a 1 taza al día', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Evitar el uso de dispositivos electrónicos 1 hora antes de dormir', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Realizar ejercicios de respiración profunda cada mañana', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Hacer una caminata al aire libre cada fin de semana', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Cocinar todas las comidas en casa durante una semana', started: false, completed: false, startDate: null, endDate: null },
        { text: 'Limitar el tiempo en redes sociales a 30 minutos por día', started: false, completed: false, startDate: null, endDate: null },
    ]);

    const handleStartChange = (index) => {
        const newChallenges = [...challenges];
        newChallenges[index].started = !newChallenges[index].started;
        newChallenges[index].startDate = newChallenges[index].started ? new Date().toLocaleDateString() : null;
        setChallenges(newChallenges);
    };

    const handleCompleteChange = (index) => {
        const newChallenges = [...challenges];
        newChallenges[index].completed = !newChallenges[index].completed;
        newChallenges[index].endDate = newChallenges[index].completed ? new Date().toLocaleDateString() : null;
        setChallenges(newChallenges);
    };

    return (
        <div className="challenges-container">
            <div className="challenges-list">
                <h2 className="fjalla-one-regular">Retos de Bienestar</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Inicio</th>
                            <th>Final</th>
                            <th>Reto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {challenges.map((challenge, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={challenge.started}
                                        onChange={() => handleStartChange(index)}
                                    />
                                    {challenge.startDate}
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={challenge.completed}
                                        onChange={() => handleCompleteChange(index)}
                                        disabled={!challenge.started}
                                    />
                                    {challenge.endDate}
                                </td>
                                <td>{challenge.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="completed-challenges">
                <h3>Retos Cumplidos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Inicio</th>
                            <th>Final</th>
                            <th>Reto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {challenges.filter(challenge => challenge.completed).map((challenge, index) => (
                            <tr key={index}>
                                <td>{challenge.startDate}</td>
                                <td>{challenge.endDate}</td>
                                <td>{challenge.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ChallengesSection;
