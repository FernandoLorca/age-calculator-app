const CalculateAge = ({ handleCalculateAge }) => {
  return (
    <div className="flex items-center my-5">
      <div className="h-1 bg-slate-100 w-full"></div>
      <div
        className="bg-purple-800 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-black"
        onClick={() => handleCalculateAge()}
      >
        <img src="./icon-arrow.svg" alt="" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default CalculateAge;
