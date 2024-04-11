import { services, zimmer, zimmerTypen, review } from "./constant";

const InformationSection = () => {
  return (
    <>
      <div className="py-10">
        <div className="pb-3 border-b-2 border-slate-300">
          <h6 className="text-3xl font-semibold tracking-tight">
            Nähere Informationen
          </h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-5 gap-10">
          <div>
            <div className="flex flex-col gap-2.5 border-b pb-8">
              <div className="flex gap-3 items-center">
                <h6 className="text-[60px] leading-none tracking-tighter font-bold">
                  5,0
                </h6>
                <div className="flex flex-col">
                  <p className="text-lg md:text-[20px] font-semibold tracking-tight">
                    Ausgezeichnet
                  </p>
                  <div className="flex items-center gap-2">
                    <ul className="flex items-center gap-1">
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                    </ul>
                    <p className="text-lg md:text-[18px] tracking-tight border-b border-dotted text-slate-600">
                      4.536 Bewertungen
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-[20px] p-0 tracking-tight">
                Nr. 1 von 687 Hotels in Prag
              </p>
              <div className="py-3">
                {review.map((item, key) => (
                  <div key={key} className="flex items-center gap-4">
                    <ul className="flex items-center gap-1">
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                      <li className="w-5 h-5 rounded-full bg-[#4ba771]"></li>
                    </ul>
                    <p className="text-lg md:text-[18px] p-0 tracking-tight">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <img src="/assets/traveler.svg" className="h-6 w-6" />
                <p className="border-b">Travellers' Choice</p>
              </div>
            </div>
            <div className="pt-4">
              <p className="pb-2">
                Hotel Residence Agnes ist eine ausgezeichnete Wahl für alle
                Reisenden, die Prag näher kennenlernen möchten. Es bietet ein
                familienfreundliches Umfeld und viele Annehmlichkeiten, die
                ihren Aufenthalt noch angenehmer machen werden.
              </p>
              <p className="pb-2">
                Dank der nahe gelegenen Sehenswürdigkeiten wie World War II in
                Prague Tour (0,5 km) und Lesser Town (1,7 km) ist das Residence
                Agnes ein hervorragender Ausgangspunkt für alle Reisenden, die
                Prag besuchen möchten.
              </p>
              <p className="pb-2">
                Die Zimmer bieten Flachbildfernseher, Klimaanlage und Minibar
                und dank dem kostenlosen WLAN des Hotel Residence Agnes ist es
                einfach, online zu gehen.
              </p>
              <p className="pb-2">
                Sie können einige der Annehmlichkeiten des Residence Agnes,
                darunter den Concierge, nutzen. Darüber hinaus haben Gäste
                während ihres Aufenthalts Zutritt zum Frühstück inklusive
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-lg md:text-[20px] font-semibold tracking-tight">
                Ausstattungen & Services des Unternehmens
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start gap-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-start justify-center rounded-lg"
                  >
                    <img
                      src={`/assets/${service.image}.svg`}
                      className="w-6 h-6"
                    />
                    <p>{service.title}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold text-base">Mehr anzeigen</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg md:text-[20px] font-semibold tracking-tight">
                Ausstattung der Zimmer
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start gap-2">
                {zimmer.map((service, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center justify-center rounded-lg"
                  >
                    <img
                      src={`/assets/${service.image}.svg`}
                      className="w-6 h-6"
                    />
                    <p>{service.title}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold text-base">Mehr anzeigen</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg md:text-[20px] font-semibold tracking-tight">
                Zimmertypen
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start gap-2">
                {zimmerTypen.map((service, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center justify-center rounded-lg"
                  >
                    <img
                      src={`/assets/${service.image}.svg`}
                      className="w-6 h-6"
                    />
                    <p>{service.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationSection;
