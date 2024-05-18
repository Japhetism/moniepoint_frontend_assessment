export const Analytics = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="ms-40">
                    <div className="flex flex-row ml-10 mt-20 items-center relative">
                        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                        <div className="w-20 h-20 bg-red-500 rounded-full absolute left-16"></div>
                        <span className="ml-20 text-8xl">Analytics</span>
                    </div>
                    <div className="mt-10">
                        <span className="text-8xl">that&nbsp;</span>
                        <span className="text-8xl text-stone-400">helps&nbsp;</span>
                        <span className="text-8xl">you&nbsp;</span>
                    </div>
                </div>
                <div className="">
                    <img src="/assets/images/analytics.png" className="w-11/12" />
                </div>
            </div>
            <div className="flex flex-row items-center ml-80">
                <span className="text-8xl">shape&nbsp;</span>
                <div className="w-20 h-20 bg-amber-300 rounded-full"></div>
                <span className="text-8xl">&nbsp;the future</span>
            </div>
        </div>
    )
}