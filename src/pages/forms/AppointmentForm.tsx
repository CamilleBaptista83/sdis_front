import React from 'react'
import { ScheduleMeeting } from 'react-schedule-meeting';

const AppointmentForm = () => {


    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
        return {
            id,
            startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
            endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
        };
    });


    return (
        <div>
            <h1>Prise de rendez-vous</h1>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor="#3f5b85"
                eventDurationInMinutes={60}
                availableTimeslots={availableTimeslots}
                onStartTimeSelect={(e: any) => console.log(e)}
                format_startTimeFormatString="h:mm a"
                lang_confirmButtonText="Confirmer"
                lang_cancelButtonText="Annuler"
            />
        </div>
    )
}

export default AppointmentForm