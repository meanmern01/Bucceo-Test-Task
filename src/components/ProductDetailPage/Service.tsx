import React from "react";
import { services3, services4 } from "./constant";

const Service = () => {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-md px-4 mb-4 flex flex-col md:flex-row justify-around items-start gap-2 p-5">
      <div className="flex flex-col justify-around gap-2 w-full md:w-1/2">
        <div className="flex gap-2 items-center">
          <img
            src="/assets/service.svg"
            className="w-6 h-6 me-3"
            alt="Service Icon"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-sm md:text-base font-bold">SERVICES</h2>
            <p className="text-sm md:text-base text-gray-600">
              Nitrox, Mixed gas, Equipment Sales, Scuba equipment rental,
              Conservation activities
            </p>
          </div>
        </div>
        <h1 className="flex gap-2">
          ADAPTIVE SERVICES
          <img
            src="/assets/service.svg"
            className="w-6 h-6 ms-3"
            alt="Service Icon"
          />
        </h1>

        {services4.map((service, index) => (
          <div key={index} className="flex gap-2 items-center">
            <img
              src={`/assets/${service.image}.svg`}
              className="w-6 h-6 me-3"
              alt={service.title}
            />
            <div className="flex flex-col items-start">
              <h2 className="text-sm md:text-base font-bold">
                {service.title}
              </h2>
              <p className="text-sm md:text-base w-full text-gray-600">
                {service.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 flex flex-col gap-2 items-start justify-center rounded-lg w-full md:w-1/2">
        {services3.map((service, index) => (
          <div key={index} className="p-3 flex gap-3 items-center">
            <img src={`/assets/${service.image}.svg`} className="w-6 h-6" />
            <div>
              <p className="text-sm md:text-base font-bold">{service.title}</p>
              <p className="text-sm md:text-base text-slate-500">
                {service?.subtitle}
              </p>
            </div>
          </div>
        ))}
        <button className="bg-blue-500 w-[300px] text-white p-2 rounded ">
          Contract Shop
        </button>
      </div>
    </div>
  );
};

export default Service;
