import SearchComponent from './components/SearchComponent/SearchComponent';
import CalculateAge from './components/CalculateAgeComponent/CalculateAge';
import Results from './components/ResultsComponent/Results';

function App() {
  return (
    <div className="flex justify-center lg:items-center lg:h-screen text-slate-700 py-10">
      <div className="bg-white p-10 card md:w-10/12 lg:max-w-6xl">
        <SearchComponent />
        <CalculateAge />
        <Results />
      </div>
    </div>
  );
}

export default App;
