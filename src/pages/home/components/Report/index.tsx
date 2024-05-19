import { Button } from "../../../components/Button";

export const Report = () => {
    return (
        <div className="container-fluid mt-28 bg-gray-100 pt-20 pr-10 pl-10 mb-40 pb-10" style={{borderRadius: "70px"}}>
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center mb-10">
                <div className="w-12/12 md:w-9/12">
                    <div className="">
                        <p className="text-2xl md:text-4xl">Your key to strategic success<br/>through analytics</p>
                    </div>
                </div>
                <div className="w-12/12 md:w-3/12">
                    <div className="">
                        <p className="font-thin md:text-center">Ready for exciting instantaneous,<br/>all-accessible insights in real time?</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-6">
                <div className="w-12/12 md:w-8/12">
                    <div className="bg-white rounded-3xl flex flex-col md:flex-row justify-between">
                        <div className="w-12/12 md:w-6/12">
                            <div className="p-10">
                                <Button
                                    className="bg-yellow-400 p-3 rounded-xl mb-10 text-xs md:text-sm"
                                    name="Setting up reports"
                                />
                                <div className="w-10/12 mt-10 md:mt-20">
                                    <p className="text-2xl md:text-3xl">Fast and easy access to analytics</p>
                                </div>
                                <div className="w-12/12 md:w-11/12">
                                    <p className="mt-6 text-lg md:text-2xl text-neutral-400 font-thin">One platform is a comprehensive system solutions that will be the first step towards digitalization of your business!</p>   
                                </div>                            
                            </div>
                        </div>
                        <div className="w-12/12 md:w-6/12">
                            <div className="pt-10">
                                <div className="pr-10 pl-5 pb-10 pt-5 border-l border-t rounded-tl-3xl">
                                    <span>Sales statistic</span>
                                    <div className="flex flex-row justify-between items-center space-x-5 md:space-x-0 mt-5">
                                        <div>
                                            <div className="w-12 h-12 bg-red-500 rounded-full flex flex-col items-center justify-center">
                                                <img src="/assets/images/line_chart.png" alt="line chart" className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-neutral-500 mb-3">Total profit</p>
                                            <p><span>$&nbsp;</span><span className="text-3xl">264,2k</span></p>
                                        </div>
                                        <div className="bg-neutral-200 p-2 w-12/12 md:w-4/12 rounded-2xl p-6 md:p-4">
                                            <p className="text-xs">Visitors</p>
                                            <div className="border-t-2 border-green-500 mt-2 mb-3"/>
                                            <p className="text-3xl">56k</p>
                                        </div>
                                    </div>
                                    <div className="border h-48 rounded-2xl mt-10 p-2">
                                        <p className="text-sm">Visit statistics</p>
                                        <div className="mt-3">
                                            <img src="/assets/images/clip_chart.png" alt="line chart" className="w-96 h-36" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-12/12 md:w-4/12 bg-black rounded-3xl p-5 md:p-10">
                    <div className="py-3 md:py-6">
                        <div className="flex flex-row justify-between space-x-2 mb-14">
                            <div className="h-40 w-6/12 rounded-2xl p-5 border-gray-500 flex flex-col items-center" style={{borderWidth: "0.2px"}}>
                                <div className="w-10 mt-2">
                                    <img src="/assets/images/logo.png" alt="logo" />
                                </div>
                                <div className="flex flex-row justify between space-x-2 items-center mt-5">
                                    <div>
                                        <img src="/assets/images/lady.png" alt="user" className="w-10 h-10 rounded-full" />
                                    </div>
                                    <div>
                                        <img src="/assets/images/lady.png" alt="user" className="w-10 h-10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="h-40 w-6/12 rounded-2xl p-5 border-gray-4 border-gray-500 text-white" style={{borderWidth: "0.2px"}}>
                                <p className="text-xs md:text-sm font-thin">Transactions</p>
                                <p className="text-5xl md:text-7xl font-thin mt-8">43K</p>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-white text-2xl mb-10">Widget control</p>
                            <p className="text-white text-sm">Reports provide a comprehensive overview of important aspects of web analytics</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="flex flex-col md:flex-row md:mx-72 space-y-4 md:space-y-0 md:space-x-2 my-10 items-center">
                <div className="w-12/12 md:w-6/12">
                    <span>Up to</span>
                    <span className="text-9xl">45%</span>
                </div>
                <div className="w-12/12 md:w-9/12">
                    <span>Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from data, reduce time analysis and save time for making important, informed decisions</span>
                </div>
            </div>
        </div>
    );
}