import { useContext } from 'react';

import { InputHandlerContext } from './context/InputHandlerContextProvider';

import SearchComponent from './components/SearchComponent/SearchComponent';
import CalculateAge from './components/CalculateAgeComponent/CalculateAge';

function App() {
  const { dayResult, monthResult, yearResult, handleCalculateAge } =
    useContext(InputHandlerContext);

  return (
    <div className="flex justify-center items-center h-screen text-slate-700">
      <div className="bg-white p-10 card">
        <SearchComponent />
        <CalculateAge handleCalculateAge={handleCalculateAge} />
        <div className="flex flex-col gap-2">
          <p className="flex text-black text-7xl font-bold italic">
            <span
              className={`text-purple-800 ${yearResult !== '' ? 'hidden' : ''}`}
            >
              --
            </span>
            <span
              className={`text-purple-800 ${yearResult !== '' ? 'block' : ''}`}
            >
              {yearResult}
            </span>
            years
          </p>
          <p className="flex text-black text-7xl font-bold italic">
            <span
              className={`text-purple-800 ${
                monthResult !== '' ? 'hidden' : ''
              }`}
            >
              --
            </span>
            <span
              className={`text-purple-800 ${dayResult !== '' ? 'block' : ''}`}
            >
              {monthResult}
            </span>
            months
          </p>
          <p className="flex text-black text-7xl font-bold italic">
            <span
              className={`text-purple-800 ${dayResult !== '' ? 'hidden' : ''}`}
            >
              --
            </span>
            <span
              className={`text-purple-800 ${dayResult !== '' ? 'block' : ''}`}
            >
              {dayResult}
            </span>
            days
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
