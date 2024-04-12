import MarineTable from "./MarineTable";

const MarineLife = () => {
  return (
    <div className="py-5">
      <div className="pb-3">
        <h6 className="text-2xl md-text-3xl font-semibold tracking-tight">
          Marine Life
        </h6>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4 w-full">
          <button className="bg-slate-300 text-black py-2 px-3  rounded-[1.375rem] hover:bg-blue-500 hover:text-white w-fit md:w-auto">
            All
          </button>
          <button className="bg-slate-300 text-black py-2 px-3 rounded-[1.375rem] hover:bg-blue-500 hover:text-white w-fit md:w-auto">
            Sharks
          </button>
          <button className="bg-slate-300 text-black py-2 px-3 rounded-[1.375rem] hover:bg-blue-500 hover:text-white w-fit md:w-auto">
            Whales
          </button>
          <button className="bg-slate-300 text-black py-2 px-3 rounded-[1.375rem] hover:bg-blue-500 hover:text-white w-fit md:w-auto">
            Turtles
          </button>
          <button className="bg-slate-300 text-black py-2 px-3 rounded-[1.375rem] hover:bg-blue-500 hover:text-white w-fit md:w-auto">
            Others
          </button>
        </div>
        <div className="flex w-full flex-wrap gap-4 items-start">
          <label className="inline-flex items-center">
            <div className="bg-blue-500 p-2 rounded-full"></div>
            <span className="ml-2">Most likely sightings</span>
          </label>
          <label className="inline-flex items-center">
            <div className="bg-white border border-blue-500 p-1.5 rounded-full"></div>
            <span className="ml-2">Possible sightings</span>
          </label>
          <label className="inline-flex items-center">
            <div className="bg-white border p-2 rounded-full"></div>
            <span className="ml-2">Unlikely</span>
          </label>
        </div>
      </div>
      <MarineTable />
    </div>
  );
};

export default MarineLife;
