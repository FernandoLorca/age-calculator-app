import { useState } from 'react';

function App() {
  // manejadores de estados de los input
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = e => setDay(e.target.value);
  const handleMonthChange = e => setMonth(e.target.value);
  const handleYearChange = e => setYear(e.target.value);

  // manejador de estados del resultado del calculo de la edad
  const [dayResult, setDayResult] = useState('');
  const [monthResult, setMonthResult] = useState('');
  const [yearResult, setYearResult] = useState('');

  const dateNow = new Date();
  const dayNow = dateNow.getDate();
  const monthNow = dateNow.getMonth() + 1;
  const yearNow = dateNow.getFullYear();

  const dateBirth = new Date(year, month - 1, day);
  const dayBirth = dateBirth.getDate();
  const monthBirth = dateBirth.getMonth() + 1;
  const yearBirth = dateBirth.getFullYear();

  const handleCalculateAge = () => {
    setDayResult(dayBirth - monthNow);
    setMonthResult(monthBirth - monthNow);

    if (monthNow < monthBirth) setYearResult(yearNow - yearBirth - 1);
    if (monthNow === monthBirth && dayNow < dayBirth)
      setYearResult(yearNow - yearBirth - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen text-slate-700">
      <div className="bg-white p-10 card">
        <div className="flex gap-5">
          <div className="uppercase text-xs">
            <p className="pb-2 font-bold">Day</p>
            <input
              type="number"
              className="border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black"
              placeholder="DD"
              value={day}
              onChange={handleDayChange}
            />
          </div>
          <div className="uppercase text-xs">
            <p className="pb-2 font-bold">Month</p>
            <input
              type="number"
              className="border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black"
              placeholder="MM"
              value={month}
              onChange={handleMonthChange}
            />
          </div>
          <div className="uppercase text-xs">
            <p className="pb-2 font-bold">Year</p>
            <input
              type="number"
              className="border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black"
              placeholder="YYYY"
              value={year}
              onChange={handleYearChange}
            />
          </div>
        </div>
        <div className="flex items-center my-5">
          <div className="h-1 bg-slate-100 w-full"></div>
          <div
            className="bg-purple-800 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-black"
            onClick={() => handleCalculateAge()}
          >
            <img src="./icon-arrow.svg" alt="" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-black text-7xl font-bold italic">
            <span className="text-purple-800">
              {year === '' ? '--' : yearResult}
            </span>
            years
          </p>
          <p className="text-black text-7xl font-bold italic">
            <span className="text-purple-800">
              {month === '' ? '--' : monthResult}
            </span>
            months
          </p>
          <p className="text-black text-7xl font-bold italic">
            <span className="text-purple-800">
              {day === '' ? '--' : dayResult}
            </span>
            days
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
