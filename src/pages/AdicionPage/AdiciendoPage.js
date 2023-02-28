import Data from '../../components/Data/Data';
import NavAzul from '../../components/NavAzul/NavAzul';
import SubjectComboBox from '../../components/SubjectComboBox/SubjectComboBox';

export default function AdicionPage() {
  let periods = [
    { name: 'Quinto Semestre', id: '5' },
    { name: 'Electivas', id: '11' },
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
  ];
  let subjects = [
    { id: '5', nombre: 'Programación Lógica y Funcional', sigla: 'INF318', idper: '5' },
    { id: '6', nombre: 'Estructura de Datos II', sigla: 'INF310', idper: '5' },
    { id: '7', nombre: 'Modelación y Simulación de Sistemas', sigla: 'ELC101', idper: '11' },
  ];
  return (
    <>
      <NavAzul />
      <div className="container py-3">
      <h2 className="">SISTEMA DE ADICIÓN WEB</h2>
        <Data />
        <div className="row">
          <div className="col">
            <h4 className="text-start">Horario</h4>
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
