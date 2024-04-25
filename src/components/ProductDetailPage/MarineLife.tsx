import MarineTable from "./MarineTable";
import { marinLifeOptions } from "./constant";
interface PropsTypes {
  selectedMarinLife: {
    name: string;
    value: string;
  },
  setSelectedMarinLife: React.Dispatch<React.SetStateAction<{
    name: string;
    value: string;
  }>>
}

const MarineLife = ({ selectedMarinLife, setSelectedMarinLife }: PropsTypes) => {
  // 
  return (
    <div className="py-5">
      <div className="pb-3">
        <h6 className="text-2xl md-text-3xl font-semibold tracking-tight">
          Marine Life
        </h6>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2 md:gap-4 w-full">
          {marinLifeOptions.map((options, index) => (
            <>
              <button onClick={() => setSelectedMarinLife({
                name: options.name,
                value: options.value
              })} key={index} className={`${selectedMarinLife.name === options.name ? " bg-blue-500 text-white" : "bg-slate-300"}  text-black py-2 px-4 text-[12px] md:text-[16px] rounded-[1.375rem] hover:bg-blue-500 hover:text-white w-fit md:w-auto`}>
                {options.name}
              </button>
            </>
          ))}

        </div>
        <div className="flex w-full flex-col md:flex-row flex-wrap gap-2 md:gap-4 items-end justify-end">
          <label className="inline-flex gap-2 items-center">
            <div className="bg-blue-500 w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
            <span className="text-[12px] md:text-[14px]">Most likely sightings</span>
          </label>
          <label className="inline-flex gap-2 items-center">
            <div className="bg-white border border-blue-500 w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
            <span className="text-[12px] md:text-[14px]">Possible sightings</span>
          </label>
          <label className="inline-flex gap-2 items-center">
            <div className="bg-white border w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
            <span className="text-[12px] md:text-[14px]">Unlikely</span>
          </label>
        </div>
      </div>
      <MarineTable selectedMarinLife={selectedMarinLife} />
    </div>
  );
};

export default MarineLife;
