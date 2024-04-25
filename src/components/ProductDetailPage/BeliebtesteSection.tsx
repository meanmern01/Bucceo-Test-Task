import { services2 } from "./constant";

const BeliebtesteSection = () => {
  return (
    <div className="py-5">
      <div className="pb-3 border-b-2 border-slate-300">
        <h6 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Beliebteste Ausstattungen
        </h6>
      </div>
      <div className="flex w-full md:w-fit mx-full flex-col md:flex-row md:flex-wrap gap-7 justify-center md:justify-between pt-6">
        {services2.map((service, index) => (
          <div key={index} className="flex flex-row gap-3 items-center">
            <img
              src={`/assets/${service.image}.svg`}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10"
            />
            <p className="text-lg md:text-xl font-medium">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeliebtesteSection;
