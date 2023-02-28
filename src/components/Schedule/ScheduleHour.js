import './Schedule.css';

export default function ScheduleHour({ props, rows }) {


    
    return(
        <div className="custom-item-hour " style={{gridColumn: `${1}/${2}`, gridRow: `${rows[0]}/${rows[1]}`}}>
                <p className='custom-paragraph'>{props.horaI} - {props.horaF}</p>
                {/* Datos de la materia Nombre y grupo */}
        </div>
    );
}

