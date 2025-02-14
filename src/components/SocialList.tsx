import {socialLinks} from "../constants.tsx";
import SocialLink from "./SocialLink.tsx";

function SocialList() {
    return socialLinks.map(({href, icon}, index) => (
        <SocialLink key={index} href={href}>
            {icon}
        </SocialLink>
    ));
}

export default SocialList;