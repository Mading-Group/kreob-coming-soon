import Navbar from "./components/navbar.tsx";
import {TextEffect} from "./components/ui/text-effect.tsx";
import {motion} from "framer-motion";
import SocialList from "./components/SocialList.tsx";
import GetMailForm from "./components/GetMailForm.tsx";
import {Toaster} from "./components/ui/sonner.tsx";

function App() {

    return (
        <div className="relative min-h-screen flex flex-col bg-cover bg-no-repeat bg-center bg-[url('./assets/bg.jpg')]">
            <div className="absolute inset-0 bg-zinc-950 opacity-40"/>
            <main className="container mx-auto w-full flex-1 flex flex-col">
                <Navbar/>
                <div className="relative flex-1 flex flex-col items-center">
                    <div className="max-w-[500px] lg:max-w-[700px] mt-16 px-4 pb-8 lg:px-0 lg:pb-0">
                        <h1 className="text-[#FEFCFB] text-2xl sm:text-3xl lg:text-5xl font-bold text-center">
                            <TextEffect preset='slide' speedReveal={1.1}>
                                L’innovation au service de
                            </TextEffect>
                            <TextEffect preset='slide' delay={0.3} as="span" className="text-[#03D35D]">l’agriculture</TextEffect>
                        </h1>
                        <TextEffect as="p" per="word" preset="blur" delay={0.6} speedReveal={1.5} className="text-[#FEFCFB] text-xs sm:text-sm md:text-lg text-center mt-4">
                            KREOB réinvente le négoce agricole : une plateforme agile et connectée, conçue pour booster vos performances et redéfinir les standards du secteur.
                        </TextEffect>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 1.5, duration: 0.8}}
                        >
                            <GetMailForm/>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 1.9, duration: 0.8}}
                            className="flex justify-center mt-8 space-x-4 text-white md:hidden"
                        >
                            <SocialList/>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Toaster/>
        </div>
    )
}

export default App
