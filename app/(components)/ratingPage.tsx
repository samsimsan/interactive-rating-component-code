"use client";

import Image from 'next/image'
import RateNumber from './rateNumber'

interface RatingPageProps {
    currentRate: number;
    onSelectRate: (newRate: number) => void;
    setSubmitted: (submitted: boolean) => void;
}

const RatingPage = ({
    currentRate,
    onSelectRate,
    setSubmitted
}: RatingPageProps) => {
    return (
        <>
            <div className="p-2 bg-[var(--Dark-Grey)] w-10 h-10 flex items-center justify-center rounded-full">
                <Image
                    src="icon-star.svg"
                    height={16}
                    width={16}
                    alt="star icon"
                />
            </div>
            <h1 className="sm:mt-8 mt-4 font-bold text-2xl">
                How did we do?
            </h1>

            <p className="my-4 text-sm text-[var(--Light-Grey)]">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>


            <div className="flex flex-row justify-between">
                <RateNumber rate={1} currRate={currentRate} selectRate={onSelectRate} />
                <RateNumber rate={2} currRate={currentRate} selectRate={onSelectRate} />
                <RateNumber rate={3} currRate={currentRate} selectRate={onSelectRate} />
                <RateNumber rate={4} currRate={currentRate} selectRate={onSelectRate} />
                <RateNumber rate={5} currRate={currentRate} selectRate={onSelectRate} />
            </div>
            <button onClick={() => setSubmitted(true)} className="transition duration-150 pt-[11px] hover:bg-white hover:text-[var(--Dark-Blue)] p-2 mt-6 rounded-full bg-[var(--primary-orange)] text-[var(--Very-Dark-Blue)] font-bold text-sm w-full tracking-widest">
                SUBMIT
            </button>
        </>
    )
}

export default RatingPage