import React from "react";

function Results() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-white bg-gradient-to-r from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] h-86 w-80 rounded-3xl max-sm:w-full max-sm:gap-1 md:w-full">
      <p className="mt-6 font-semibold">Your Result</p>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[hsl(257, 83%, 46%)] to-[hsl(241, 72%, 46%)] h-32 w-32 p-10 m-1 rounded-full">
        <span className="text-5xl font-semibold p-2">76</span>
        <span className=""> of 100 </span>
      </div>

      <h1 className="text-3xl font-semibold">Great</h1>
      <p className="w-56 text-lg text-center p-2.5 m-2.5 max-sm:w-5/6">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Results;
