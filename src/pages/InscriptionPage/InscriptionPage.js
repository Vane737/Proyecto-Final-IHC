import Schedule from '../../components/Schedule/Schedule';
import ScheduleHeader from '../../components/Schedule/ScheduleHeader';
import SubjectComboBox from '../../components/SubjectComboBox/SubjectComboBox';
import './InscriptionPage.css';

export default function InscriptionPage() {
  let periods = [
    { name: 'Cuarto Semestre', id: '4' },
    { name: 'Quinto Semestre', id: '5' },
    { name: 'Electivas', id: '11' },
  ];

  let subjects = [
    { id: '1', nombre: 'Prob. y Estadísticas I', sigla: 'MAT202', idper: '4' },
    { id: '2', nombre: 'Prob. y Estadísticas II', sigla: 'MAT302', idper: '5' },
    { id: '3', nombre: 'Base de Datos I', sigla: 'INF312', idper: '5' },
    { id: '4', nombre: 'Lenguajes Formales', sigla: 'INF319', idper: '5' },
    { id: '5', nombre: 'Programación Lógica y Funcional', sigla: 'INF318', idper: '5' },
    { id: '6', nombre: 'Estructura de Datos II', sigla: 'INF310', idper: '5' },
    { id: '7', nombre: 'Modelación y Simulación de Sistemas', sigla: 'ELC101', idper: '11' },
    { id: '8', nombre: 'Programación Gráfica', sigla: 'ELC102', idper: '11' }
  ];

  const groups = [
    {
      idmat: '1',
      grupo: 'SB',
      docente: 'Cano Céspedes Jorge',
      horario: 'Ma 9:15 - 11:30, Ju 9:15 - 11:30',
      cupos: '10',
      conflictos: '',
    },
    {
      idmat: '1',
      grupo: 'SC',
      docente: 'Cáceres Chacón Braulio',
      horario: 'Lu 7:00 - 8:30, Mi 7:00 - 8:30, Vi 7:00 - 8:30',
      cupos: '7',
      conflictos: '',
    },
    {
      idmat: '1',
      grupo: 'SD',
      docente: 'Castro Mariscal Jhonny',
      horario: 'Ma 18:15 - 20:30, Ju 18:15 - 20:30',
      cupos: '8',
      conflictos: '',
    },
    {
      idmat: '2',
      grupo: 'SA',
      docente: 'Cáceres Chacón Braulio',
      horario: 'Lu 10:00 - 11:30, Mi 10:00 - 11:30, Vi 10:00 - 11:30',
      cupos: '5',
      conflictos: '',
    },
    {
      idmat: '2',
      grupo: 'SB',
      docente: 'Cano Céspedes Jorge',
      horario: 'Lu 9:15 - 11:30, Mi 9:15 - 11:30',
      cupos: '11',
      conflictos: '',
    },

    {
      idmat: '3',
      grupo: 'SB',
      docente: 'Veizaga Gonzales Josue Obed',
      horario: 'Lu 8:30 - 10:00, Mi 8:30 -10:00, Vi 8:30 -10:00',
      cupos: '2',
      conflictos: '',
    },
    {
      idmat: '3',
      grupo: 'SA',
      docente: 'Veizaga Gonzales Josue Obed',
      horario: 'Ma 7:00 - 9:15, Ju 7:00 - 9:15',
      cupos: '9',
      conflictos: '',
    },
    {
      idmat: '4',
      grupo: 'SA',
      docente: 'Miranda Carrasco Carlos',
      horario: 'Lu 7:00 - 8:30, Mi 7:00 - 8:30, Vi 7:00 - 8:30',
      cupos: '25',
      conflictos: '',
    },
    {
      idmat: '5',
      grupo: 'SA',
      docente: 'Vargas Yapura Edwin',
      horario: 'Ma 20:30 - 22:45, Ju 20:30 - 22:45',
      cupos: '20',
      conflictos: '',
    },
    {
      idmat: '6',
      grupo: 'SX',
      docente: 'Vaca Pinto Céspedes Roberto',
      horario: 'Ma 9:15 - 11:30, Ju 9:15 - 11:30',
      cupos: '10',
      conflictos: '',
    },
    {
      idmat: '6',
      grupo: 'SX',
      docente: 'Barroso Viruez Gino',
      horario: 'Lu 11:30 - 13:00, Mi 11:30 - 13:00, Vi 11:30 - 13:00',
      cupos: '15',
      conflictos: '',
    },
    {
      idmat: '6',
      grupo: 'SA',
      docente: 'Peinado Pereira Juan Carlos',
      horario: 'Ma 7:00 - 9:15, Ju 7:00 - 9:15',
      cupos: '20',
      conflictos: '',
    },
    {
      idmat: '8',
      grupo: 'SA',
      docente: 'Peinado Pereira Miguel Jesús',
      horario: 'Sa 8:30 - 10:00, Sa 10:00 - 11:30',
      cupos: '35',
      conflictos: '',
    },
  ];

  const arrProps = [
    {
      colinit: '2',
      colend: '3',
      rowinit: '1',
      rowend: '3',
      color: '#8B0000',
      name: 'Lenguajes Formales',
      group: 'SA',
    },
    {
      colinit: '4',
      colend: '5',
      rowinit: '1',
      rowend: '3',
      color: '#8B0000',
      name: 'Calculo I',
      group: 'SA',
    },
    {
      name: 'Calculo I',
      group: 'SA',
      colinit: '6',
      colend: '7',
      rowinit: '1',
      rowend: '3',
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
      id:'1', 
      days: [1, 3, 5],
      name: 'Lenguajes Formales',
      group: 'SA',
      color: 'rgba(40,81,198,0.28)',
    },
    {
      id:'2', 
      days: [1, 3, 5],
      name: 'Base de Datos I',
      group: 'SB',
      color: 'rgba(126,37,140,0.28)',
    },
    {
      id:'3', 
      days: [1, 3, 5],
      name: 'Prob. y Estadísticas II',
      group: 'SA',
      color: 'rgba(254,15,15,0.28)',
    },
    {
      id:'4', 
      days: [2,4],
      name: 'Prob. y Estadísticas I',
      group: 'SD',
      color: 'rgba(235,210,81,0.70)',
    },
    {
      id:'5', 
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
      col: [2,3],
      row: [1,3],
      horaI: '7:00',
      horaF: '8:30',
      periodo: 2,
    },
    {
      idmat: '1',
      dia: 2,
      col: [4,5],
      row: [1,3],
      horaI: '7:00',
      horaF: '8:30',
      periodo: 2,
    },
    {
      idmat: '1',
      dia: 2,
      col: [6,7],
      row: [1,3],
      horaI: '7:00',
      horaF: '8:30',

      periodo: 2,
    },
    {
      idmat: '2',
      dia: 2,
      col: [2,3],
      row: [3,5],
      horaI: '8:30',
      horaF: '10:00',
      periodo: 2,
    },
    {
      idmat: '2',
      dia: 1,
      col: [4,5],
      row: [3,5],
      horaI: '8:30',
      horaF: '10:00',
      periodo: 2,
    },
    {
      idmat: '2',
      dia: 2,
      col: [6,7],
      row: [3,5],
      horaI: '8:30',
      horaF: '10:00',
      periodo: 2,
    },
    {
      idmat: '3',
      dia: 2,
      col: [2,3],
      row: [5,7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: 2,
    },
    {
      idmat: '3',
      dia: 1,
      col: [4,5],
      row: [5,7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: 2,
    },
    {
      idmat: '3',
      dia: 2,
      col: [6,7],
      row: [5,7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: 2,
    },
    {
      idmat: '4',
      dia: 1,
      col: [3,4],
      row: [7,10],
      horaI: '18:15',
      horaF: '20:30',
      periodo: 2,
    },
    {
      idmat: '4',
      dia: 2,
      col: [5,6],
      row: [7,10],
      horaI: '18:15',
      horaF: '20:30',
      periodo: 2,
    },
    {
      idmat: '5',
      dia: 1,
      col: [7,8],
      row: [3,5],
      horaI: '08:30',
      horaF: '10:00',
      periodo: 2,
    },
    {
      idmat: '5',
      dia: 2,
      col: [7,8],
      row: [5,7],
      horaI: '10:00',
      horaF: '11:30',
      periodo: 2,
    },

  ];
  return (
    <div className="">
      <div className="nav-bar-style"></div>
      <div className="container">
        <div className="py-4 my-4">
          <h2>Grupos Ofertados</h2>
          {/* <Button classname='btn color-boton'>Hola Soy un botón</Button> */}
        </div>
        <div className="row my-5">
          <div className="col my-2 text-center">
            <h4 className="my-4">Horario</h4>
            <div className="container-schedule-header">
              {arrDays.map((day, index) => {
                return <ScheduleHeader key={index} name={day.name} />;
              })}
            </div>
            {
            <Schedule arrMaterias={arrMaterias} arrHorarios={arrHorarios} />
            }
          </div>
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
    </div>
  );
}
