export default function KindAppointment({ handleChange }) {
  return (
    <div className="p-2 my-3 rounded outline outline-cyan-500 flex flex-col items-center justify-center">
      <p className="p-2 m-1 text-xl text-sky-700 font-semibold">
        What kind of appointment do you want?
      </p>
      <select
        name="kind"
        onChange={handleChange}
        required
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      >
        <option>Select the option</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Cavities">Cavities</option>
        <option value="Brackets">Brackets</option>
        <option value="Teeth whitening">Teeth whitening</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}
