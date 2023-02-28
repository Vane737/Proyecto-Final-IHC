import Data from '../../components/Data/Data';
import NavAzul from '../../components/NavAzul/NavAzul';
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
