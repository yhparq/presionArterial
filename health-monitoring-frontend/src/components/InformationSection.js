import React from "react";
import "../css/InformationSection.css"; // Asegúrate de tener esta hoja de estilos

function InformationSection() {
  return (
    <div className="information-section">
      <h2 className="fjalla-one-regular">Información de Salud</h2>
      <p>
        La presión arterial es una medida de la fuerza que ejerce la sangre
        contra las paredes de las arterias mientras el corazón la bombea.
        Mantener una presión arterial saludable es crucial para reducir el
        riesgo de enfermedades cardiovasculares, como ataques cardíacos y
        accidentes cerebrovasculares.
      </p>
      <h3>¿Qué es la presión arterial?</h3>
      <p>
        La presión arterial se mide en milímetros de mercurio (mmHg) y se
        presenta en dos cifras: la presión sistólica (el número superior) y la
        presión diastólica (el número inferior). La presión sistólica mide la
        fuerza con la que la sangre empuja contra las paredes arteriales
        cuando el corazón late. La presión diastólica mide esta fuerza cuando el
        corazón está en reposo entre latidos.
      </p>
      <h3>Consejos para mantener la presión arterial bajo control</h3>
      <ul>
        <li>
          <strong>Realiza actividad física regularmente:</strong> El ejercicio
          ayuda a fortalecer el corazón y reducir la presión arterial.
        </li>
        <li>
          <strong>Mantén un peso saludable:</strong> El sobrepeso puede
          aumentar la presión arterial. Perder incluso una pequeña cantidad de
          peso puede hacer una gran diferencia.
        </li>
        <li>
          <strong>Reduce el consumo de sodio:</strong> El exceso de sodio en la
          dieta puede elevar la presión arterial. Opta por alimentos bajos en
          sal y evita agregar sal adicional a tus comidas.
        </li>
        <li>
          <strong>Evita el consumo excesivo de alcohol:</strong> Beber en
          exceso puede elevar la presión arterial. Modera tu consumo de alcohol
          para proteger tu corazón.
        </li>
        <li>
          <strong>Controla el estrés:</strong> El estrés prolongado puede
          contribuir al aumento de la presión arterial. Practica técnicas de
          relajación como la meditación, el yoga o la respiración profunda.
        </li>
        <li>
          <strong>Consulta regularmente a tu médico:</strong> Monitorear tu
          presión arterial y seguir las indicaciones médicas es fundamental para
          mantenerla bajo control.
        </li>
      </ul>
      <h3>Alimentos que ayudan a controlar la presión arterial</h3>
      <p>
        Una dieta saludable puede desempeñar un papel importante en el control
        de la presión arterial. Algunos alimentos recomendados incluyen:
      </p>
      <ul>
        <li>
          <strong>Frutas y verduras:</strong> Las frutas y verduras, como los
          plátanos, las naranjas, las espinacas y el brócoli, son ricas en
          potasio, que ayuda a equilibrar los efectos del sodio y a reducir la
          presión arterial.
        </li>
        <li>
          <strong>Granos enteros:</strong> Los granos enteros como la avena, la
          quinoa y el arroz integral son ricos en fibra y nutrientes que
          benefician la salud cardiovascular.
        </li>
        <li>
          <strong>Pescado graso:</strong> El salmón, la caballa y otros pescados
          grasos son ricos en ácidos grasos omega-3, que pueden ayudar a
          reducir la presión arterial.
        </li>
        <li>
          <strong>Productos lácteos bajos en grasa:</strong> Los productos
          lácteos bajos en grasa, como el yogur y la leche descremada, son
          fuentes importantes de calcio, que también puede ayudar a mantener la
          presión arterial bajo control.
        </li>
        <li>
          <strong>Legumbres y frutos secos:</strong> Las lentejas, los frijoles
          y las nueces son ricos en magnesio, potasio y fibra, nutrientes que
          apoyan la salud del corazón.
        </li>
      </ul>
    </div>
  );
}

export default InformationSection;