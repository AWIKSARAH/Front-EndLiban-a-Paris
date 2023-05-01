import React from "react";

function ScheduleDay({ day, schedule, setSchedule }) {
  const handleFromTimeChange = (e) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        fromTime: e.target.value,
        fromTo: `${e.target.value}-${schedule[day].toTime}`,
      },
    });
    console.log(schedule);
  };

  const handleToTimeChange = (e) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        toTime: e.target.value,
        fromTo: `${schedule[day].fromTime}-${e.target.value}`,
      },
    });
  };

  return (
    <div key={day}>
      {day.charAt(0).toUpperCase() + day.slice(1)}:
      <label className="days--of_week">
        <select
          value={schedule[day].status}
          onChange={(e) =>
            setSchedule({
              ...schedule,
              [day]: { ...schedule[day], status: e.target.value },
            })
          }
        >
          <option value="closed">Closed</option>
          <option value="open">Open</option>
        </select>
        <div >
        <input
          type="time"
          placeholder="From"
          value={schedule[day].fromTime}
          onChange={handleFromTimeChange}
          disabled={schedule[day].status === "closed"}
        />
        <input
          type="time"
          placeholder="To"
          value={schedule[day].toTime}
          onChange={handleToTimeChange}
          disabled={schedule[day].status === "closed"}
        />
        </div>
      </label>
    </div>
  );
}

export default ScheduleDay;
