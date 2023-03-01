import Card from '../../components/Card/Card';
import NavBarCustom from '../../components/NavBarCustom/NavBarCustom';




import TransactionTable from '../../components/TransactionTable/TransactionTable';

export default function HomePage() {
  const arrTransactions = [
    {
      fecha: '10/08/2022',
      hora: '3:30:00 AM',
      gestion: '2-2022',
      carrera: '187-3',
      descripcion: 'Inscripción',
      via: 'Web'
    },
    {
      fecha: '1/30/2023',
      hora: '8:19:00 PM',
      gestion: '3-2022',
      carrera: '187-3',
      descripcion: 'Inscripción',
      via: 'Web'
    },
  ];
  const arrActions = [
    {
      titulo: 'INSCRIPCIÓN',
      carrera: 'INGENIERIA INFORMATICA 187-3 ',
      icono: 'bi bi-pencil-square',
      url: '/inscription'
    },
    {
      titulo: 'ADICIÓN',
      carrera: 'INGENIERIA INFORMATICA 187-3 ',
      icono: 'bi bi-pencil-square',
      url: '/adicion'
    },
    {
      titulo: 'LEVANTAMIENTO',
      carrera: 'INGENIERIA INFORMATICA 187-3 ',
      icono: 'bi bi-pencil-square',
      url: '/levantamiento'
    },
  ];


// const groups = [
//     {
//       grupo: 'F1',
//       docente: 'Avendaño Gonzales Eudal',
//       horario: 'Mar 6:15 - 8:30, Jue 6:15 - 8:30',
//       cupos: '20',
//       idmat: '1',
//       conflictos: 'Ninguno'
//     },
//     {
//       idmat: '1',
//       grupo: 'H',
//       docente: 'Tejerina Guerra Julio',
//       horario: 'Mie 7:00 - 9:15, Vie 7:00 - 9:15',
//       cupos: '10',
//       conflictos: 'Ninguno'
//     },
//     {
//       idmat: '1',
//       grupo: 'SB',
//       docente: 'Justiniano Vaca Juan Tomas',
//       horario: 'Lun 8:30 - 10:00, Mie 8:30 - 10:00, Vie 8:30 - 10:00',
//       cupos: '0',
//       conflictos: 'Ninguno'
//     },
//     {
//       idmat: '1',
//       grupo: 'SF',
//       docente: 'Morales Mendez Magaly',
//       horario: 'Mar 9:15 - 11:30, Jue 9:15 - 11:30',
//       cupos: '10',
//       conflictos: 'Ninguno'
//     },

//     {
//       idmat: '2',
//       grupo: 'SG',
//       docente: 'Sanchez Hervas Jose Gabriel',
//       horario: 'Lun 13:00 - 14:30, Mar 7:00 - 9:15, Jue 7:00 - 9:15',
//       cupos: '20',
//       conflictos: 'Ninguno'
//     },
//     {
//       idmat: '2',
//       grupo: 'SI',
//       docente: 'Cayoja Lucana Victor Milton',
//       horario: 'Mar 7:00 - 9:15, Jue 7:00 - 9:15, Vie 10:00 - 11:30',
//       cupos: '20',
//       conflictos: 'Ninguno'
//     },
//     {
//       idmat: '2',
//       grupo: 'SK',
//       docente: 'Cayoja Lucana Victor Milton',
//       horario: 'Mar 16:00 - 18:15, Jue 16:00 - 18:15, Vie 16:00 - 17:30',
//       cupos: '20',
//       conflictos: 'Ninguno'
//     },
//     {
//       idmat: '2',
//       grupo: 'SM',
//       docente: 'Sanchez Velasco Enrique',
//       horario: 'Lun 15:15 - 16:45, Mar 15:15 - 16:45, Mar 16:45 - 18:15, Mie 15:15 - 16:45',
//       cupos: '20',
//       conflictos: 'Ninguno'
//     },
// ];

  return (
    <>
      <NavBarCustom/>
      <div className="container py-5">
        <h2>212132283 - MARIBEL VARGAS LOPEZ</h2>
        <div className="row pt-5">
          {arrActions.map((transaction, index) => {
            return (
              <div className="col" key={index}>
                <Card
                  titulo={transaction.titulo}
                  carrera={transaction.carrera}
                  icono={transaction.icono}
                  url={transaction.url}
                />
              </div>
            );
          })}
        </div>
        <div className="row py-5">
          <div className="col">
            <h3>ESTAS SON TUS TRANSACCIONES:</h3>

            <TransactionTable data={arrTransactions}/>

          </div>
        </div>
      </div>
    </>
  );
}
