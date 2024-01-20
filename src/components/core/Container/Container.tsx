import { ReactNode } from "react";

type Props = {
    backgroundColor: string,
    children: ReactNode
}

export default function Container({ backgroundColor, children }: Props) {
    return (
        <div className={`flex justify-between ${backgroundColor} py-9 px-96 h-40 w-full`}>
            {children}
        </div>
    );
}