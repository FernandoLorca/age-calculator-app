const Input = ({
  text,
  placeholder,
  value,
  onChange,
  error,
  labelErrorColor,
  borderErrorColor,
}) => {
  return (
    <>
      <p className={`pb-2 font-bold ${labelErrorColor}`}>{text}</p>
      <input
        type="number"
        className={`border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black focus:outline-none focus:ring focus:ring-black ${borderErrorColor}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="py-1 text-red-500">{error}</p>
    </>
  );
};

export default Input;
