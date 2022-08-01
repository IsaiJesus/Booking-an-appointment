export default function PersonalInfo() {
  return (
    <div className="p-2 my-3 rounded outline outline-cyan-500 flex flex-col items-center justify-center">
      <p className="p-2 m-1 text-xl text-sky-700 font-semibold">
        Type your full name, age and email:
      </p>
      <input
        type="text"
        placeholder="Name"
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
      <input
        type="number"
        placeholder="Age"
        min={0}
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
    </div>
  );
}
