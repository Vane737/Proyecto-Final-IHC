import './Schedule.css';

export default function ScheduleHour({ horaI, horaF, rows }) {


    
    return(
        <div className="custom-item-hour " style={{gridColumn: `${1}/${2}`, gridRow: `${rows[0]}/${rows[1]}`}}>
                <p className='custom-paragraph'>{horaI} - {horaF}</p>
                {/* Datos de la materia Nombre y grupo */}
        </div>
    );
}

