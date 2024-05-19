export const Idea = () => {
    return (
        <div className="container-fluid mt-28 bg-gray-100 pt-20 pr-10 pl-10 mb-40 pb-10" style={{borderRadius: "70px"}}>
            <div className="flex flex-col md:flex-row relative z-20">
                <div className="w-8/12 md:w-3/12">
                    <span className="text-2xl md:text-4xl">Turning data into real actions and ideas.</span>
                    <div className="flex flex-col space-y-5 mt-10">
                        <div className="flex flex-row items-center justify-between bg-white p-3 pr-5 pl-5 rounded-3xl w-12/12 md:w-9/12">
                            <span>Instant Insights</span>
                            <div className="w-10 h-10 font-bold text-gray-700 rounded-full bg-gray-100 flex items-center justify-center">+</div>
                        </div>
                        <div className="flex flex-row items-center justify-between bg-white p-3 pr-5 pl-5 rounded-3xl w-12/12 md:w-9/12">
                            <span>AI technology</span>
                            <div className="w-10 h-10 font-bold text-gray-700 rounded-full bg-gray-100 flex items-center justify-center">+</div>
                        </div>
                        <div className="flex flex-row items-center justify-between bg-white p-3 pr-5 pl-5 rounded-3xl w-12/12 md:w-9/12">
                            <span>Easy Integration</span>
                            <div className="w-10 h-10 font-bold text-gray-700 rounded-full bg-gray-100 flex items-center justify-center">+</div>
                        </div>
                    </div>
                </div>
                <div className="w-4/8 md:w-9/12">
                    <img src="/assets/images/screen_chart.png" alt="chart" />
                </div>
            </div>
            <div className="mt-5 md:-mt-64 relative z-10">
                <span className="hidden md:block text-red-500 text-xs md:text-9xl" style={{fontSize: "475px"}}>Ramos</span>
                <span className="md:hidden text-red-500 text-xs md:text-9xl" style={{fontSize: "120px"}}>Ramos</span>
            </div>
        </div>
    )
}