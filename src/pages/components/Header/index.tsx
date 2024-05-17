export const Header = () => {
    return (
        <div className="flex flex-row justify-between bg-black text-white m-5 p-2 rounded-2xl">
            <div className="flex flex-row pt-3 pb-3">
                <div className="w-5">
                    <img src="/assets/images/logo.png" alt="logo" />
                </div>
                <div className="pl-1">
                    <span className="font-extrabold">ramos</span>
                </div>
            </div>
            <div className="flex flex-row justify-evenly w-2/5 pt-3 pb-3 rounded-2xl backdrop-sepia-0 bg-white/15 font-thin">
                <div><span>Dashboard</span></div>
                <div><span>Reports</span></div>
                <div><span>Documents</span></div>
                <div><span>History</span></div>
                <div><span>Settings</span></div>
            </div>
            <div className="flex flex-row justify-end">
                <button className="bg-white text-black p-3 px-10 rounded-2xl font-extralight">Sign Up</button>
            </div>
        </div>
    )
}