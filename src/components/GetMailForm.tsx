import React from 'react';
import {Input} from "./ui/input.tsx";
import {Button} from "./ui/button.tsx";
import {Calendar} from "lucide-react";
import {toast} from "sonner";
import emailjs from '@emailjs/browser'
import {motion} from "framer-motion";

function GetMailForm() {
    const form = React.useRef<HTMLFormElement>(null);

    function sendMailForm(e: React.FormEvent) {
        e.preventDefault();
        if (form.current) {
            toast
                .promise(
                    emailjs
                        .sendForm('service_7bkvdk4', 'template_tiiwko9', form.current, {
                            publicKey: 'K9HwX7T3lqaq1AAoU'
                        }),
                    {
                        loading: 'Envoi en cours...',
                        success: (data) => {
                            form.current?.reset();
                            if (data.status !== 200) {
                                return 'Une erreur est survenue, veuillez réessayer plus tard.';
                            }

                            return `Merci, Nous vous tiendrons informé de notre lancement.`;
                        },
                        error: 'Une erreur est survenue, veuillez réessayer plus tard.',
                    }
                )
        }
    }

    return (
        <form ref={form}
              className="flex justify-center mt-8 items-center gap-2"
              onSubmit={sendMailForm}
        >
            <Input
                placeholder="Votre adresse email"
                name={"email"}
                type="email"
                autoComplete="email"
                className="max-w-52 bg-[#FEFCFB]"
            />
            <Button asChild className="cursor-pointer">
                <motion.button type="submit"
                               className="flex items-center gap-2"
                               whileHover={{scale: 1.05}}
                               whileTap={{scale: 0.95}}
                >
                    <Calendar className="size-5"/>
                    <span className="hidden md:inline-block">Soyez prêts</span>
                </motion.button>
            </Button>
        </form>
    );
}

export default GetMailForm;