export const Efficiency = () => {
    return (
        <div className="mt-28 pt-20 pr-10 pl-10 mb-40 pb-10">
            <div className="w-3/5">
                <p className="text-8xl">Maximize <span className="text-stone-400">efficiency</span> with our intuitive</p>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row mt-20 items-center relative">
                    <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
                    <div className="w-32 h-32 bg-yellow-500 rounded-full absolute left-24"></div>
                </div>
                <div className="flex flex-row mt-20 items-center relative">
                    <div className="w-96 h-32 bg-yellow-500 rounded-3xl"></div>
                </div>
            </div>
            <div className="border-t-2 border-gray-100 mt-20" />
            <div className="flex flex-row justify-between space-x-10 mt-10">
                <div className="text-sm font-thin w-5/12">
                    <span>Explore traffic sources, page behavior, conversions and more to gain deep insight into your audience. With us, your business doesn't just adapt - it evolves</span>
                </div>
                <div className="flex flex-row justify-between items-center space-x-2">
                    <div>
                        <button className="bg-gray-100 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm font-thin">Request a demo</button>
                    </div>
                    <div>
                        <button className="bg-red-500 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm font-thin">Start for free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}