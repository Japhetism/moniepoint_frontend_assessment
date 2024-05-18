export const Footer = () => {
    return (
        <div className="bg-black pt-28 pb-10 px-10 text-white">
            <div className="flex flex-row justify-between text-white pb-12 border-b-2 border-b-gray-500">
                <div className="flex flex-row items-center space-x-12 font-thin">
                    <div>
                        <span>About</span>
                    </div>
                    <div>
                        <span>Why Us</span>
                    </div>
                    <div>
                        <span>Platform</span>
                    </div>
                    <div>
                        <span>Pricing</span>
                    </div>
                    <div>
                        <span>Contacts</span>
                    </div>
                </div>
                <div className="text-6xl font-thin">
                    <span>hello@ramos.com</span>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-20">
                <div className="flex flex-row justify-between space-x-12">
                    <div className="font-thin">
                        <p>Warrensville Heights</p>
                        <p>14418 Vineyard Drive, NC</p>
                        <p>44128</p>
                    </div>
                    <div className="font-thin">
                        <p>Saint Louis</p>
                        <p>1366 Penn Street</p>
                        <p>63101</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-6 font-thin">
                    <div>
                        <p>Linkedin</p>
                    </div>
                    <div>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <span className="text-9xl">Ramos</span>
                    <sup className="text-7xl"><small>&reg;</small></sup>
                </div>
                <div className="font-thin">
                    <p>Privacy policy</p>
                </div>
                <div className="font-thin">
                    <p>License Agreement</p>
                </div>
                <div>
                    <p>Barcode</p>
                </div>
            </div>
        </div>
    );
}