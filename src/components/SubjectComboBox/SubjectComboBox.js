import { useState } from "react";
import './SubjectComboBox.css';

export default function SubjectComboBox({ subject, grupos }) {
  const [arrowDeploy, setArrowDeploy] = useState(false);

  

  // const grupos = { abrev: 'calculo', algo: 'mat101'}; 
  
  return (
    <div className="">
      <div className="mb-3 container-select">
        <div className="d-flex justify-content-between">
          <h5>{subject.nombre.toUpperCase() + ' - ' + subject.sigla.toUpperCase()}</h5>
          <button className="button-style" onClick={() => setArrowDeploy(!arrowDeploy)}>{arrowDeploy ? <i class="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}</button>
        </div>
        {/* Aqui va la tabla */}
        
      </div>
    </div>
  );
}
