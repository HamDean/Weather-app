import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchCountryInput from "./components/SearchCountryInput";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchCountryInput />
      </main>
    </>
  );
};
export default App;
