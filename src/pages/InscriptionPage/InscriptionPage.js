import SubjectComboBox from '../../components/SubjectComboBox/SubjectComboBox';
import './InscriptionPage.css';

export default function InscriptionPage() {
  let periods = [
    { name: 'Primer Semestre', id: '1' },
    { name: 'Segundo Semestre', id: '2'},
    { name: 'Tercer Semestre', id: '3' },
    { name: 'Electivas', id:'4' }
  ];

  let subjects = [
    {id: '1',nombre: 'Calculo I', sigla:'MAT101', idper:'1'},
    {id: '2',nombre: 'Fisica I', sigla:'FIS100', idper:'1'},
    {id: '3',nombre: 'Estructuras Discretas', sigla:'EST-321', idper: '1'},
    {id: '4',nombre: 'Introducción a la programación', sigla:'INF101', idper: '1'},
  ]


  // let subjects = {
  //     description:
  // }

  return (
    <div className="">
      <div className="nav-bar-style"></div>
      <div className="container">
        <div className="py-4 my-4">
          <h2>Grupos Ofertados</h2>
          {/* <Button classname='btn color-boton'>Hola Soy un botón</Button> */}
        </div>
        <div className="row">
          <div className="col my-2 after-line text-center">
            <h4 className="">Horario</h4>
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
                            {period.id === subject.idper? <SubjectComboBox grupos='' subject={subject}/> : ''}
                        </div>
                    );
                }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
