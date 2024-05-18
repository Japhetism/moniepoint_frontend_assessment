export const Control = () => {
    return (
        <div className="mt-28 pt-20 pr-10 pl-10 mb-40 pb-10">
            <div className="w-4/5 pb-10">
                <p className="text-8xl">We give you full <br/><span className="text-gray-400">control</span> over your data</p>
            </div>
            <div className="flex flex-row justify-between space-x-5 text-center">
                <div className="bg-gray-100 rounded-3xl w-6/12 py-10 px-32">
                    <p className="text-xl pb-10">Improved customer service</p>
                    <p className="text-center">Analytics helps optimize service processes by <br/> providing information on how to improve interactions <br/> with customers and increases their satisfaction.</p>
                </div>
                <div className="bg-gray-100 rounded-3xl w-6/12 py-10 px-32">
                    <p className="text-xl pb-10">Monitoring key indicators</p>
                    <p>Analytics platforms allow businesses to track <br/>KPIs, an important tool for measuring success<br/> and achieving goals.</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 font-bold text-gray-700 rounded-3xl bg-red-500 flex items-center justify-center mt-10">
                    <img src="/assets/images/logo.png" className="w-10 h-10"  />
                </div>
                <p className="text-8xl mb-10">Get Started</p>
                <p className="font-thin text-gray-500 text-center">Turn information into advantage! Start using <br/>Ramos today. Sign up for a free trial.</p>
                <div className="flex flex-row justify-between items-center space-x-2 mt-10">
                    <div>
                        <button className="bg-gray-100 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm font-thin">Request a demo</button>
                    </div>
                    <div>
                        <button className="bg-red-500 pt-2 pb-2 pr-8 pl-8 rounded-lg text-sm font-thin">Start for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
}