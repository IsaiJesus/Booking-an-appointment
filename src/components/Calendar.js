import { useState } from "react";
import CalendarDays from "./CalendarDays";

export default function Calendar() {
  //language of calendar
  const locale = "es";

  //state to choose the month from the calendar
  const [getNumberMonth, setGetNumberMonth] = useState(0);

  //get current year
  const actualYear = new Date(2022, getNumberMonth, 1).getFullYear();

  //get months
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });

  //get weekdays
  const weekdays = [...Array(7).keys()];
  const intlWeekday = new Intl.DateTimeFormat(locale, { weekday: "long" });

  //get the month that you have chosen and converts to capital letter
  const monthName = intl.format(new Date(actualYear, getNumberMonth));
  const monthNameCapitalLetter =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);

  //get the numbers of days from every month
  const nextMonthIndex = getNumberMonth + 1;
  const daysOfMonth = new Date(2022, nextMonthIndex, 0).getDate();
  const days = [...Array(daysOfMonth).keys()];

  //get the day which starts the month
  const startsOn = new Date(2022, getNumberMonth, 1).getDay();

  const randomNumber = () => {
    const randomNumber = Math.floor(
      Math.random() * (Math.floor(5) - Math.ceil(1)) + Math.ceil(1)
    );
    return randomNumber;
  };

  const convertNumberToColor = () => {
    switch (randomNumber()) {
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
  };

  return (
    <div className="p-2 my-3 rounded outline outline-cyan-500 flex flex-col items-center justify-center">
      <p className="p-2 m-1 text-xl text-sky-700 font-semibold">
        Choose the date:
      </p>
      <div className="p-2 md:flex md:items-center">
        <div className="m-1 text-center rounded outline outline-sky-600">
          <div className="grid grid-cols-3 items-center border-b-2 border-sky-600">
            <button
              onClick={() => setGetNumberMonth(getNumberMonth - 1)}
              className={
                getNumberMonth <= 0
                  ? "px-1 h-min w-min justify-self-center rounded bg-sky-500 hover:bg-sky-600 text-white shadow-md cursor-not-allowed"
                  : "px-1 h-min w-min justify-self-center rounded bg-sky-500 hover:bg-sky-600 text-white shadow-md"
              }
              disabled={getNumberMonth <= 0 ? true : false}
            >
              ←
            </button>
            <h2 className="p-2 text-base font-bold">
              {monthNameCapitalLetter} {actualYear}
            </h2>
            <button
              onClick={() => setGetNumberMonth(getNumberMonth + 1)}
              className="px-1 h-min w-min justify-self-center rounded bg-sky-500 hover:bg-sky-600 text-white shadow-md"
            >
              →
            </button>
          </div>
          <ol className="grid grid-cols-7">
            {weekdays.map((weekdayIndex, index) => (
              <li key={index} className="p-1 font-semibold">
                {intlWeekday
                  .format(new Date(2022, 4, weekdayIndex + 1))
                  .charAt(0)
                  .toUpperCase() +
                  intlWeekday
                    .format(new Date(2022, 4, weekdayIndex + 1))
                    .slice(1)}
              </li>
            ))}

            {days.map((day) =>
              day === 0 ? (
                <CalendarDays
                  key={day}
                  day={day + 1}
                  startsOn={startsOn + 1}
                  monthName={monthNameCapitalLetter}
                  availability={convertNumberToColor()}
                />
              ) : (
                <CalendarDays
                  key={day}
                  day={day + 1}
                  monthName={monthNameCapitalLetter}
                  availability={convertNumberToColor()}
                />
              )
            )}
          </ol>
        </div>
        <table className="m-1 rounded outline outline-sky-600">
          <caption className="border font-bold p-2">Availability</caption>
          <tbody>
            <tr>
              <td className="border-2 border-white bg-green-600 opacity-90 w-12"></td>
              <td className="py-1 px-2 font-semibold">High availability</td>
            </tr>
            <tr>
              <td className="border-2 border-white bg-yellow-400 opacity-90 w-12"></td>
              <td className="py-1 px-2 font-semibold">Low availability</td>
            </tr>
            <tr>
              <td className="border-2 border-white bg-red-600 opacity-90 w-12"></td>
              <td className="py-1 px-2 font-semibold">Unavailable</td>
            </tr>
            <tr>
              <td className="border-2 border-white bg-gray-400 opacity-90 w-12"></td>
              <td className="py-1 px-2 font-semibold">Day without service</td>
            </tr>
          </tbody>
        </table>
      </div>
      <input
        type="time"
        defaultValue="07:00"
        min="07:00"
        max="18:00"
        className="px-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
    </div>
  );
}
