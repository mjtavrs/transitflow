import Image from "next/image";

import transitflowLogo from "@/assets/image/svg/logo/logo.svg";

export default function Header() {
    return (
        <div className="flex bg-primary-blue py-9 px-96 h-40 w-full">
            <div className="flex justify-center">
                <Image
                    src={transitflowLogo}
                    alt="Official Transitflow logo"
                />
            </div>
        </div>
    );
}