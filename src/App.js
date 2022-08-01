import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Calendar from "./components/Calendar";
import Type from "./components/Type";
import BookButton from "./components/BookButton";

function App() {
  return (
    <div className="p-4 flex flex-col justify-center">
      <Header/>
      <form onSubmit={(e) => {e.preventDefault()}} className="m-3 flex itmes-center justify-center flex-col">
        <h2 className="rounded bg-gradient-to-r from-cyan-500 to-sky-600 p-4 text-2xl text-sky-800 font-bold">Complete the following form to book your appointment</h2>
        <PersonalInfo/>
        <Type/>
        <Calendar/>
        <BookButton/>
      </form>
    </div>
  );
}

export default App;
