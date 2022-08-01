const CalendarDays = ({day, startsOn, monthName, availability}) => {


  return (
    <li className={
      startsOn
      ? `py-1 col-start-${startsOn} bg-${availability} opacity-90 border border-white`
      : `py-1 bg-${availability} opacity-90 border border-white`
    }>
      <label htmlFor={day}>{day}</label>
      <input
        type="radio"
        name={monthName}
        value={day }
        id={day}
        disabled={
          availability === "gray-400" || availability === "red-600"
          ? true
          : false
        }
      />
    </li>
  )
}

export default CalendarDays;