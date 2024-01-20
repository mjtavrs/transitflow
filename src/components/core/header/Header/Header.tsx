import Image from "next/image";
import HeaderIcons from "../HeaderIcons/HeaderIcons";

import transitflowLogo from "@/assets/image/svg/logo/logo.svg";

export default function Header() {
    return (
        <div className="flex justify-between bg-primary-blue py-9 px-96 h-40 w-full">
            <Image
                src={transitflowLogo}
                alt="Official Transitflow logo"
            />
            <HeaderIcons />
        </div>
    );
}