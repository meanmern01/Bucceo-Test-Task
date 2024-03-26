import { useState } from "react";
import { countries } from "../constants/countries";

interface filterData {
  name: string;
  code: string;
}

const HeroSection = () => {
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState<filterData[]>([]);

  const searchingHandler = (data: string) => {
    if (data === "") {
      setSearchFlag(false);
    } else {
      setSearchFlag(true);
      setSearchData(data);
      let matchData = countries.filter((country) => {
        return country.name.toLowerCase().includes(searchData.toLowerCase());
      });
      setFilteredData(matchData);
    }
  };

  return (
    <div className="w-full bg-[url('/assets/hero-background.png')] bg-no-repeat bg-cover bg-center px-8 pt-36 pb-9">
      <p className="text-[28px]  sm:text-[32px] leading-tight font-light text-center text-[#FFFFFF]">
        We Simplify Diving
      </p>
      <h1 className="text-4xl sm:text-[64px] leading-tight text-white font-light text-center pt-16 pb-6">
        Find your diving ...
        <br />
        and much more
      </h1>
      <div className="relative max-w-[820px] w-full mx-auto">
        <div className="absolute left-[20px] sm:left-[50px] top-1/2 -translate-y-1/2">
          <img src="/assets/Search.svg" />
        </div>
        <input
          className="w-full focus:outline-none p-4 text-lg sm:text-2xl text-center font-light bg-white rounded-[10px] placeholder:text-[#7B7B7B]"
          type="search"
          placeholder="Where are you going?"
          onChange={(e) => searchingHandler(e.target.value)}
        />
        <div className="absolute top-[64px] w-full rounded-[10px] overflow-hidden shadow-cardShadow">
          <div
            className={`${searchFlag ? "block" : "hidden"} ${
              filteredData.length === 0 ? "h-auto" : "h-[250px]"
            } bg-white p-4 overflow-y-scroll`}
          >
            {filteredData.length === 0
              ? "No Result Found"
              : filteredData?.map((e, i) => {
                  return (
                    <div key={i} className="flex items-center gap-3 my-3">
                      <span className="h-[40px] w-[40px] p-1 bg-gray-500 rounded-full grid place-items-center">
                        {e?.code}
                      </span>
                      <h2 className="text-lg">{e?.name}</h2>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
