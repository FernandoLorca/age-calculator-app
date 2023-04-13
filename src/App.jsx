import { useState } from 'react';

function App() {
  // manejadores de estados de los input
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // manejador de estados del resultado del calculo de la edad
  const [dayResult, setDayResult] = useState('');
  const [monthResult, setMonthResult] = useState('');
  const [yearResult, setYearResult] = useState('');

  // creación del objeto date que nos trae las fechas actuales
  const dateNow = new Date();
  const dayNow = dateNow.getDate();
  const monthNow = dateNow.getMonth() + 1;
  const yearNow = dateNow.getFullYear();

  // creacion del objeto date en donde alojamos los valores ingresados por el cliente
  const dateBirth = new Date(year, month - 1, day);
  const dayBirth = dateBirth.getDate();
  const monthBirth = dateBirth.getMonth() + 1;
  const yearBirth = dateBirth.getFullYear();

  // estados que validarán que los campos tengan datos en los input
  const [dayError, setdayError] = useState('');
  const [monthError, setmonthError] = useState('');
  const [yearError, setyearError] = useState('');
  const [borderInputError, setborderInputError] = useState('border-slate-200');

  // función que calcula año, mes y día de vida
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
          <div className="text-xs">
            <p className="pb-2 font-bold">DAY</p>
            <input
              type="number"
              className={`border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black ${borderInputError}`}
              placeholder="DD"
            />
            <p className="py-1 text-red-500">{dayError}</p>
          </div>
          <div className="text-xs">
            <p className="pb-2 font-bold">MONTH</p>
            <input
              type="number"
              className={`border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black ${borderInputError}`}
              placeholder="MM"
            />
            <p className="py-1 text-red-500">{monthError}</p>
          </div>
          <div className="text-xs">
            <p className="pb-2 font-bold">YEAR</p>
            <input
              type="number"
              className={`border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black ${borderInputError}`}
              placeholder="YYYY"
            />
            <p className="py-1 text-red-500">{yearError}</p>
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
