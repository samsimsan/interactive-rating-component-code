"use client";

import Image from "next/image";
import RateNumber from "./(components)/rateNumber";
import { useState } from "react";
import RatingPage from "./(components)/ratingPage";
import Thankspage from "./(components)/Thankspage";

export default function Page() {

  const [currentRate, setCurrentRate] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const onSelectRate = (newRate: number) => {
    setCurrentRate(newRate);
  }

  return (
    <main className="rounded-3xl h-[350px] sm:h-[52vh] w-[90vw] sm:w-[370px] p-8 bg-[var(--Dark-Blue)]">
      {submitted === true ? (
        <Thankspage rating={currentRate}/>
      ) : (
        <RatingPage
          currentRate={currentRate}
          onSelectRate={onSelectRate}
          setSubmitted={setSubmitted}
        />
      )}
      
    </main>
  );
}