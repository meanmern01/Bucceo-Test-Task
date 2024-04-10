
import { services2 } from './constant'

const BeliebtesteSection = () => {
    return (
        <div className="pb-10">
            <div className="pb-3 border-b-2 border-slate-300">
                <h6 className="text-3xl font-bold tracking-tight">Beliebteste Ausstattungen</h6>
            </div>
            <div className="flex flex-wrap gap-7 justify-between pt-6">
                {services2.map((service, index) => (
                    <div key={index} className=" flex gap-3 items-center">
                        <img src={`/assets/${service.image}.svg`} className=" w-12 h-12" />
                        <p className="text-[25px] font-medium">{service.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BeliebtesteSection