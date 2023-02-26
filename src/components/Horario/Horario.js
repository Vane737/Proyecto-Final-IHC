export default function Horario() {
  const horario = [
    {
      hora: '8:00am',
      lunes: 'Matemáticas',
      martes: 'Español',
      miercoles: 'Ciencias',
      jueves: 'Historia',
      viernes: 'Inglés',
    },
    {
      hora: '9:00am',
      lunes: 'Historia',
      martes: 'Inglés',
      miercoles: 'Matemáticas',
      jueves: 'Español',
      viernes: 'Ciencias',
    },
    {
      hora: '10:00am',
      lunes: 'Historia',
      martes: 'Inglés',
      miercoles: 'Matemáticas',
      jueves: 'Español',
      viernes: 'Ciencias',
    },
    // Agregue las demás horas del día de la semana
  ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {horario.map((hora, index) => (
            <tr key={index}>
              <td>{hora.hora}</td>
              <td>{hora.lunes}</td>
              <td>{hora.martes}</td>
              <td>{hora.miercoles}</td>
              <td>{hora.jueves}</td>
              <td>{hora.viernes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
