import Check from '../Check/Check';
import './SubjectTable.css'
export default function SubjectTableP({data}) {
  return (
    <table className="table">
      <thead className="custom-table">
        <tr>
          <th></th>
          <th>Grupo</th>
          <th>Docente</th>
          <th>Horario</th>
          <th>Cupos</th>
          <th>Conflictos</th>
        </tr>
      </thead>
      <tbody>
      {data.map((group, index)=>{
          return (
            <tr key={index}>
              <td>{<Check/>}</td>
              <td>{group.grupo}</td>
              <td>{group.docente}</td>
              <td>{group.horario}</td>
              <td>{group.cupos}</td>
              <td>{group.conflictos}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
