import Check from '../Check/Check';
import './SubjectTable.css'
export default function SubjectTable() {
  const arrSubjectGroups = [
    {
      grupo: 'F1',
      docente: 'Avendaño Gonzales Eudal',
      horario: 'Mar 6:15 - 8:30, Jue 6:15 - 8:30',
      cupos: '20',
      conflictos: 'Ninguno'
    },
    {
      grupo: 'H',
      docente: 'Tejerina Guerra Julio',
      horario: 'Mie 7:00 - 9:15, Vie 7:00 - 9:15',
      cupos: '10',
      conflictos: 'Ninguno'
    },
    {
      grupo: 'SB',
      docente: 'Justiniano Vaca Juan Tomas',
      horario: 'Lun 8:30 - 10:00, Mie 8:30 - 10:00, Vie 8:30 - 10:00',
      cupos: '0',
      conflictos: 'Ninguno'
    },
    {
      grupo: 'SF',
      docente: 'Morales Mendez Magaly',
      horario: 'Mar 9:15 - 11:30, Jue 9:15 - 11:30',
      cupos: '10',
      conflictos: 'Ninguno'
    },
    
  ];
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
        {arrSubjectGroups.map((group, index)=>{
          return (
            <tr>
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
