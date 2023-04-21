const TextResult = ({ text, dataResult }) => {
  return (
    <p className="flex text-black text-7xl font-bold italic">
      <span className={`text-purple-800 ${dataResult !== '' ? 'hidden' : ''}`}>
        --
      </span>
      <span className={`text-purple-800 ${dataResult !== '' ? 'block' : ''}`}>
        {dataResult}
      </span>
      {text}
    </p>
  );
};

export default TextResult;
