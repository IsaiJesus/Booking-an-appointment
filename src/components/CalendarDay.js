import { useMemo } from "react";

const CalendarDay = ({day, startsOn, year, month, handleChange}) => {

  //choose a number between 1 and 4
  const randomNumber = useMemo(() => {
    const randomNumber = Math.floor(
      Math.random() * (Math.floor(5) - Math.ceil(1)) + Math.ceil(1)
    );
    return randomNumber;
  }, []);

  //choose a color for each random number
  const convertNumberToColor = () => {
    switch (randomNumber) {
      case 1:
        return "green-600";
      case 2:
        return "yellow-400";
      case 3:
        return "red-600";
      case 4:
        return "gray-400";
      default:
        return "gray-400";
    }
  }

  return (
    <li className={
      startsOn
      ? `py-1 col-start-${startsOn} bg-${convertNumberToColor()} opacity-90 border border-white`
      : `py-1 bg-${convertNumberToColor()} opacity-90 border border-white`
    }>
      <label htmlFor={day}>{day}</label>
      <input
        type="radio"
        name="date"
        required
        onChange={handleChange}
        value={`${month} ${day}, ${year}`}
        id={day}
        disabled={
          convertNumberToColor() === "gray-400" || convertNumberToColor() === "red-600"
          ? true
          : false
        }
      />
    </li>
  )
}

export default CalendarDay;