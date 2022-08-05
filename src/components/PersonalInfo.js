export default function PersonalInfo({handleChange}) {
  return (
    <div className="p-2 my-3 rounded outline outline-cyan-500 flex flex-col items-center justify-center">
      <p className="p-2 m-1 text-xl text-sky-700 font-semibold">
        Type your full name, age and email:
      </p>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Name"
        required
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
      <input
        type="number"
        name="age"
        onChange={handleChange}
        placeholder="Age"
        min={0}
        required
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required
        className="p-2 m-2 rounded outline outline-2 outline-sky-600 w-72"
      />
    </div>
  );
}
