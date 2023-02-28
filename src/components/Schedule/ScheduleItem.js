import './Schedule.css';

export default function ScheduleItem({ materia, horario }) {

    return(
        <div className="custom-item text-center px-2" style={{ backgroundColor: `${materia.color}`, gridColumn: `${horario.col[0]}/${horario.col[1]}`, gridRow: `${horario.row[0]}/${horario.row[1]}`}}>
                <p className='custom-paragraph pt-2'>{materia.name} - {materia.group}</p>
                {/* Datos de la materia Nombre y grupo */}
        </div>
    );
}

