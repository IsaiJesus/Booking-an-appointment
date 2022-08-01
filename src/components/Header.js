export default function Header() {
  return (
    <header className="mb-4 rounded bg-gradient-to-r from-sky-600 to-cyan-500 p-2 w-full flex flex-col">
      <h1 className="p-3 my-2 text-3xl md:text-5xl text-sky-900 font-extrabold">
        Book an appointment with the dentist.
      </h1>
      <p className="p-3 text-lg md:text-xl text-sky-800 font-semibold">
        You can choose your own appointment type, The month, the day and the
        hour and we will book the appointment.
      </p>
    </header>
  );
}
