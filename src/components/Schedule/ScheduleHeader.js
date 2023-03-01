import './Schedule.css'

export default function ScheduleHeader({ name , className}) {

    return (
        <div className="custom-sched-header">
            <h6>{name}</h6>
        </div>
    );
}


