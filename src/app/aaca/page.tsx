import React from "react";
import About from "@/components/aaca/About";
import Team from "@/components/aaca/Team";

export default function AACA() {
  return (
    <div>
      <div className="bg-gray-100 py-6">
        <About></About>
      </div>
      <div className="bg-gray-50">
        <Team></Team>
      </div>
    </div>
  );
}
