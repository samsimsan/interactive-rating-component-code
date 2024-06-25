"use client";

interface RateNumberProps {
    rate: number;
    currRate: number;
    selectRate: (newRate: number) => void;
}

const RateNumber = ({ rate, currRate, selectRate }: RateNumberProps) => {
    const handleRateClick = () => {
        selectRate(rate);
    }

    const isSelected = currRate === rate;

    return (
        <div
            onClick={handleRateClick}
            className={`active:bg-opacity-50 transition duration-150 cursor-pointer text-sm font-bold hover:bg-white hover:text-[var(--Very-Dark-Blue)] w-10 h-10 pt-[3px] items-center flex justify-center rounded-full
                ${isSelected ? 'bg-[var(--primary-orange)] text-[var(--Dark-Grey)]' : 'bg-[var(--Dark-Grey)] text-[var(--Light-Grey)]'}
            `}
        >
            {rate}
        </div>
    );
}

export default RateNumber;