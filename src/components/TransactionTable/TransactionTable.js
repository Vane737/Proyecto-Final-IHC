export default function TransactionTable({data}){
  return(
    <table className="table">
      <thead className="custom-table">
        <tr>
          <th>Fecha</th>
          <th>Gestión</th>
          <th>Carrera	</th>
          <th>Descripción</th>
          <th>Vía</th>
        </tr>
      </thead>
      <tbody>
      {data.map((transaction, index)=>{
          return (
            <tr key={index}>
              <td>{transaction.fecha} {transaction.hora}</td>
              <td>{transaction.gestion}</td>
              <td>{transaction.carrera}</td>
              <td>{transaction.descripcion}</td>
              <td>{transaction.via}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

}