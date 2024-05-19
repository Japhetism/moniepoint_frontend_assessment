export const TrafficSources = () => {
    return (
        <div className="container-fluid mt-28 pt-20 pr-10 pl-10 mb-40 pb-10">
            <div className="md:w-3/5">
                <p className="text-4xl md:text-8xl">Maximize <span className="text-stone-400">efficiency</span> with our intuitive</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-row mt-20 items-center relative z:0">
                    <div className="w-32 h-32 bg-yellow-500 rounded-full absolute z:20 left-28 flex flex-col items-center justify-center p-6">
                        <p className="text-center"><span className="text-3xl">45%</span></p>
                        <p className="text-center"><span className="text-center text-xs font-thin">System grow faster</span></p>
                    </div>
                    <div className="w-32 h-32 bg-neutral-200 rounded-full relative z:10 flex flex-col items-center justify-center">
                        <div className="bg-red-500 p-3 rounded-xl">
                            <img src="/assets/images/line_chart.png" alt="line chart" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-20 items-center relative">
                    <div className="bg-yellow-500 rounded-full p-5 md:p-10">
                        <p><span className="text-2xl md:text-7xl">analytic services</span></p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-100 mt-20" />
            <div className="flex flex-col md:flex-row justify-between md:space-x-10 mt-10">
                <div className="text-sm font-thin w-12/12 md:w-5/12">
                    <span>Explore traffic sources, page behavior, conversions and more to gain deep insight into your audience. With us, your business doesn't just adapt - it evolves</span>
                </div>
                <div className="flex flex-row justify-between items-center space-x-2 mt-10 md:mt-0">
                    <div>
                        <button className="bg-gray-100 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm font-thin">Request a demo</button>
                    </div>
                    <div>
                        <button className="bg-red-500 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm text-white font-thin">Start for free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}