import React, { useState } from "react";
import axios from "axios";
import "../css/PressureForm.css";

function BloodPressureForm() {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pulse, setPulse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    const reading = { systolic, diastolic, pulse };
    try {
      await axios.post(
        "http://localhost:8000/api/blood-pressure-readings/",
        reading,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("¡Lectura enviada con éxito!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="blood-pressure-form">
      <div className="div-container">
        <h2 className="title fjalla-one-regular">Ingresar Lectura de Presión Arterial</h2>
        <div className="info-container">
          <div className="info-box">
            <div>
              <h3 className="">Sistólica</h3>
              <p>
                La presión sistólica es la presión en las arterias cuando el
                corazón late. Un valor normal es entre 90 y 120 mmHg.
              </p>
            </div>

            <div>
              <h3>Diastólica</h3>
              <p>
                La presión diastólica es la presión en las arterias cuando el
                corazón está en reposo entre latidos. Un valor normal es entre
                60 y 80 mmHg.
              </p>
            </div>

            <div>
              <h3>Pulso</h3>
              <p>
                El pulso mide el número de veces que el corazón late por minuto.
                Un valor normal es entre 60 y 100 latidos por minuto.
              </p>
            </div>
          </div>
        </div>

        <div className="container-form">
          <input
            type="number"
            placeholder="Sistólica mmHg"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Diastólica mmHg"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Pulso mmHg"
            value={pulse}
            onChange={(e) => setPulse(e.target.value)}
            className="input-field"
          />
          <button onClick={handleSubmit} className="submit-button">
            Enviar
          </button>

          <div className="info-container">
            <div className="info-box">
              <div>
                <h3>¿Por qué se usa mmHg?</h3>
                <p>
                  La unidad mmHg se basa en la cantidad de presión que un
                  milímetro de mercurio puede ejercer en una columna.
                  Originalmente, los instrumentos para medir la presión, como
                  los barómetros y los esfigmomanómetros (que miden la presión
                  arterial), usaban mercurio debido a su alta densidad. Cuando
                  se mide la presión, se determina cuántos milímetros de
                  mercurio se elevaría o bajaría en un tubo debido a esa
                  presión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodPressureForm;
