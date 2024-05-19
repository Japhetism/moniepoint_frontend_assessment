import FooterMenus from "./FooterMenus";
import Socials from "./Socials";

export const Footer = () => {
    return (
        <div className="container-fluid mx-auto bg-black pt-28 pb-10 px-10">
            <div className="flex flex-row justify-between text-white pb-12 border-b border-neutral-600">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12 font-thin text-gray-500">
                    {FooterMenus.map((menu: { name: string }) => (
                        <div key={menu.name}>
                            <span>{menu.name}</span>
                        </div>    
                    ))}
                </div>
                <div className="text-2xl md:text-6xl font-thin text-white">
                    <span>hello@ramos.com</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between mt-20">
                <div className="flex flex-row justify-between space-x-12">
                    <div className="font-thin">
                        <p className="text-white text-sm">Warrensville Heights</p>
                        <p className="text-xs text-gray-500">14418 Vineyard Drive, NC</p>
                        <p className="text-xs text-gray-500">44128</p>
                    </div>
                    <div className="font-thin">
                        <p className="text-white text-sm">Saint Louis</p>
                        <p className="text-xs text-gray-500">1366 Penn Street</p>
                        <p className="text-xs text-gray-500">63101</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-6 font-thin text-white text-right">
                    {Socials.map((social: { name: string }) => (
                        <div key={social.name}>
                            <p>{social.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between md:items-center mt-10">
                <div className="text-white">
                    <span className="text-7xl md:text-9xl">Ramos</span>
                    <sup className="text-5xl md:text-7xl"><small>&reg;</small></sup>
                </div>
                <div className="font-thin">
                    <p className="text-sm text-gray-500">Privacy policy</p>
                </div>
                <div className="font-thin">
                    <p className="text-sm text-gray-500">License Agreement</p>
                </div>
                <div className="text-white">
                    <img src="/assets/images/barcode.png" alt="barcode" className="w-28 h-28 rounded-3xl" />
                </div>
            </div>
        </div>
    );
}