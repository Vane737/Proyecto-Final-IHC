import Card from '../../components/Card/Card';

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
  return (
    <div className="container">
      <h1>232561145 - LIZZETH VALLEJO PEREZ</h1>
      <div className="row">
        {arrTransactions.map((transaction, index) => {
          return (
            <div className="col" key={index}>
              <Card titulo={transaction.titulo} 
              carrera={transaction.carrera}
              icono={transaction.icono}/>
            </div>
          );
        })}
      </div>
      <div className="row py-5">
        <h3>ESTAS SON TUS TRANSACCIONES:</h3>

      </div>
    </div>
  );
}
