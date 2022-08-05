export default function Appointment({ name, age, email, kind, date, hour }) {
  return (
    <div className="p-4 mt-3 mb-6 flex flex-col items-center justify-center text-center rounded bg-gradient-to-r from-green-500 to-teal-400">
      <p className="p-2 text-lg font-semibold text-teal-900">
        {name}, {age} years old, your appointment will be on {date} at {hour}.
      </p>
      <p className="p-2 text-lg font-semibold text-teal-900">You booked for {kind}.</p>
      <p className="p-2 text-lg font-semibold text-teal-900">We will send your appointment to {email}.</p>
    </div>
  );
}
