export default function Type() {
  return (
    <div className="p-2 my-3 rounded outline outline-cyan-500 flex flex-col items-center justify-center">
      <p className="p-2 m-1 text-xl text-sky-700 font-semibold">
        What kind of appointment do you want?
      </p>
      <select className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72">
        <option value="">Select the option</option>
        <option value="">Cleaning</option>
        <option value="">Brackets</option>
        <option value="">Teeth whitening</option>
      </select>
      <p className="text-xl text-sky-700 font-medium">or</p>
      <input
        type="text"
        placeholder="Other"
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
    </div>
  );
}
