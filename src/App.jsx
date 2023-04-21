import SearchComponent from './components/SearchComponent/SearchComponent';
import CalculateAge from './components/CalculateAgeComponent/CalculateAge';
import Results from './components/ResultsComponent/Results';

function App() {
  return (
    <div className="flex justify-center items-center h-screen text-slate-700">
      <div className="bg-white p-10 card">
        <SearchComponent />
        <CalculateAge />
        <Results />
      </div>
    </div>
  );
}

export default App;
