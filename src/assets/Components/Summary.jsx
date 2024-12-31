import React from "react";

function Summary() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h3 className="text-lg font-medium">Summary</h3>
      <div className="p-2.5 rounded-md flex justify-between items-center h-10 w-52 bg-red-100 max-sm:w-5/6">
        <span className="text-red-600 flex gap-2">
          <img src="images/icon-reaction.svg" alt="reaction" />
          Reaction
        </span>
        <span>
          <b>80</b> / 100
        </span>
      </div>
      <div className="p-2.5 rounded-md flex justify-between items-center h-10 w-52 bg-yellow-100 max-sm:w-5/6">
        <span className="text-yellow-600 flex gap-2">
          <img src="images/icon-memory.svg" alt="memory" /> Memory
        </span>
        <span>
          <b>92</b> / 100
        </span>
      </div>
      <div className="p-2.5 rounded-md flex justify-between items-center h-10 w-52 bg-green-100 max-sm:w-5/6">
        <span className="text-green-600 flex gap-2">
          <img src="images/icon-verbal.svg" alt="verbal"/> Verbal
        </span>
        <span>
          <b>61</b> / 100
        </span>
      </div>
      <div className="p-2.5 rounded-md flex justify-between items-center h-10 w-52 bg-blue-100 max-sm:w-5/6">
        <span className="text-blue-600 flex gap-2">
          <img src="images/icon-visual.svg" alt="visual" /> Visual
        </span>
        <span>
          <b>72</b> / 100
        </span>
      </div>
      <button className="h-10 mt-4 p-2 rounded-full bg-[hsl(224,30%,27%)] flex justify-center items-center text-white hover:bg-[hsl(241,81%,54%)]">Continue</button>
    </div>
  );
}

export default Summary;
