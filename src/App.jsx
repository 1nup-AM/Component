import React from "react";
import "./index.css"
import Results from "./assets/Components/Results";
import Summary from "./assets/Components/Summary";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4 bg-neutral-100 rounded-3xl max-sm:flex-col max-sm:w-full">
        <Results />
        <Summary />
      </div>
    </div>
  );
}

export default App;
