import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Calendar from "./components/Calendar";
import KindAppointment from "./components/KindAppointment";
import BookButton from "./components/BookButton";
import { useState } from "react";
import Notice from "./components/Notice";
import Appointment from "./components/Appointment";

const initialState = {
  name: "",
  age: "",
  email: "",
  kind: "",
  date: "January 1, 2022",
  hour: "07:00",
};

function App() {
  const [form, setForm] = useState(initialState);
  const [results, setResults] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setResults(form);
    e.preventDefault();
  };

  return (
    <div className="p-4 flex flex-col justify-center">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="m-3 flex itmes-center justify-center flex-col"
      >
        <h2 className="rounded bg-gradient-to-r from-cyan-500 to-sky-600 p-4 text-2xl text-sky-800 font-bold">
          Complete the following form to book your appointment
        </h2>
        <PersonalInfo handleChange={handleChange} />
        <KindAppointment handleChange={handleChange} />
        <Calendar handleChange={handleChange} />
        <BookButton />
      </form>
      <div>
        {results ? (
          <Appointment
            name={results.name}
            age={results.age}
            email={results.email}
            kind={results.kind}
            date={results.date}
            hour={results.hour}
          />
        ) : (
          <Notice />
        )}
      </div>
    </div>
  );
}

export default App;
