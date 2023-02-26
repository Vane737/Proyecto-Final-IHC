import Card from '../../components/Card/Card';
import Horario from '../../components/Horario/Horario';
import SubjectTable from '../../components/SubjectTable/SubjectTable';
import SubjectTableP from '../../components/SubjectTable/SubjectTableP';

export default function HomePage() {
  const arrTransactions = [
    {
      titulo: 'INSCRIPCIÓN',
      carrera: 'INGENIERIA INFORMATICA 187-3 ',
      icono: 'bi bi-pencil-square',
    },
    {
      titulo: 'ADICIÓN',
      carrera: 'INGENIERIA INFORMATICA 187-3 ',
      icono: 'bi bi-pencil-square',
    },
    {
      titulo: 'LEVANTAMIENTO',
      carrera: 'INGENIERIA INFORMATICA 187-3 ',
      icono: 'bi bi-pencil-square',
    },
  ];
  const arrCalculo = [
    {
      grupo: 'F1',
      docente: 'Avendaño Gonzales Eudal',
      horario: 'Mar 6:15 - 8:30, Jue 6:15 - 8:30',
      cupos: '20',
      conflictos: 'Ninguno',
    },
    {
      grupo: 'H',
      docente: 'Tejerina Guerra Julio',
      horario: 'Mie 7:00 - 9:15, Vie 7:00 - 9:15',
      cupos: '10',
      conflictos: 'Ninguno',
    },
    {
      grupo: 'SB',
      docente: 'Justiniano Vaca Juan Tomas',
      horario: 'Lun 8:30 - 10:00, Mie 8:30 - 10:00, Vie 8:30 - 10:00',
      cupos: '0',
      conflictos: 'Ninguno',
    },
    {
      grupo: 'SF',
      docente: 'Morales Mendez Magaly',
      horario: 'Mar 9:15 - 11:30, Jue 9:15 - 11:30',
      cupos: '10',
      conflictos: 'Ninguno',
    },
  ];
  const arrFisica = [
    {
      grupo: 'SG',
      docente: 'Sanchez Hervas Jose Gabriel',
      horario: 'Lun 13:00 - 14:30, Mar 7:00 - 9:15, Jue 7:00 - 9:15',
      cupos: '20',
      conflictos: 'Ninguno',
    },
    {
      grupo: 'SI',
      docente: 'Cayoja Lucana Victor Milton',
      horario: 'Mar 7:00 - 9:15, Jue 7:00 - 9:15, Vie 10:00 - 11:30',
      cupos: '20',
      conflictos: 'Ninguno',
    },
    {
      grupo: 'SK',
      docente: 'Cayoja Lucana Victor Milton',
      horario: 'Mar 16:00 - 18:15, Jue 16:00 - 18:15, Vie 16:00 - 17:30',
      cupos: '20',
      conflictos: 'Ninguno',
    },
    {
      grupo: 'SM',
      docente: 'Sanchez Velasco Enrique',
      horario: 'Lun 15:15 - 16:45, Mar 15:15 - 16:45, Mar 16:45 - 18:15, Mie 15:15 - 16:45',
      cupos: '20',
      conflictos: 'Ninguno',
    },
  ];

  const arrPrueba = [
    {
      calculo: [
        {
          docente: 'Miranda',
          grupo: 'SA',
        },
        {
          docente: 'Cabello',
          grupo: 'SB',
        },
      ],
    },
    {
      calculo: [
        {
          docente: 'Miranda',
          grupo: 'SA',
        },
        {
          docente: 'Cabello',
          grupo: 'SB',
        },
      ],
    },
  ];
  return (
    <div className="container">
      <h1>232561145 - LIZZETH VALLEJO PEREZ</h1>
      <div className="row">
        {arrTransactions.map((transaction, index) => {
          return (
            <div className="col" key={index}>
              <Card
                titulo={transaction.titulo}
                carrera={transaction.carrera}
                icono={transaction.icono}
              />
            </div>
          );
        })}
      </div>
      <div className="row py-5">
        <div className="col">
          <h3>ESTAS SON TUS TRANSACCIONES:</h3>
          <SubjectTable />
          <SubjectTableP data={arrCalculo} />
          <SubjectTableP data={arrFisica} />
          <Horario/>
        </div>
      </div>
    </div>
  );
}
