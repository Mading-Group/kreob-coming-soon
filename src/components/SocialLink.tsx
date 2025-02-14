import React from 'react';
import {motion} from "motion/react";

function SocialLink({href, children, className}: { href: string, children: React.ReactNode, className?: string }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                color: "#03D35D",
            }}
            className={className}
        >
            {children}
        </motion.a>
    );
}

export default SocialLink;