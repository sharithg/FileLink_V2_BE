import React, { Fragment } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventClickArg } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Schedule: React.FC = () => {
  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo.event.start);
  };
  return (
    <Fragment>
      <Grid
        container
        // alignItems="flex-start"
        justify="space-between"
        direction="row"
      >
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Schedule
          </Typography>
        </Grid>
      </Grid>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "today prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={[]}
        eventClick={handleEventClick}
        slotMinTime="07:00:00"
      />
    </Fragment>
  );
};

export default Schedule;
