import { useContext } from 'react';

import { InputHandlerContext } from '../../context/InputHandlerContextProvider';
import Input from './Input';

const SearchComponent = () => {
  const {
    day,
    month,
    year,
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
  } = useContext(InputHandlerContext);
  return (
    <div className="flex gap-5">
      <div className="text-xs">
        <Input
          text="DAY"
          placeholder="DD"
          value={day}
          onChange={handleDayChange}
          labelErrorColor={labelErrorColorDay}
          borderErrorColor={borderErrorColorDay}
          error={dayError}
        />
      </div>
      <div className="text-xs">
        <Input
          text="MONTH"
          placeholder="MM"
          value={month}
          onChange={handleMonthChange}
          labelErrorColor={labelErrorColorMonth}
          borderErrorColor={borderErrorColorMonth}
          error={monthError}
        />
      </div>
      <div className="text-xs">
        <Input
          text="YEAR"
          placeholder="YYYY"
          value={year}
          onChange={handleYearChange}
          labelErrorColor={labelErrorColorYear}
          borderErrorColor={borderErrorColorYear}
          error={yearError}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
