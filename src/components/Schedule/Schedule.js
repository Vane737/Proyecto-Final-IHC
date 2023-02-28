import { useState } from 'react';
import './Schedule.css';
import ScheduleHour from './ScheduleHour';
import ScheduleItem from './ScheduleItem';

export default function Schedule({ arrMaterias, arrHorarios }) {

    const addMins = (() => {

    })

  return (
    <div className=" container-schedule">
      {arrMaterias.map((materia, index) => {
        return (
          <>
          
            {arrHorarios.map((horario, index) => {
              return (
                <>
                  {materia.id === horario.idmat ? (
                    <>
                        <ScheduleItem materia={materia} horario={horario}/>
                        {
                            horario.periodo.map((rows, index) => {
                                return (
                                    <>
                                        <ScheduleHour horaI={rows.horaI} horaF={rows.horaF} rows={rows.row}/>
                                    </>
                                );
                            })
                        } 
                    </>
                      ) : (
                    ''
                  )}
                </>
              );
            })}
            {/* <ScheduleItem /> */}
          </>
        );
      })}
    </div>
  );
}
