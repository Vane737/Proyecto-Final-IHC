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
    {id: '2',nombre: 'Fisica I', sigla:'FIS100', idper:'2'},
    // {id: '3',nombre: 'Estructuras Discretas', sigla:'EST-321', idper: '1'},
    // {id: '4',nombre: 'Introducción a la programación', sigla:'INF101', idper: '1'},
  ]

  const groups = [
    {
      idmat: '1',
      grupo: 'F1',
      docente: 'Avendaño Gonzales Eudal',
      horario: 'Mar 6:15 - 8:30, Jue 6:15 - 8:30',
      cupos: '20',
      conflictos: 'Ninguno'
    },
    {
      idmat: '1',
      grupo: 'H',
      docente: 'Tejerina Guerra Julio',
      horario: 'Mie 7:00 - 9:15, Vie 7:00 - 9:15',
      cupos: '10',
      conflictos: 'Ninguno'
    },
    {
      idmat: '1',
      grupo: 'SB',
      docente: 'Justiniano Vaca Juan Tomas',
      horario: 'Lun 8:30 - 10:00, Mie 8:30 - 10:00, Vie 8:30 - 10:00',
      cupos: '0',
      conflictos: 'Ninguno'
    },
    {
      idmat: '1',
      grupo: 'SF',
      docente: 'Morales Mendez Magaly',
      horario: 'Mar 9:15 - 11:30, Jue 9:15 - 11:30',
      cupos: '10',
      conflictos: 'Ninguno'
    },

    {
      idmat: '2',
      grupo: 'SG',
      docente: 'Sanchez Hervas Jose Gabriel',
      horario: 'Lun 13:00 - 14:30, Mar 7:00 - 9:15, Jue 7:00 - 9:15',
      cupos: '20',
      conflictos: 'Ninguno'
    },
    {
      idmat: '2',
      grupo: 'SI',
      docente: 'Cayoja Lucana Victor Milton',
      horario: 'Mar 7:00 - 9:15, Jue 7:00 - 9:15, Vie 10:00 - 11:30',
      cupos: '20',
      conflictos: 'Ninguno'
    },
    {
      idmat: '2',
      grupo: 'SK',
      docente: 'Cayoja Lucana Victor Milton',
      horario: 'Mar 16:00 - 18:15, Jue 16:00 - 18:15, Vie 16:00 - 17:30',
      cupos: '20',
      conflictos: 'Ninguno'
    },
    {
      idmat: '2',
      grupo: 'SM',
      docente: 'Sanchez Velasco Enrique',
      horario: 'Lun 15:15 - 16:45, Mar 15:15 - 16:45, Mar 16:45 - 18:15, Mie 15:15 - 16:45',
      cupos: '20',
      conflictos: 'Ninguno'
    },
];

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
        <div className="row my-5">
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
                            {period.id === subject.idper? <SubjectComboBox groups={groups} subject={subject}/> : ''}
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
