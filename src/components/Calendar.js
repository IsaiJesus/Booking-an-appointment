import { useEffect, useState } from "react";
import CalendarDay from "./CalendarDay";

const Calendar = ({ handleChange }) => {

  //read the screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.screen.width <= 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  function detectWindowSize() {
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  //to decide if the name of weekdays are short or long
  const weekdaySize = () => {
    if (isMobile) {
      return "short";
    } else {
      return "long";
    }
  }

  //language of calendar
  const locale = "en";

  //state to choose the month from the calendar
  const [getNumberMonth, setGetNumberMonth] = useState(0);

  //get current year
  const actualYear = new Date(2022, getNumberMonth, 1).getFullYear();

  //get months
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });

  //get weekdays
  const weekdays = [...Array(7).keys()];
  const intlWeekday = new Intl.DateTimeFormat(locale, {
    weekday: weekdaySize(),
  });

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

  return (
    <div className="p-2 my-3 rounded outline outline-cyan-500 flex flex-col items-center justify-center">
      <p className="p-2 m-1 text-xl text-sky-700 font-semibold">
        Choose the date and time:
      </p>
      <div className="p-2 flex flex-col lg:flex-row items-center">
        <div className="m-1 text-center rounded outline outline-sky-600">
          <div className="grid grid-cols-3 items-center border-b-2 border-sky-600">
            <button
              type="button"
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
              type="button"
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
                <CalendarDay
                  key={day}
                  day={day + 1}
                  startsOn={startsOn + 1}
                  year={actualYear}
                  month={monthNameCapitalLetter}
                  handleChange={handleChange}
                />
              ) : (
                <CalendarDay
                  key={day}
                  day={day + 1}
                  year={actualYear}
                  month={monthNameCapitalLetter}
                  handleChange={handleChange}
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
        name="hour"
        onChange={handleChange}
        defaultValue="07:00"
        min="07:00"
        max="18:00"
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
    </div>
  );
};

export default Calendar;
