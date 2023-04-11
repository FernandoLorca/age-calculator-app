function App() {
  return (
    <div className="flex justify-center items-center h-screen text-slate-700">
      <div className="bg-white p-10 card">
        <div className="flex gap-5">
          <div className="uppercase text-xs">
            <p className="pb-2 font-bold">Day</p>
            <input
              type="number"
              className="border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black"
            />
          </div>
          <div className="uppercase text-xs">
            <p className="pb-2 font-bold">Month</p>
            <input
              type="number"
              className="border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black"
            />
          </div>
          <div className="uppercase text-xs">
            <p className="pb-2 font-bold">Year</p>
            <input
              type="number"
              className="border-2 rounded h-8 pl-5 py-5 text-lg font-bold text-black hover:border-black"
            />
          </div>
        </div>
        <div className="flex items-center my-5">
          <div className="h-1 bg-slate-100 w-full"></div>
          <div className="bg-purple-800 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-black">
            <img src="./icon-arrow.svg" alt="" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-black text-7xl font-bold italic">
            <span className="text-purple-800">38</span>years
          </p>
          <p className="text-black text-7xl font-bold italic">
            <span className="text-purple-800">3</span>months
          </p>
          <p className="text-black text-7xl font-bold italic">
            <span className="text-purple-800">26</span>days
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
