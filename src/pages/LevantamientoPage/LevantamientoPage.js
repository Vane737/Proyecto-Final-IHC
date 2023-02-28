import Data from '../../components/Data/Data';
import NavAzul from '../../components/NavAzul/NavAzul';
import Schedule from '../../components/Schedule/Schedule';
import ScheduleHeader from '../../components/Schedule/ScheduleHeader';
import SubjectComboBox from '../../components/SubjectComboBox/SubjectComboBox';

export default function LevantamientoPage() {
  let periods = [{ name: 'Quinto Semestre', id: '5' }];
  let subjects = [
    { id: '5', nombre: 'Programación Lógica y Funcional', sigla: 'INF318', idper: '5' },
  ];
  const groups = [
    {
      idmat: '5',
      grupo: 'SA',
      docente: 'Vargas Yapura Edwin',
      horario: 'Ma 20:30 - 22:45, Ju 20:30 - 22:45',
      cupos: '20',
      conflictos: '',
    },
  ];
  const arrDays = [
    { id: '0', name: 'Horario' },
    { id: '1', name: 'Lunes' },
    { id: '2', name: 'Martes' },
    { id: '3', name: 'Miercoles' },
    { id: '4', name: 'Jueves' },
    { id: '5', name: 'Viernes' },
    { id: '6', name: 'Sabado' },
  ];
  let arrMaterias = [
    {
      id: '1',
      days: [1, 3, 5],
      name: 'Lenguajes Formales',
      group: 'SA',
      color: 'rgba(40,81,198,0.28)',
    },
    {
      id: '2',
      days: [1, 3, 5],
      name: 'Base de Datos I',
      group: 'SB',
      color: 'rgba(126,37,140,0.28)',
    },
    {
      id: '3',
      days: [1, 3, 5],
      name: 'Prob. y Estadísticas II',
      group: 'SA',
      color: 'rgba(254,15,15,0.28)',
    },
    {
      id: '4',
      days: [2, 4],
      name: 'Prob. y Estadísticas I',
      group: 'SD',
      color: 'rgba(235,210,81,0.70)',
    },
    {
      id: '5',
      days: [6],
      name: 'Programación Gráfica',
      group: 'SA',
      color: 'rgba(42,157,143,0.28)',
    },
  ];
  const arrHorarios = [
    {
      idmat: '1',
      dia: 1,
      col: [2, 3],
      row: [1, 3],
      horaI: '7:00',
      horaF: '8:30',
      periodo: [
        {
          horaI: '7:00',
          horaF: '7:45',
          row: [1,2],
        },
        {  
          horaI: '7:45',
          horaF: '8:30',
          row: [2,3]
        },
      ],
    },
    {
      idmat: '1',
      dia: 2,
      col: [4, 5],
      row: [1, 3],
      horaI: '7:00',
      horaF: '8:30',
      periodo: [
        {
          horaI: '7:00',
          horaF: '7:45',
          row: [1,2],
        },
        { 
          horaI: '7:45',
          horaF: '8:30',
          row: [2,3]
        },
      ],
    },
    {
      idmat: '1',
      dia: 2,
      col: [6, 7],
      row: [1, 3],
      horaI: '7:00',
      horaF: '8:30',
      periodo: [
        {
          horaI: '7:00',
          horaF: '7:45',
          row: [1,2],
        },
        { 
          horaI: '7:45',
          horaF: '8:30',
          row: [2,3]
        },
      ],
    },
    {
      idmat: '2',
      dia: 2,
      col: [2, 3],
      row: [3, 5],
      horaI: '8:30',
      horaF: '10:00',
      periodo: [
        {
          horaI: '8:30',
          horaF: '9:15',
          row: [3,4],
        },
        {  
          horaI: '9:15',
          horaF: '10:00',
          row: [4,5]
        },
      ],
    },
    {
      idmat: '2',
      dia: 1,
      col: [4, 5],
      row: [3, 5],
      horaI: '8:30',
      horaF: '10:00',
      periodo: [
        {
          horaI: '8:30',
          horaF: '9:15',
          row: [3,4],
        },
        {  
          horaI: '9:15',
          horaF: '10:00',
          row: [4,5]
        },
      ],
    },
    {
      idmat: '2',
      dia: 2,
      col: [6, 7],
      row: [3, 5],
      horaI: '8:30',
      horaF: '10:00',
      periodo: [
        {
          horaI: '8:30',
          horaF: '9:15',
          row: [3,4],
        },
        {  
          horaI: '9:15',
          horaF: '10:00',
          row: [4,5]
        },
      ],
    },
    {
      idmat: '3',
      dia: 2,
      col: [2, 3],
      row: [5, 7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: [
        {
          horaI: '10:00',
          horaF: '10:45',
          row: [5,6],
        },
        {  
          horaI: '10:45',
          horaF: '11:30',
          row: [6,7]
        },
      ],
    },
    {
      idmat: '3',
      dia: 1,
      col: [4, 5],
      row: [5, 7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: [
        {
          horaI: '10:00',
          horaF: '10:45',
          row: [5,6],
        },
        {  
          horaI: '10:45',
          horaF: '11:30',
          row: [6,7]
        },
      ],
    },
    {
      idmat: '3',
      dia: 2,
      col: [6, 7],
      row: [5, 7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: [
        {
          horaI: '10:00',
          horaF: '10:45',
          row: [5,6],
        },
        {  
          horaI: '10:45',
          horaF: '11:30',
          row: [6,7]
        },
      ],
    },
    {
      idmat: '4',
      dia: 1,
      col: [3, 4],
      row: [7, 10],
      horaI: '18:15',
      horaF: '20:30',
      periodo: [
        {
          horaI: '18:15',
          horaF: '19:00',
          row: [7,8],
        },
        {  
          horaI: '19:00',
          horaF: '19:45',
          row: [8,9]
        },
        {  
          horaI: '19:45',
          horaF: '20:30',
          row: [9,10]
        },
      ],
    },
    {
      idmat: '4',
      dia: 2,
      col: [5, 6],
      row: [7, 10],
      horaI: '18:15',
      horaF: '20:30',
      periodo: [
        {
          horaI: '18:15',
          horaF: '19:00',
          row: [7,8],
        },
        {  
          horaI: '19:00',
          horaF: '19:45',
          row: [8,9]
        },
        {  
          horaI: '19:45',
          horaF: '20:30',
          row: [9,10]
        },
      ],
    },
    {
      idmat: '5',
      dia: 1,
      col: [7, 8],
      row: [3, 5],
      horaI: '08:30',
      horaF: '10:00',
      periodo: [
        {
          horaI: '8:30',
          horaF: '9:15',
          row: [3,4],
        },
        {  
          horaI: '9:15',
          horaF: '10:00',
          row: [4,5]
        },
      ],
    },
    {
      idmat: '5',
      dia: 2,
      col: [7, 8],
      row: [5, 7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: [
        {
          horaI: '10:00',
          horaF: '10:45',
          row: [5,6],
        },
        {  
          horaI: '10:45',
          horaF: '11:30',
          row: [6,7]
        },
      ],
    },
  ];
  return (
    <>
      <NavAzul />
      <div className="container py-3">
        <h2 className="">SISTEMA DE LEVANTAMIENTO WEB</h2>
        <Data />
        <div className="row">
          <div className="col">
            <h4 className="text-start">Horario</h4>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col my-2 text-center">
            <div className="container-schedule-header">
              {arrDays.map((day, index) => {
                return <ScheduleHeader key={index} name={day.name} />;
              })}
            </div>
            {<Schedule arrMaterias={arrMaterias} arrHorarios={arrHorarios} />}
          </div>
        </div>
        <div className="mp-3">
          <h3 className='text-start'>Grupos Ofertados</h3>
        </div>
        {periods.map((period, index) => {
          return (
            <div className="row" key={index}>
              <div className="col my-2 after-line">
                <h4 className="">{period.name}</h4>
                {subjects.map((subject, index) => {
                  return (
                    <div key={index}>
                      {period.id === subject.idper ? (
                        <SubjectComboBox groups={groups} subject={subject} />
                      ) : (
                        ''
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
