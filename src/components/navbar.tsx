import {motion} from "motion/react";
import LogoSrc from "../assets/logo.png";
import {MdEmail, MdPhone} from "react-icons/md";
import {Button} from "./ui/button.tsx";
import SocialList from "./SocialList.tsx";
import Tooltip from "@/components/tooltip.tsx";

function Navbar() {
    return (
        <header
            className="transition-all duration-200 relative max-w-screen-xl mx-auto w-full py-2 px-3 md:px-7 lg:px-14"
        >
            <nav className="container mx-auto flex justify-between items-center h-16">
                <div className="max-md:hidden flex space-x-4 text-white">
                    <SocialList/>
                </div>
                <div className="flex-1 flex md:justify-center">
                    <motion.img
                        src={LogoSrc}
                        alt="Logo"
                        className="size-28"
                    />
                </div>
                <motion.div
                    className="flex items-center space-x-4"
                >
                    <Tooltip content="+225 27 22 24 14 05" direction="bottom" className="text-nowrap">
                        <Button asChild variant="outline">
                            <motion.a
                            className=""
                                whileHover={{
                                    scale: 1.01,
                                }}
                                whileTap={{scale: 0.9}}
                                href="tel:+2252722241405"
                            >
                                <MdPhone className="size-5"/>
                                <span>Tel</span>
                            </motion.a>
                        </Button>
                    </Tooltip>
                    <Tooltip content="contact@kreob.com" direction="bottom">
                        <Button asChild>
                            <motion.a
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{scale: 0.9}}
                                href="mailto:contact@kreob.com"
                            >
                                <MdEmail className="size-5"/>
                                <span>Email</span>
                            </motion.a>
                        </Button>
                    </Tooltip>
                </motion.div>
            </nav>
        </header>
    );
}

export default Navbar;