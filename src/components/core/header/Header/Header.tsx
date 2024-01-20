import Image from "next/image";
import transitflowLogo from "@/assets/image/svg/logo/logo.svg";

import Container from "../../Container/Container";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return (
        <>
            <Container backgroundColor="bg-primary-blue">
                <Image
                    src={transitflowLogo}
                    alt="Official Transitflow logo"
                />
                <HeaderIcons />
            </Container>
            <Container backgroundColor="">
                <Navbar />
            </Container>
        </>
    );
}