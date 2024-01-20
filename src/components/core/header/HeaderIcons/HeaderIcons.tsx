export default function HeaderIcons() {
    return (
        <div className="flex">
            <div className="flex gap-4 w-64 items-center">
                <i className="fa-regular fa-clock p-5 rounded-[50%] text-[22px] text-secondary-yellow border-tertiary-blue border-[1px] bg-secondary-blue inline" />
                <div className="flex flex-col">
                    <p className="text-primary-white text-sm font-medium">Mon - Sat 9.00 - 18.00<br />Sunday Closed</p>
                </div>
            </div>
            <div className="flex gap-4 w-64 items-center">
                <i className="fa-regular fa-envelope p-5 rounded-[50%] text-[22px] text-secondary-yellow border-tertiary-blue border-[1px] bg-secondary-blue inline" />
                <div className="flex flex-col">
                    <p className="text-primary-white text-sm font-medium">Email<br />contact@logistics.com</p>
                </div>
            </div>
            <div className="flex gap-4 w-64 items-center">
                <i className="fa-solid fa-phone p-5 rounded-[50%] text-[22px] text-secondary-yellow border-tertiary-blue border-[1px] bg-secondary-blue inline" />
                <div className="flex flex-col">
                    <p className="text-primary-white text-sm font-medium">Call Us<br />(00) 112 365 489</p>
                </div>
            </div>
        </div>
    );
}