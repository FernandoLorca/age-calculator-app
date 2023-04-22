import { createContext, useState } from 'react';

export const AgeCalculatorContext = createContext();

const AgeCalculatorContextProvider = ({ children }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

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

  const maxDayPosible = 31;
  const maxMonthPosible = 12;
  const maxYearPosible = dateNow.getFullYear();
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

  console.log((yearNow - 1 - yearBirth) * 12);

  return (
    <AgeCalculatorContext.Provider
      value={{
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        dayResult,
        monthResult,
        yearResult,
        maxDayPosible,
        maxMonthPosible,
        maxYearPosible,
        handleCalculateAge,
      }}
    >
      {children}
    </AgeCalculatorContext.Provider>
  );
};

export default AgeCalculatorContextProvider;
