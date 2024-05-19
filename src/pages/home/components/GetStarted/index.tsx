export const GetStarted = () => {
    return (
        <div className="container-fluid mt-28 pt-20 pr-10 pl-10 mb-40 pb-10">
           <div className="md:w-4/5 pb-10">
                <p className="text-4xl md:text-8xl">We give you full <br/><span className="text-neutral-400">control</span> over your data</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-5">
                <div className="container-fluid bg-neutral-100 rounded-3xl w-12/12 md:w-6/12 py-5 md:py-10 px-8 md:px-32 pt-10 md:pt-20">
                    <div className="flex flex-row relative z-0">
                        <div className="bg-white w-8/12 md:w-8/12 border rounded-3xl h-72 item-center">
                            <div className="p-8 md:p-16 text-center">
                                <p className="text-xs md:text-xs">Conversion rate</p>
                                <div className="bg-yellow-400 p-4 rounded-2xl mt-5 mb-10 md:mb-5">
                                    <span className="text-5xl">2,3<span className="text-2xl">%</span></span>
                                </div>
                                <p className="text-xs md:text-xs text-neutral-400 px-2 md:px-5">Percentage of website visitors</p>
                            </div>
                        </div>
                        <div className="bg-white w-8/12 h-72 border rounded-3xl absolute z-20 top-8 left-28 md:left-56 shadow-2xl shadow-gray-400">
                            <div className="p-4">
                                <p className="text-neutral-500 text-sm mb-2">Sales revenue</p>
                                <p><span className="text-sm">$&nbsp;</span><span className="text-3xl">131,2K</span></p>
                                <div className="flex flex-row space-x-1 mt-5">
                                    <div className="w-4/12 border-b-4 border-green-500 rounded-3xl" />
                                    <div className="w-4/12 border-b-4 border-yellow-500 rounded-full" />
                                    <div className="w-4/12 border-b-4 border-green-500 rounded-full" />
                                </div>
                                <div>
                                    <div className="flex flex-row justify-between mt-5">
                                        <div className="flex flex-row justify between space-x-2 items-center">
                                            <div>
                                                <img src="/assets/images/lady_back.png" alt="minimum price" className="w-6 h-6 rounded-full" />
                                            </div>
                                            <div className="text-neutral-500 text-xs">
                                                <p>Min. price</p>
                                            </div>
                                        </div>
                                        <div className="flex-end">
                                            <p className="font-thin text-xs">1,200 $</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between mt-5">
                                        <div className="flex flex-row justify-between space-x-2 items-center">
                                            <div>
                                                <img src="/assets/images/lady.png" alt="maximum price" className="w-6 h-6 rounded-full" />
                                            </div>
                                            <div className="text-neutral-500 text-xs">
                                                <p>Max. price</p>
                                            </div>
                                        </div>
                                        <div className="flex-end">
                                            <p className="font-thin text-xs">2,320 $</p>
                                        </div>
                                    </div>
                                    <div className="border-b-2 border-neutral-200 mt-5" />
                                    <div className="flex flex-row justify-between mt-5">
                                        <div>
                                            <p className="text-neutral-500 text-xs">Engagement rate</p>
                                        </div>
                                        <div>
                                            <p className="font-thin text-xs">47.84%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl pb-5 md:pb-10 text-center mt-24">Improved customer service</p>
                    <p className="text-center font-thin pb-5 md:pb-0 px-5">Analytics helps optimize service processes by providing information on how to improve interactions with customers and increases their satisfaction.</p>
                </div>
                <div className="bg-neutral-100 rounded-3xl w-12/12 md:w-6/12 py-5 md:py-10 px-8 md:px-32 pt-10 md:pt-20">
                    <div className="flex flex-col relative">
                        <div className="h-20 bg-white rounded-2xl shadow-2xl shadow-gray-600 mx-10 relative z-0" />
                        <div className="h-20 bg-white rounded-2xl shadow-2xl shadow-gray-600 mx-5 relative z-10 -top-16 px-8 py-1">
                            <p><span className="text-xs">Finance Reports</span></p>
                        </div>
                        <div  className="bg-white rounded-2xl shadow-2xl shadow-gray-400 relative z-10 -top-28 px-8 py-1 md:pb-5">
                            <p><span className="text-xs">Insights</span></p>
                            <div className="mt-10">
                                <p className="text-neutral-500 text-xs mb-5">Total profit</p>
                                <p className="mb-5"><span>$&nbsp;</span><span className="text-3xl">264,2K</span></p>
                                <button className="px-6 py-3 bg-yellow-500 rounded-lg text-xs">Data Visualization</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl pb-5 md:pb-10 text-center">Monitoring key indicators</p>
                    <p className="text-center font-thin pb-5 md:pb-0 px-10">Analytics platforms allow businesses to track KPIs, an important tool for measuring success and achieving goals.</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 font-bold text-gray-700 rounded-3xl bg-red-500 flex items-center justify-center mt-10 mb-10">
                    <img src="/assets/images/logo.png" alt="logo" className="w-10 h-10"  />
                </div>
                <p className="text-5xl md:text-8xl mb-10">Get Started</p>
                <p className="font-thin text-gray-500 text-center">Turn information into advantage! Start using <br/>Ramos today. Sign up for a free trial.</p>
                <div className="flex flex-row justify-between items-center space-x-2 mt-10">
                    <div>
                        <button className="bg-gray-100 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm font-thin">Request a demo</button>
                    </div>
                    <div>
                        <button className="bg-red-500 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm text-white font-thin">Start for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
}