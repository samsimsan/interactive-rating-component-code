"use client";

import Image from "next/image";
interface ThankspageProp {
    rating: number
}

const Thankspage = ({ rating }: ThankspageProp) => {
    return (
        <div className="flex items-center flex-col">
            <Image
                src="illustration-thank-you.svg"
                height={140}
                width={140}
                alt="thanks icon"
            />
            <div className="flex items-center justify-center bg-[var(--Dark-Grey)] text-[var(--primary-orange)] mt-8 py-1 pt-[7px] px-4 text-sm rounded-full">
                You selected {rating} out of 5
            </div>
            <h1 className="sm:mt-8 mt-4 font-bold text-2xl">
                Thank you!
            </h1>
            <p className="my-4 text-sm text-[var(--Light-Grey)] text-center tracking-wide">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}

export default Thankspage