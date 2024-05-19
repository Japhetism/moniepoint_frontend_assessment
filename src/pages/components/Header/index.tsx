import MainMenus from "./MainMenus"

export const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between bg-black text-white m-5 p-2 rounded-2xl">
            <div className="flex flex-row pt-3 pb-3">
                <div className="w-5">
                    <img src="/assets/images/logo.png" alt="logo" />
                </div>
                <div className="pl-1">
                    <span className="font-extrabold">ramos</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0 w-2/5 pt-3 pb-3 rounded-2xl backdrop-sepia-0 md:bg-white/15 font-thin">
                {MainMenus.map((menu: { name: string}) => (
                    <div key={menu.name}>
                        <span>{menu.name}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row justify-end mt-5 md:mt-0 pb-5 md:pb-0">
                <button className="bg-white text-black p-3 px-10 rounded-2xl font-extralight">Sign Up</button>
            </div>
        </div>
    )
}