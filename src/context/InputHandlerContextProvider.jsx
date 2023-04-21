import { AgeCalculatorContext } from './ageCalculatorContextProvider';

import { createContext, useContext, useState } from 'react';

export const InputHandlerContext = createContext();

const InputHandlerContextProvider = ({ children }) => {
  const {
    day,
    month,
    year,
    setDay,
    setMonth,
    setYear,
    dayResult,
    monthResult,
    yearResult,
    maxDayPosible,
    maxMonthPosible,
    maxYearPosible,
    handleCalculateAge,
  } = useContext(AgeCalculatorContext);

  const [dayError, setDayError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
  const [borderErrorColorDay, setBorderErrorColorDay] = useState('');
  const [borderErrorColorMonth, setBorderErrorColorMonth] = useState('');
  const [borderErrorColorYear, setBorderErrorColorYear] = useState('');
  const [labelErrorColorDay, setLabelErrorColorDay] = useState('');
  const [labelErrorColorMonth, setLabelErrorColorMonth] = useState('');
  const [labelErrorColorYear, setLabelErrorColorYear] = useState('');

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

  return (
    <InputHandlerContext.Provider
      value={{
        day,
        month,
        year,
        dayResult,
        monthResult,
        yearResult,
        dayError,
        monthError,
        yearError,
        borderErrorColorDay,
        borderErrorColorMonth,
        borderErrorColorYear,
        labelErrorColorDay,
        labelErrorColorMonth,
        labelErrorColorYear,
        handleDayChange,
        handleMonthChange,
        handleYearChange,
        handleCalculateAge,
      }}
    >
      {children}
    </InputHandlerContext.Provider>
  );
};

export default InputHandlerContextProvider;
