import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

export function HorariosPizzeria() {
const [horarios] = useState([
    { dia: 'Lunes', horario: '11:00 - 22:00' },
    { dia: 'Martes', horario: '11:00 - 22:00' },
    { dia: 'Miércoles', horario: '11:00 - 22:00' },
    { dia: 'Jueves', horario: '11:00 - 22:00' },
    { dia: 'Viernes', horario: '11:00 - 23:00' },
    { dia: 'Sábado', horario: '11:00 - 23:00' },
    { dia: 'Domingo', horario: '11:00 - 22:00' }
  ]);
  return (
    <Table responsive variant="dark">       
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario) => (
            <tr key={horario.dia}>
              <td>{horario.dia}</td>
              <td>{horario.horario}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
}



