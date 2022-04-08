import React, {useRef, useState} from 'react';
import './App.css';
import CalendarStyled from "./views/application/calendar/CalendarStyled";
import SubCard from "./views/ui-component/cards/SubCard";
import { FormikValues } from 'formik';
import FullCalendar from '@fullcalendar/react';
import Toolbar from "./views/application/calendar/Toolbar";
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';
function App() {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState( 'listWeek');
    const [events, setEvents] = useState<FormikValues[]>([]);
    const calendarRef = useRef<FullCalendar>(null);

    // calendar toolbar events
    const handleDateToday = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.today();
            setDate(calendarApi.getDate());
        }
    };

    const handleViewChange = (newView: string) => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.changeView(newView);
            setView(newView);
        }
    };

    const handleDatePrev = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.prev();
            setDate(calendarApi.getDate());
        }
    };

    const handleDateNext = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.next();
            setDate(calendarApi.getDate());
        }
    };


    return (
    <div className="App">
        {/*<Calendar/>*/}
        <CalendarStyled>
            <Toolbar
                date={date}
                view={view}
                onClickNext={handleDateNext}
                onClickPrev={handleDatePrev}
                onClickToday={handleDateToday}
                onChangeView={handleViewChange}
            />
            <SubCard>
                <FullCalendar
                    weekends
                    editable
                    droppable
                    selectable
                    events={events}
                    rerenderDelay={10}
                    initialDate={date}
                    initialView={view}
                    ref={calendarRef}
                    dayMaxEventRows={3}
                    eventDisplay="block"
                    headerToolbar={false}
                    allDayMaintainDuration
                    eventResizableFromStart
                    select={() => console.log(1)}
                    eventDrop={() => console.log(1)}
                    eventClick={() => console.log(1)}
                    eventResize={() => console.log(1)}
                    height={'auto'}
                    plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}

                />
            </SubCard>
        </CalendarStyled>
    </div>
  );
}

export default App;
