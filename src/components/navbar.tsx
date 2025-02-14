import {motion} from "motion/react";
import LogoSrc from "../assets/logo.png";
import {MdEmail} from "react-icons/md";
import {Button} from "./ui/button.tsx";
import SocialList from "./SocialList.tsx";

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
                >
                    <Button asChild variant="outline">
                        <motion.a
                            whileHover={{
                                scale: 1.01,
                            }}
                            whileTap={{scale: 0.9}}
                            href="mailto:j.vami@mading-group.com"
                        >
                            <MdEmail className="size-5"/>
                            <span>Nous contacter</span>
                        </motion.a>
                    </Button>
                </motion.div>
            </nav>
        </header>
    );
}

export default Navbar;