import { useState } from 'react';

function App() {
  // manejadores de valores de los input
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

  // estados donde se guardaran los errores generados en los input
  const [dayError, setDayError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
  const [borderErrorColorDay, setBorderErrorColorDay] = useState('');
  const [borderErrorColorMonth, setBorderErrorColorMonth] = useState('');
  const [borderErrorColorYear, setBorderErrorColorYear] = useState('');
  const [labelErrorColorDay, setLabelErrorColorDay] = useState('');
  const [labelErrorColorMonth, setLabelErrorColorMonth] = useState('');
  const [labelErrorColorYear, setLabelErrorColorYear] = useState('');

  // funciones que validan errores en los input
  const maxDayPosible = 31;
  const maxMonthPosible = 12;
  const maxYearPosible = dateNow.getFullYear();

  const handleDayChange = e => {
    const value = e.target.value;

    if (value === '') {
      setDayError('This field is requiered');
      setBorderErrorColorDay('border-red-500 focus:ring focus:ring-red-500');
      setLabelErrorColorDay('text-red-500');
    } else if (value > maxDayPosible || value <= 0) {
      setDayError('Must be a valid day');
      setBorderErrorColorDay('border-red-500 focus:ring focus:ring-red-500');
      setLabelErrorColorDay('text-red-500');
    } else {
      setDayError('');
      setBorderErrorColorDay('focus:ring-black');
      setLabelErrorColorDay('text-slate-700');
    }

    setDay(value);
  };
  const handleMonthChange = e => {
    const value = e.target.value;

    if (value === '') {
      setMonthError('This field is requiered');
      setBorderErrorColorMonth('border-red-500 focus:ring focus:ring-red-500');
      setLabelErrorColorMonth('text-red-500');
    } else if (value > maxMonthPosible || value <= 0) {
      setMonthError('Must be a valid month');
      setBorderErrorColorMonth('border-red-500 focus:ring focus:ring-red-500');
      setLabelErrorColorMonth('text-red-500');
    } else {
      setMonthError('');
      setBorderErrorColorMonth('focus:ring-black');
      setLabelErrorColorMonth('text-slate-700');
    }

    setMonth(value);
  };
  const handleYearChange = e => {
    const value = e.target.value;

    if (value === '') {
      setYearError('This field is requiered');
      setBorderErrorColorYear('border-red-500 focus:ring focus:ring-red-500');
      setLabelErrorColorYear('text-red-500');
    } else if (value >= maxYearPosible || value <= 0) {
      setYearError('Must be in the past');
      setBorderErrorColorYear('border-red-500 focus:ring focus:ring-red-500');
      setLabelErrorColorYear('text-red-500');
    } else {
      setYearError('');
      setBorderErrorColorYear('focus:ring-black');
      setLabelErrorColorYear('text-slate-700');
    }

    setYear(value);
  };

  // función que calcula año, mes y día de vida
  const handleCalculateAge = () => {
    switch ((day, month, year)) {
      case day === '':
        setDayError('This field is requiered');
        setBorderErrorColorDay('border-red-500 focus:ring focus:ring-red-500');
        return setLabelErrorColorDay('text-red-500');
      case day > maxDayPosible || day <= 0:
        setDayError('Must be a valid day');
        setBorderErrorColorDay('border-red-500 focus:ring focus:ring-red-500');
        return setLabelErrorColorDay('text-red-500');
      case month === '':
        setMonthError('This field is requiered');
        setBorderErrorColorMonth(
          'border-red-500 focus:ring focus:ring-red-500'
        );
        return setLabelErrorColorMonth('text-red-500');
      case month > maxMonthPosible || month <= 0:
        setMonthError('Must be a valid month');
        setBorderErrorColorMonth(
          'border-red-500 focus:ring focus:ring-red-500'
        );
        return setLabelErrorColorMonth('text-red-500');
      case year === '':
        setYearError('This field is requiered');
        setBorderErrorColorYear('border-red-500 focus:ring focus:ring-red-500');
        return setLabelErrorColorYear('text-red-500');
      case year > maxYearPosible || year <= 0:
        setYearError('Must be in the past');
        setBorderErrorColorYear('border-red-500 focus:ring focus:ring-red-500');
        return setLabelErrorColorYear('text-red-500');
    }

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
            <p className={`pb-2 font-bold ${labelErrorColorDay}`}>DAY</p>
            <input
              type="number"
              className={`border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black focus:outline-none focus:ring focus:ring-black ${borderErrorColorDay}`}
              placeholder="DD"
              value={day}
              onChange={handleDayChange}
            />
            <p className="py-1 text-red-500">{dayError}</p>
          </div>
          <div className="text-xs">
            <p className={`pb-2 font-bold ${labelErrorColorMonth}`}>MONTH</p>
            <input
              type="number"
              className={`border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black focus:outline-none focus:ring focus:ring-black ${borderErrorColorMonth}`}
              placeholder="MM"
              value={month}
              onChange={handleMonthChange}
            />
            <p className="py-1 text-red-500">{monthError}</p>
          </div>
          <div className="text-xs">
            <p className={`pb-2 font-bold ${labelErrorColorYear}`}>YEAR</p>
            <input
              type="number"
              className={`border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black focus:outline-none focus:ring focus:ring-black ${borderErrorColorYear}`}
              placeholder="YYYY"
              value={year}
              onChange={handleYearChange}
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
