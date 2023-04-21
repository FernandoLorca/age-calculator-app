import { useContext } from 'react';

import { InputHandlerContext } from '../../context/InputHandlerContextProvider';

import TextResult from './TextResult';

const Results = () => {
  const { yearResult, monthResult, dayResult } =
    useContext(InputHandlerContext);

  return (
    <div className="flex flex-col gap-2">
      <TextResult text="years" dataResult={yearResult} />
      <TextResult text="months" dataResult={monthResult} />
      <TextResult text="days" dataResult={dayResult} />
    </div>
  );
};

export default Results;
