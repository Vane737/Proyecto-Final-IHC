import { useState } from "react";
import Check from "../Check/Check";
import './SubjectComboBox.css';

export default function SubjectComboBox({ subject, groups}) {
  const [arrowDeploy, setArrowDeploy] = useState(false);
  
  return (
    <div className="">
      <div className="mb-3 container-select  p-3 mb-5 rounded">
        <div className="d-flex justify-content-between">
          <h5>{subject.nombre.toUpperCase() + ' - ' + subject.sigla.toUpperCase()}</h5>
          <button className="button-style" onClick={() => setArrowDeploy(!arrowDeploy)}>{arrowDeploy ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}</button>
        </div>
      <table className={arrowDeploy ? 'table' : 'invissible'}>
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
      {groups.map((group, index)=>{
          return (
          <>
            {subject.id === group.idmat? 
            <tr key={index}>
              <td>{<Check/>}</td>
              <td>{group.grupo}</td>
              <td>{group.docente}</td>
              <td>{group.horario}</td>
              <td>{group.cupos}</td>
              <td>{group.conflictos}</td>
            </tr> : ''}
          </>
          );
        })}
      </tbody>
    </table>

        {/* Aqui va la tabla */}
          {/* <button className={arrowDeploy ? '' : 'invissible'}>{arrowDeploy ? materias[0].nombre + '-' + materias[0].sigla : ''}</button> */}
      </div>
    </div>
  );
}
